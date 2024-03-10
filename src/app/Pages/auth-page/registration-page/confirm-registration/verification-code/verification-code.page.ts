import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-verification-code',
    templateUrl: './verification-code.page.html',
    styleUrls: ['./verification-code.page.scss'],
})
export class VerificationCodePage implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    test() {
        console.log('asd');
    }

    onSubmitCode() {
        this.router.navigate(['home-page-tabs', 'home-page']);
    }
}
