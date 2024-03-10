import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root'
})
export class OtpService {

    constructor(private dataService: DataService) {
    }
    // TODO: Get Powered By List API
    getPoweredBy() {
        return this.dataService.post('api/get_powered_by_list', {params: {}});
    }
    // TODO: Get Partner Details API
    getPartnerDetails(uid) {
        return this.dataService.post('api/get_partner_details/'+uid, {params: {}});
    }

    // TODO: Send OTP Request API
    sendOTPRequest(data) {
        return this.dataService.post('api/healthpay_login_user', {params: data});
    }

    // TODO: Confirm OTP
    confirmOTP(data) {
        return this.dataService.post('api/healthpay_auth_user', {params: data});
    }
}
