import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-confirm-registration',
    templateUrl: './confirm-registration.page.html',
    styleUrls: ['./confirm-registration.page.scss'],
})
export class ConfirmRegistrationPage implements OnInit {

    constructor(private router: Router) {
    }


    ngOnInit() {
    }

    onSubmitConfirmRegistration() {
        this.router.navigate(['auth-page', 'registration-page', 'confirm-registration', 'verification-code']);
    }
}
