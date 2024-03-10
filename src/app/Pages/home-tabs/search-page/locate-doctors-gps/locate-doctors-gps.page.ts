import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ILocationLatLng} from '../../../../Models/location-lat-lng';
import {GoogleMapService} from '../../../../Service/google-map.service';
import {environment} from '../../../../../environments/environment';
import {NativeGeocoder, NativeGeocoderOptions} from '@ionic-native/native-geocoder/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
    selector: 'app-locate-doctors-gps',
    templateUrl: './locate-doctors-gps.page.html',
    styleUrls: ['./locate-doctors-gps.page.scss'],
})
export class LocateDoctorsGPSPage implements OnInit, AfterViewInit {
    @ViewChild('googleMap') mapElement: ElementRef;
    map: any;
    markers = [];
    locations: ILocationLatLng[];
    locationResults;

    constructor(private renderer: Renderer2,
                private geolocation: Geolocation,
                private nativeGeocoder: NativeGeocoder,
                private googleMapService: GoogleMapService) {
    }

    ngOnInit() {
        this.getLocationLogLat();
    }

    ngAfterViewInit() {
        this.getGoogleMap().then(googleMap => {

            const latLang = new google.maps.LatLng(26.8206, 30.8025);
            const mapOptions = {
                center: latLang,
                zoom: 6,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.getLocationLogLat();
            // this.googleMapService.getLocationsTest().subscribe(res => {
            //     this.locations = res as ILocationLatLng[];
            //     // console.log(this.locations);
            // }, error => {
            // }, () => {
            //     //    Markers
            //     this.updateMap(this.locations);
            // });
        }).catch(error => {
            console.log(error);
        });
    }

    private getGoogleMap(): Promise<any> {
        const win = window as any;
        const googleModule = win.google;
        if (googleModule && googleModule.maps) {
            return Promise.resolve(googleModule.maps);
        }
        return new Promise((reslove, reject) => {
            const script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + environment.googleMapsApiKey;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = () => {
                const loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    reslove(loadedGoogleModule.maps);
                } else {
                    reject('Error Happened In Google SDK Try Again later');
                }
            };
        });
    }

    private getAddress(lat: number, lng: number) {
        this.googleMapService.getAddress(lat, lng).subscribe(res => {
            console.log(res);
        });
    }

    updateMap(locations: ILocationLatLng[]) {
        this.markers.map(marker => marker.setMap(null));
        this.markers = [];
        for (const loc of locations) {
            const latLng = new google.maps.LatLng(loc.lat, loc.lng);
            const marker = new google.maps.Marker({
                position: latLng,
                animation: google.maps.Animation.DROP,
                map: this.map
            });
            this.markers.push(marker);
        }
    }

    getLocationLogLat() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // console.log(resp);
            var locations = [];
            this.getLocation(resp.coords.latitude, resp.coords.longitude);
            this.googleMapService.getPartners(resp.coords.latitude, resp.coords.longitude).subscribe((res: any) => {
                console.log(res.result);
                for(let partner of res.result){
                    locations.push({
                        'lat': partner.partner_latitude,
                        'lng': partner.partner_longitude
                    })
                }
            }, error => {
            }, () => {
                //    Markers
                this.updateMap(locations);
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }

    getLocation(latitude, longitude) {
        const options: NativeGeocoderOptions = {
            useLocale: true,
            maxResults: 1
        };
        this.nativeGeocoder.reverseGeocode(latitude, longitude, options).then((result) => {
            this.locationResults = result[0].locality;
        });
    }
}
