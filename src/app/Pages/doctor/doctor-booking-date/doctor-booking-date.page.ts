import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IDoctorSearch} from '../../../Models/doctor-search';
import {DoctorService} from '../../../Service/doctor.service';

@Component({
    selector: 'app-doctor-booking-date',
    templateUrl: './doctor-booking-date.page.html',
    styleUrls: ['./doctor-booking-date.page.scss'],
})
export class DoctorBookingDatePage implements OnInit {
    slideDoctorOpts = {
        slidesPerView: 3,
        speed: 400
    };
    routeData;
    doctorData: IDoctorSearch;
    slotsData;
    selectedSlot;
    slotLines;
    selectedSlotLine;

    constructor(private router: Router, private doctorService: DoctorService) {
        this.doctorData = this.router.getCurrentNavigation().extras.state.doctorData;
        this.slotsData = this.router.getCurrentNavigation().extras.state.slotData;
    }

    ngOnInit() {
    }

    onClick(slot) {
        this.selectedSlot = slot;
        this.doctorService.getSlotLines(this.selectedSlot.id).subscribe((res: { result }) => {
            this.slotLines = res.result.lines;
        });
    }

    onSelectedSlot(slot) {
        return this.selectedSlot === slot;
    }

    onclickSlotLine(slotLine) {
        this.selectedSlotLine = slotLine;
    }

    onSelectedSlotLine(slotLine) {
        return this.selectedSlotLine === slotLine;
    }

    onConfirmBooking() {
        this.router.navigate(['/doctor/doctor-booking-date/doctor-booking-date-confirm'], {
            state: {
                doctorData: this.doctorData,
                selectedSlot: this.selectedSlot,
                selectedSlotLine: this.selectedSlotLine
            }
        });
    }
}
