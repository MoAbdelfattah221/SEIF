import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root'
})
export class DoctorService {

    constructor(private dataService: DataService) {
    }

    getSlots(id: number) {
        return this.dataService.post('api/doctor_slots', {params: {doctor_id: id}});
    }

    getSlotLines(id: number) {
        return this.dataService.post('api/get_slot_lines', {params: {slot_id: id}});
    }

    confirmAppointment(doctorId: number, slotLineId: number) {
        const data = {
            uid: localStorage.getItem('uid').toString(),
            doctor_id: doctorId.toString(),
            slot_line_id: slotLineId.toString()
        };

        return this.dataService.post('api/doctor_reservation', {
            params: data
        });
    }
}
