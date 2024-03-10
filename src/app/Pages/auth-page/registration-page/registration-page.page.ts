import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../Service/auth.service';
import {ToastController} from '@ionic/angular';
import {IRegistration} from '../../../Models/registration';

@Component({
    selector: 'app-registration-page',
    templateUrl: './registration-page.page.html',
    styleUrls: ['./registration-page.page.scss'],
})
export class RegistrationPagePage implements OnInit {
    errorMessages: string[];

    constructor(private router: Router, public authService: AuthService, public toastController: ToastController,) {
    }

    ngOnInit() {
    }

    registrationUser() {
        this.errorMessages = [];
        this.authService.register().subscribe(async (res: { result, error }) => {
            console.log(res);
            if (res.result) {
                const toast = await this.toastController.create({
                    message: `Registered Successfully`,
                    position: 'top',
                    color: 'success',
                    duration: 2000
                });
                await toast.present();
                await this.router.navigate(['auth-page']);
                this.authService.regForm = {} as IRegistration;
            } else if (res.error) {
                this.errorMessages = ['This Email Is Registered Before'];
                console.log(this.errorMessages);
            }
        });
    }
}
