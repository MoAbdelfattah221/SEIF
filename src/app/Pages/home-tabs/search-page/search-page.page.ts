import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder, NativeGeocoderOptions} from '@ionic-native/native-geocoder/ngx';
import {SearchService} from '../../../Service/search.service';
import {IonSearchbar, ToastController} from '@ionic/angular';
import {IDoctorSearch} from '../../../Models/doctor-search';
import {FavoriteService} from '../../../Service/favorite.service';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.page.html',
    styleUrls: ['./search-page.page.scss'],
})
export class SearchPagePage implements OnInit {
    locationResults;
    @ViewChild('search', {static: false}) search: IonSearchbar;

    constructor(private router: Router,
                private geolocation: Geolocation,
                public searchService: SearchService,
                public toastController: ToastController,
                private favoritesService: FavoriteService,
                private nativeGeocoder: NativeGeocoder) {
    }

    ngOnInit() {
        this.getLocationLogLat();
        this.searchForDoctor();
    }

    ionViewDidEnter() {
        // setTimeout(() => {
        //     this.search.setFocus();
        // });
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

    searchForDoctor() {
        this.searchService.postSearchQuery();
    }

    searchDoctorSpec(event) {
        const val = event.target.value;
        this.searchService.searchDoctors = this.searchService.doctors;
        console.log(this.searchService.searchDoctors)
        if (val && val.trim() !== '') {
            this.searchService.searchDoctors = this.searchService.doctors.filter((item: any) => {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        console.log(this.searchService.searchDoctors)
    }

    goToSearchByDoctorName() {
        this.router.navigate(['home-page-tabs', 'search-page', 'search-by-doctor-name']);
    }

    goToSearchBySpecialtyAndArea() {
        this.router.navigate(['home-page-tabs', 'search-page', 'search-by-specialty-and-area']);
    }

    goToFilterPage() {
        this.router.navigate(['home-page-tabs', 'search-page', 'filter-doctors']);
    }

    goToFilterLocationGPSPage() {
        this.router.navigate(['home-page-tabs', 'search-page', 'locate-doctors-gps']);
    }

    onFavoriteDoctor(doctor: any) {
        this.favoritesService.postDoctorAsFavorite(doctor.doctorId).subscribe((res: { result }) => {
        }, error => {
        }, async () => {
            const toast = await this.toastController.create({
                message: `Doctor ${doctor.name} Has Been Added To Favorite`,
                position: 'top',
                duration: 2000
            });
            await toast.present();
            this.searchService.postSearchQuery();

        });
    }

    onRemoveFavoriteDoctor(doctor: any) {
        this.favoritesService.removeDoctorAsFavorite(doctor.doctorId).subscribe((res: { result }) => {
            console.log(res.result);
        }, error => {
        }, async () => {
            const toast = await this.toastController.create({
                message: `Doctor ${doctor.name} Has Been Removed From Favorite`,
                position: 'top',
                duration: 2000
            });
            await toast.present();
            this.searchService.postSearchQuery();
        });
    }

}
