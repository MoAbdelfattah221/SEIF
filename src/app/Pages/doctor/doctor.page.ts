import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IDoctorSearch} from '../../Models/doctor-search';
import {DoctorService} from '../../Service/doctor.service';

@Component({
    selector: 'app-doctor',
    templateUrl: './doctor.page.html',
    styleUrls: ['./doctor.page.scss'],
})
export class DoctorPage implements OnInit {
    slideOptions = {
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        }
    };
    doctorData: IDoctorSearch;
    slots: [] = [];

    constructor(private router: Router, private doctorService: DoctorService) {
        this.doctorData = this.router.getCurrentNavigation().extras.state.doctorData;
    }

    ngOnInit() {
        this.getDoctorSlots();
    }

    getDoctorSlots() {
        let doctor = this.doctorData.id ? this.doctorData.id : this.doctorData['doctorId'];
        console.log(doctor);
        this.doctorService.getSlots(doctor).subscribe((res: { result }) => {
            this.slots = res.result.slots_data;
        });
    }

    onBooking() {
        this.router.navigate(['/doctor/doctor-booking-date'], {
            state: {
                doctorData: this.doctorData,
                slotData: this.slots
            }
        });
    }
}
