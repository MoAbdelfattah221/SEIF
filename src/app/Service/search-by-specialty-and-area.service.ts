import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root'
})
export class SearchBySpecialtyAndAreaService {

    constructor(private dataService: DataService) {
    }

    getSpecialties() {
        return this.dataService.post('api/doctor_specialty', {params: {}});
    }

    getAllCountries() {
        return this.dataService.post('api/country_state', {params: {}});
    }

    getPlacesInCountry(stateId) {
        return this.dataService.post('api/state_city', {params: {state_id: stateId}});
    }
}
