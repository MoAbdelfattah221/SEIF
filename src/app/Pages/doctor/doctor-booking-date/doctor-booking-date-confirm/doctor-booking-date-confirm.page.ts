import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IDoctorSearch} from '../../../../Models/doctor-search';
import {DoctorService} from '../../../../Service/doctor.service';

@Component({
    selector: 'app-doctor-booking-date-confirm',
    templateUrl: './doctor-booking-date-confirm.page.html',
    styleUrls: ['./doctor-booking-date-confirm.page.scss'],
})
export class DoctorBookingDateConfirmPage implements OnInit {
    doctorData: IDoctorSearch;
    selectedSlot;
    selectedSlotLine;

    constructor(private router: Router, private doctorService: DoctorService) {
        this.doctorData = this.router.getCurrentNavigation().extras.state.doctorData;
        this.selectedSlot = this.router.getCurrentNavigation().extras.state.selectedSlot;
        this.selectedSlotLine = this.router.getCurrentNavigation().extras.state.selectedSlotLine;
    }

    ngOnInit() {
    }

    onSubmitBooking() {
        // console.log(this.selectedSlotLine);
        this.doctorService.confirmAppointment(this.doctorData.id, this.selectedSlotLine.id).subscribe((res: { result }) => {
            console.log(res.result.appointment[0].name);
            if (res.result.appointment[0].name) {
                // this.router.navigate(['/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm'], {
                this.router.navigate(['/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send'], {
                    state: {
                        doctorData: this.doctorData,
                        selectedSlot: this.selectedSlot,
                        selectedSlotLine: this.selectedSlotLine,
                        appointmentId: res.result.appointment[0].name
                    }
                });
            }
        });
    }

}
