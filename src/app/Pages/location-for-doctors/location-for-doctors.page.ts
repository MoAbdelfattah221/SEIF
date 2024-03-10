import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {environment} from '../../../environments/environment';
import {GoogleMapService} from '../../Service/google-map.service';
import {map} from 'rxjs/operators';
import {ILocationLatLng} from '../../Models/location-lat-lng';

declare var google;

@Component({
    selector: 'app-location-for-doctors',
    templateUrl: './location-for-doctors.page.html',
    styleUrls: ['./location-for-doctors.page.scss'],
})
export class LocationForDoctorsPage implements OnInit, AfterViewInit {
    @ViewChild('googleMap') mapElement: ElementRef;
    map: any;
    markers = [];
    locations: ILocationLatLng[];

    constructor(private renderer: Renderer2, private googleMapService: GoogleMapService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.getGoogleMap().then(googleMap => {
            // const mapEl = this.googleMapElement.nativeElement;
            // // tslint:disable-next-line:no-shadowed-variable
            // const map = new googleMap.Map(mapEl, {
            //     center: {lat: 26.8206, lng: 30.8025},
            //     zoom: 5,
            //     mapTypeId: googleMap.maps.MapTypeId.ROADMAP
            // });
            // googleMap.event.addListenerOnce(map, 'idle', () => {
            //     this.renderer.addClass(this.mapElement.nativeElement, 'visible');
            // });
            // map.addListener('click', event => {
            //     const selectedLocation = {
            //         lat: event.latLng.lat(),
            //         lng: event.latLng.lng()
            //     };
            //
            //     if (selectedLocation) {
            //         this.getAddress(selectedLocation.lat, selectedLocation.lng);
            //     }
            // });

            const latLang = new google.maps.LatLng(26.8206, 30.8025);
            const mapOptions = {
                center: latLang,
                zoom: 5,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.googleMapService.getLocationsTest().subscribe(res => {
                this.locations = res as ILocationLatLng[];
                console.log(this.locations);
            }, error => {
            }, () => {
                //    Markers
                this.updateMap(this.locations);
            });
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
}
