import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-verification-password-code',
    templateUrl: './verification-password-code.page.html',
    styleUrls: ['./verification-password-code.page.scss'],
})
export class VerificationPasswordCodePage implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    test() {
        console.log('asd');
    }

    onSubmitCode() {
        this.router.navigate(['auth-page', 'forget-password', 'verification-password-code', 'change-password']);
    }

}
