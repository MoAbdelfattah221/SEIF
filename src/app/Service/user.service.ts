import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {IUserData} from '../Models/user-data';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {CookieService} from 'ngx-cookie-service';
import {IUserProfileEdit} from '../Models/user-profile';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    userData: IUserData;
    userEditProfile = {} as IUserProfileEdit;

    constructor(private dataService: DataService, private cookieService: CookieService) {
    }

    getUserData() {
        const userId = {
            // uid: this.cookieService.get('uid'),
            uid: localStorage.getItem('uid'),
            fields_list: ['name', 'email', 'phone', 'street']
        };
        console.log(userId.uid);
        return this.dataService.post('api/view_user_data', {params: userId});
    }

    editProfile() {
        return this.dataService.post('api/update_user_data', {
            params: {
                uid: localStorage.getItem('uid'),
                data: {
                    name: this.userEditProfile.name,
                    street: this.userEditProfile.street,
                    phone: this.userEditProfile.phone,
                    email: this.userEditProfile.email,
                }
            }
        });
    }
}
