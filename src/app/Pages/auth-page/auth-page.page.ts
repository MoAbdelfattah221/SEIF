import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { NgForm } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.page.html',
    styleUrls: ['./auth-page.page.scss'],
})
export class AuthPagePage implements OnInit {

    constructor(
        private router: Router,
        public authService: AuthService,
        private cookieService: CookieService,
        public toastController: ToastController,
        private nativeStorage: NativeStorage,
        public alertController: AlertController
    ) {
    }
    checkSession(){
        if (localStorage.getItem('uid')) {
            this.router.navigate(['home-page-tabs', 'home-page']);
            this.toastController.create({
                message: `You Are Logged In`,
                duration: 2000
            }).then(c => c.present());
        }
    }
    ngOnInit() {
        this.checkSession();
    }
    ionViewWillEnter(){
        this.checkSession();
        // this.platform.registerBackButtonAction( () => {
        //     console.log("back button pressed!");
        // });
    }

    logIn(form: NgForm) {
        console.log(this.authService.loginForm);
        this.authService.login().subscribe(async (res: { result }) => {
            console.log(res);
            if (res.result.code === 404) {
                const alert = await this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Sorry!!',
                    message: res.result.data,
                    buttons: ['OK']
                });
                await alert.present();
            } else {
                localStorage.setItem('uid', res.result.uid);
                this.cookieService.set('uid', res.result.uid, null, '/');
                localStorage.setItem('user_uid', res.result.uid);
                localStorage.setItem('name', res.result.name);
                localStorage.setItem('session_id', res.result.session_id);
                
                await this.router.navigate(['home-page-tabs', 'home-page']);
                const toast = await this.toastController.create({
                    message: `Welcome ${res.result.name}`,
                    duration: 2000
                });
                await toast.present();
                form.reset();
            }
        });
    }
}
