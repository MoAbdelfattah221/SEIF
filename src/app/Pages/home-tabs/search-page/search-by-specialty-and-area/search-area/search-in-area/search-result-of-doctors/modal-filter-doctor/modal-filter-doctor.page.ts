import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-modal-filter-doctor',
    templateUrl: './modal-filter-doctor.page.html',
    styleUrls: ['./modal-filter-doctor.page.scss'],
})
export class ModalFilterDoctorPage implements OnInit {
    segment: string;

    constructor(public modalController: ModalController, private router: Router) {
    }

    ngOnInit() {
        this.segment = 'Filter';
    }

    segmentChanged(ev: any) {
        this.segment = ev.detail.value;
        console.log('Segment changed', ev);
    }

    dismissModal() {
        this.router.navigateByUrl('/location-for-doctors');
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true
        });
    }
}
