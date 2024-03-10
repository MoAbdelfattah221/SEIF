import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {IAuthLogin} from '../Models/auth';
import {IRegistration} from '../Models/registration';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    loginForm = {db: 'Saif_App'} as IAuthLogin;
    regForm = {} as IRegistration;

    constructor(private dataService: DataService) {
    }

    login() {
        return this.dataService.post('auth/', {params: this.loginForm});
    }

    register() {
        return this.dataService.post('api/create_portal_patient', {params: this.regForm});
    }
}
