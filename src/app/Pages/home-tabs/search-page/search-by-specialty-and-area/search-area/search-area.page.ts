import {Component, OnInit, ViewChild} from '@angular/core';
import {IDoctorSpecialty} from '../../../../../Models/doctor-specialty';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {SearchBySpecialtyAndAreaService} from '../../../../../Service/search-by-specialty-and-area.service';
import {NativeGeocoder, NativeGeocoderOptions} from '@ionic-native/native-geocoder/ngx';
import {IDoctorCountryState} from '../../../../../Models/doctor-country-state';
import {NavigationExtras, Router} from '@angular/router';
import {IonSearchbar} from '@ionic/angular';

@Component({
    selector: 'app-search-area',
    templateUrl: './search-area.page.html',
    styleUrls: ['./search-area.page.scss'],
})
export class SearchAreaPage implements OnInit {
    locationResults;
    countryStates: IDoctorCountryState[];
    @ViewChild('search', {static: false}) search: IonSearchbar;
    searchedItem: any;

    constructor(private geolocation: Geolocation,
                private searchBySpecialityAndAreaService: SearchBySpecialtyAndAreaService,
                public router: Router,
                private nativeGeocoder: NativeGeocoder) {
    }

    ngOnInit() {
        this.getLocationLogLat();
        this.getAllCountries();
    }

    ionViewDidEnter() {
        setTimeout(() => {
            this.search.setFocus();
        });
    }

    getLocationLogLat() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.getLocation(resp.coords.latitude, resp.coords.longitude);
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

    getAllCountries() {
        this.searchBySpecialityAndAreaService.getAllCountries().subscribe((res: { result }) => {
            this.countryStates = res.result;
            this.searchedItem = this.countryStates;
        });
    }

    searchCountryState(event) {
        const val = event.target.value;
        this.searchedItem = this.countryStates;
        if (val && val.trim() !== '') {
            this.searchedItem = this.countryStates.filter((item: any) => {
                return (item.display_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }

    onClickToCity(state_id: number) {
        const navigationExtras: NavigationExtras = {
            state: {
                state_id
            }
        };
        this.router.navigate(['home-page-tabs', 'search-page', 'search-by-specialty-and-area', 'search-area', 'search-in-area'], navigationExtras);
    }

}
