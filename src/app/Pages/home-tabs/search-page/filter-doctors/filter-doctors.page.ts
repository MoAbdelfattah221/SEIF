import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {IDoctorSpecialty} from '../../../../Models/doctor-specialty';
import {SearchBySpecialtyAndAreaService} from '../../../../Service/search-by-specialty-and-area.service';
import {IDoctorCountryState} from '../../../../Models/doctor-country-state';
import {IDoctorCityStateCountry} from '../../../../Models/doctor-city-state-country';
import {SearchService} from '../../../../Service/search.service';
import {ISearchQuery} from '../../../../Models/search-query';

@Component({
    selector: 'app-filter-doctors',
    templateUrl: './filter-doctors.page.html',
    styleUrls: ['./filter-doctors.page.scss'],
})
export class FilterDoctorsPage implements OnInit {
    rangeValue = {lower: 0, upper: 500};
    segment: string = 'filter';
    rate;
    doctorSpecialties: IDoctorSpecialty[];
    countryStates: IDoctorCountryState[];
    places: IDoctorCityStateCountry[];

    constructor(private router: Router, private navCtrl: NavController,
                public searchService: SearchService,
                private searchBySpecialityAndAreaService: SearchBySpecialtyAndAreaService) {
    }

    ngOnInit() {
        this.getAllDoctorSpecialties();
        this.getAllCountries();
    }

    onRatingChange(event) {
        this.rate = event;
    }

    onSubmitFilter() {
        // this.searchService.searchQuery.min_fees = this.rangeValue.lower;
        // this.searchService.searchQuery.max_fees = this.rangeValue.upper;
        // this.searchService.searchQuery.rating = this.rate;
        console.log(this.searchService.searchQuery);
        this.searchService.postSearchQuery();
        this.navCtrl.back();
    }

    getAllDoctorSpecialties() {
        this.searchBySpecialityAndAreaService.getSpecialties().subscribe((res: { result }) => {
            this.doctorSpecialties = res.result;
        });
    }

    getAllCountries() {
        this.searchBySpecialityAndAreaService.getAllCountries().subscribe((res: { result }) => {
            this.countryStates = res.result;
        });
    }

    getPlaces(id: number) {
        this.searchBySpecialityAndAreaService.getPlacesInCountry(id).subscribe((res: { result }) => {
            this.places = res.result;
        });
    }

    resetFunction() {
        this.searchService.searchQuery  = {} as ISearchQuery;
        this.searchService.postSearchQuery();
    }
}
