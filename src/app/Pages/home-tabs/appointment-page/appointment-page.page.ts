import {Component, OnInit} from '@angular/core';
import {AppointmentService} from '../../../Service/appointment.service';
import {IAppointment} from '../../../Models/appointment';

@Component({
    selector: 'app-appointment-page',
    templateUrl: './appointment-page.page.html',
    styleUrls: ['./appointment-page.page.scss'],
})
export class AppointmentPagePage implements OnInit {
    appointmentList: IAppointment[] = [];
    pastAppointmentList: IAppointment[] = [];
    currentAppointmentList: IAppointment[] = [];
    segmentState: string = 'pastAppointments';

    constructor(private appointmentService: AppointmentService) {
    }

    ngOnInit() {

    }
    changeRate(appId, rate){
        this.appointmentService.changeRate(appId, rate).subscribe((res: any) => {
            if(res.result.status === 'success'){
                this.getAllAppointments();
            }
        });
    }
    ionViewDidEnter() {
        this.segmentState = 'currentAppointment';
        this.getAllAppointments();
    }

    getAllAppointments() {
        this.appointmentService.getAppointmentList().subscribe((res: { result }) => {
            this.appointmentList = res.result.appointments;
        }, error => {
        }, () => {
            this.pastAppointmentList = this.appointmentList.filter(c => c.state === 'done');
            this.currentAppointmentList = this.appointmentList.filter(c => c.state !== 'done');
        });
    }
}
