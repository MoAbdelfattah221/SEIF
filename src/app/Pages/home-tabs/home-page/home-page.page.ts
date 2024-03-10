import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {IUserData} from '../../../Models/user-data';
import {SearchService} from '../../../Service/search.service';
import {SearchBySpecialtyAndAreaService} from '../../../Service/search-by-specialty-and-area.service';
import {IDoctorSpecialty} from '../../../Models/doctor-specialty';
import {Router} from '@angular/router';
import {IDoctorSearch} from '../../../Models/doctor-search';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.page.html',
    styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
    userName;
    userData: IUserData;
    slideOpts = {
        initialSlide: 0,
        speed: 400
    };
    slideCategoryOpts = {
        slidesPerView: 2,
        speed: 400
    };
    showLogged = false;
    doctorSpecialties: IDoctorSpecialty[];
    favoriteDoctors = [];
    constructor(private nativeStorage: NativeStorage, public searchService: SearchService,
                private router: Router,
                private searchBySpecialityAndAreaService: SearchBySpecialtyAndAreaService) {
    }

    ngOnInit() {
        if(localStorage.getItem('uid') != null){
            this.showLogged = true;
            this.userData = {
                'name': localStorage.getItem('name'),
                'session_id': localStorage.getItem('session_id'),
                'uid': localStorage.getItem('uid')
            }
        }else{
            this.showLogged = false;
        }

    }

    ionViewDidEnter() {
        this.searchForDoctor();
        this.getAllDoctorSpecialties();
    }

    searchForDoctor() {
        this.searchService.postSearchQuery();
    }

    getAllDoctorSpecialties() {
        this.searchBySpecialityAndAreaService.getSpecialties().subscribe((res: { result }) => {
            this.doctorSpecialties = res.result;
        });
    }

    async searchForDoctorBySpeciality(specialtyId: number) {
        this.searchService.searchQuery.specialty = specialtyId;
        await this.searchService.postSearchQuery();
        await this.router.navigate(['/home-page-tabs/search-page']);
    }

    onNavigate(doctor: IDoctorSearch) {
        this.router.navigate(['/doctor'], {
            state: {
                doctorData: doctor
            }
        });
    }
}
