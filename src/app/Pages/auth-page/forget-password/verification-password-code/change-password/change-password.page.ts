import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.page.html',
    styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
    showNewPassword: boolean = false;
    showConfirmPassword: boolean = false;

    constructor(public alertController: AlertController, private router: Router) {
    }

    ngOnInit() {
    }

    newPassword() {
        this.showNewPassword = !this.showNewPassword;
    }

    showConfirmPasswordFun() {
        this.showConfirmPassword = !this.showConfirmPassword;
    }

    async submitChangePassword() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Password',
            subHeader: 'Changed Successfully',
            message: 'Stay Signed In With Your Account To Make Searching Easier',
            buttons: [
                {
                    text: 'Sign In',
                    handler: (blah) => {
                        this.router.navigate(['auth-page']);
                    }
                }
            ]
        });

        await alert.present();
    }
}
