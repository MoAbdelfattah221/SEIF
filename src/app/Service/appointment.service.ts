import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root'
})
export class AppointmentService {

    constructor(private dataService: DataService) {
    }

    getAppointmentList() {
        return this.dataService.post('api/patient_my_appointment', {params: {uid: localStorage.getItem('uid')}});
    }
    changeRate(appId, rate){
        return this.dataService.post('api/api_change_rate', {params: {app_id: appId, rate: rate}});
    }
}
