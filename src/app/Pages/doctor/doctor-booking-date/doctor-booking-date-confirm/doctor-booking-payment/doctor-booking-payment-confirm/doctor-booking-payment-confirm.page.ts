import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IDoctorSearch} from '../../../../../../Models/doctor-search';

@Component({
    selector: 'app-doctor-booking-payment-confirm',
    templateUrl: './doctor-booking-payment-confirm.page.html',
    styleUrls: ['./doctor-booking-payment-confirm.page.scss'],
})
export class DoctorBookingPaymentConfirmPage implements OnInit {
    doctorData: IDoctorSearch;
    selectedSlot;
    selectedSlotLine;
    appointmentId;
    constructor(private router: Router) {
        this.doctorData = this.router.getCurrentNavigation().extras.state.doctorData;
        this.selectedSlot = this.router.getCurrentNavigation().extras.state.selectedSlot;
        this.selectedSlotLine = this.router.getCurrentNavigation().extras.state.selectedSlotLine;
        this.appointmentId = this.router.getCurrentNavigation().extras.state.appointmentId;
    }

    ngOnInit() {
    }

    goToAppointments() {
        this.router.navigate(['/home-page-tabs/appointment-page']);
    }
}
