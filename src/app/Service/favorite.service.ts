import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {

    constructor(private dataService: DataService) {
    }

    postDoctorAsFavorite(doctorId: number) {
        const OBJ = {
            uid: localStorage.getItem('uid'),
            method: 'add',
            doctor_id: doctorId
        };
        return this.dataService.post('api/patient_favorite_doctors', {params: OBJ});
    }

    removeDoctorAsFavorite(doctorId: number) {
        const OBJ = {
            uid: localStorage.getItem('uid'),
            method: 'remove',
            doctor_id: doctorId
        };
        return this.dataService.post('api/patient_favorite_doctors', {params: OBJ});
    }

    getAllFavoriteDoctors() {
        return this.dataService.post('api/get_patient_favorite_doctors', {
            params: {uid: localStorage.getItem('uid')}
        });
    }
}
