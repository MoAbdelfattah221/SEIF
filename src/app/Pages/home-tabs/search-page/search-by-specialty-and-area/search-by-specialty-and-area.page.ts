import {Component, OnInit, ViewChild} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder, NativeGeocoderOptions} from '@ionic-native/native-geocoder/ngx';
import {SearchBySpecialtyAndAreaService} from '../../../../Service/search-by-specialty-and-area.service';
import {IDoctorSpecialty} from '../../../../Models/doctor-specialty';
import {IonSearchbar} from '@ionic/angular';
import {SearchService} from '../../../../Service/search.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search-by-specialty-and-area',
    templateUrl: './search-by-specialty-and-area.page.html',
    styleUrls: ['./search-by-specialty-and-area.page.scss'],
})
export class SearchBySpecialtyAndAreaPage implements OnInit {
    locationResults;
    doctorSpecialties: IDoctorSpecialty[];
    @ViewChild('search', {static: false}) search: IonSearchbar;
    searchedItem: any;

    constructor(private geolocation: Geolocation,  public searchService: SearchService,
                private router: Router,
                private searchBySpecialityAndAreaService: SearchBySpecialtyAndAreaService,
                private nativeGeocoder: NativeGeocoder) {
    }

    ngOnInit() {
        this.getLocationLogLat();
        this.getAllDoctorSpecialties();
    }

    ionViewDidEnter() {
        setTimeout(() => {
            this.search.setFocus();
        });
    }

    searchSpec(event) {
        const val = event.target.value;
        this.searchedItem = this.doctorSpecialties;
        if (val && val.trim() !== '') {
            this.searchedItem = this.doctorSpecialties.filter((item: any) => {
                return (item.display_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
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

    getAllDoctorSpecialties() {
        this.searchBySpecialityAndAreaService.getSpecialties().subscribe((res: { result }) => {
            this.doctorSpecialties = res.result;
            this.searchedItem = this.doctorSpecialties;
        });
    }

    async searchForDoctorBySpeciality(specialtyId: number) {
        this.searchService.searchQuery.specialty = specialtyId;
        await this.searchService.postSearchQuery();
        await this.router.navigate(['/home-page-tabs/search-page']);
    }
}
