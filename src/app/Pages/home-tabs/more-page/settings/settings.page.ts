import {Component, OnInit} from '@angular/core';
import {IUserProfile} from '../../../../Models/user-profile';
import {UserService} from '../../../../Service/user.service';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
    userProfileData: IUserProfile;

    constructor(public userService: UserService, public toastController: ToastController) {
    }

    ngOnInit() {
        this.getUserDetail();
    }

    getUserDetail() {
        this.userService.getUserData().subscribe((res: { result }) => {
            console.log(res);
            this.userProfileData = res.result.data[0];
            if (this.userProfileData) {
                this.userService.userEditProfile = this.userProfileData;
            }
        });
    }

    onSubmit() {
        this.userService.editProfile().subscribe(async (res) => {
            console.log(res);
            const toast = await this.toastController.create({
                message: 'Your Profile Updated Successfully',
                duration: 2000
            });
            await toast.present();
        });
    }
}
