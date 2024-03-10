import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDoctorSearch } from 'src/app/Models/doctor-search';
import { OtpService } from 'src/app/Service/otp.service';

@Component({
  selector: 'app-otp-send',
  templateUrl: './otp-send.page.html',
  styleUrls: ['./otp-send.page.scss'],
})
export class OtpSendPage implements OnInit {

  
  doctorData: IDoctorSearch;
  poweredBy: any = [];
  otpForm: Boolean;
  otpRequest: Boolean = true;
  otp: any;
  partner: any;
  selectedSlot;
  selectedSlotLine;
  appointmentId;
  data: any = {
    'firstName': '',
    'lastName': '',
    'mobile': '',
    'poweredBy': '',
    'email': ''
  }
  constructor(private router: Router, private otpService: OtpService) {
      this.doctorData = this.router.getCurrentNavigation().extras.state.doctorData;
      this.selectedSlot = this.router.getCurrentNavigation().extras.state.selectedSlot;
      this.selectedSlotLine = this.router.getCurrentNavigation().extras.state.selectedSlotLine;
      this.appointmentId = this.router.getCurrentNavigation().extras.state.appointmentId;
  }
  send_otp(){
    let data = {
      'healthpay_id': this.data.poweredBy,
      'firstname': this.data.firstName,
      'lastname': this.data.lastName,
      'email': this.data.email,
      'mobile': this.data.mobile,
      'uid': localStorage.getItem('uid'),
    }
    this.otpService.sendOTPRequest(data).subscribe((res: any) => {
      if(res.result.healthpay_uid){
        this.otpForm = true;
        this.otpRequest = false;
      }
    })
  }
  confirm_otp(){
    let data = {
      'healthpay_id': this.data.poweredBy,
      'mobile': this.data.mobile,
      'otp': this.otp
    }
    this.otpService.confirmOTP(data).subscribe((res: any) => {
      console.log(res)
    }) 
  }
  getPoweredBy(){
    this.otpService.getPoweredBy().subscribe((res: any) => {
      console.log(res);
      if(res.result.status == 'success'){
        this.poweredBy = res.result.healthpay;
      }
    })
  }
  getParnterDetails(){
    this.otpService.getPartnerDetails(localStorage.getItem('uid')).subscribe((res: any) => {
      console.log(res);
      if(res.result.status == 'success'){
        this.partner = res.result.partner;
        this.data.firstName = this.partner.firstName;
        this.data.lastName = this.partner.lastName;
        this.data.mobile = this.partner.mobile;
        this.data.email = this.partner.email;
      }
    })
  }
  ngOnInit() {
    this.getPoweredBy();
    this.getParnterDetails();
  }

}
