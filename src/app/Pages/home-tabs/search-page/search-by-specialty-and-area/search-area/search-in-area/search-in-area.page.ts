import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {SearchBySpecialtyAndAreaService} from '../../../../../../Service/search-by-specialty-and-area.service';
import {IDoctorCityStateCountry} from '../../../../../../Models/doctor-city-state-country';
import {IonSearchbar} from '@ionic/angular';

@Component({
    selector: 'app-search-in-area',
    templateUrl: './search-in-area.page.html',
    styleUrls: ['./search-in-area.page.scss'],
})
export class SearchInAreaPage implements OnInit {
    stateId: number;
    places: IDoctorCityStateCountry[];
    @ViewChild('search', {static: false}) search: IonSearchbar;
    searchedItem: any;

    constructor(private router: Router, private searchBySpecialityAndAreaService: SearchBySpecialtyAndAreaService) {
        this.stateId = this.router.getCurrentNavigation().extras.state.state_id;
    }

    ngOnInit() {
        this.getPlaces();
    }


    ionViewDidEnter() {
        setTimeout(() => {
            this.search.setFocus();
        });
    }

    getPlaces() {
        this.searchBySpecialityAndAreaService.getPlacesInCountry(this.stateId).subscribe((res: { result }) => {
            this.places = res.result;
            this.searchedItem = this.places;
        });
    }

    searchInArea(event) {
        const val = event.target.value;
        this.searchedItem = this.places;
        if (val && val.trim() !== '') {
            this.searchedItem = this.places.filter((item: any) => {
                return (item.display_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
}
