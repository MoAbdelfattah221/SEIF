import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root'
})
export class GoogleMapService {

    constructor(private httpClient: HttpClient, private dataService: DataService) {
    }

    getAddress(lat: number, lng: number) {
        return this.httpClient.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.googleMapsApiKey}`);
    }

    getLocationsTest() {
        return this.httpClient.get('assets/JSON%20Files/locations.json');
    }

    getPartners(lat: number, long: number) {
        const OBJ = {
            lat,
            long
        };
        return this.dataService.post('api/get_partner_from_location', {'params': {'lat': OBJ.lat, 'long': OBJ.long}});
    }
}
