import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalFilterDoctorPage} from './modal-filter-doctor/modal-filter-doctor.page';
import {NativeGeocoder, NativeGeocoderOptions} from '@ionic-native/native-geocoder/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
    selector: 'app-search-result-of-doctors',
    templateUrl: './search-result-of-doctors.page.html',
    styleUrls: ['./search-result-of-doctors.page.scss'],
})
export class SearchResultOfDoctorsPage implements OnInit {
    locationResults;
    hideMe = false;
    segment: string;
    rangeValue = {lower: 55, upper: 500};

    constructor(public modalController: ModalController, private geolocation: Geolocation,
                private nativeGeocoder: NativeGeocoder) {
    }

    ngOnInit() {
        this.getLocationLogLat();
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

    async presentFilterDoctorModal() {
        const modal = await this.modalController.create({
            component: ModalFilterDoctorPage
        });
        return await modal.present();
    }

    showModal() {
        this.segment = 'filter';
        this.hideMe = true;
    }

    closeModal() {
        this.hideMe = false;
    }
}
