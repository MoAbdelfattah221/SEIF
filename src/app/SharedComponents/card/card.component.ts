import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {IUserData} from '../../Models/user-data';
import {IDoctorSearch} from '../../Models/doctor-search';
import { FavoriteService } from 'src/app/Service/favorite.service';
import { SearchService } from 'src/app/Service/search.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() doctorData: any;
    userName;
    userData: IUserData;

    // tslint:disable-next-line:no-output-native
    @Output() favorite: EventEmitter<any> = new EventEmitter();
    @Output() removeFavorite: EventEmitter<any> = new EventEmitter();

    constructor(private router: Router, private nativeStorage: NativeStorage, private searchService: SearchService) {
    }

    ngOnInit() {
        if(localStorage.getItem('uid') != null){
            this.userData = {
                'name': localStorage.getItem('name'),
                'session_id': localStorage.getItem('session_id'),
                'uid': localStorage.getItem('uid')
            }
            console.log(this.userData)
            this.doctorData.isFavorite = this.searchService.checkInFavoriteList(this.doctorData.id);
        }
    }

    onBooking() {
        this.router.navigate(['/doctor'], {
            state: {
                doctorData: this.doctorData
            }
        });
    }

    onLogin() {
        this.router.navigate(['/auth-page']);
    }

    onClickFavorite() {
        this.favorite.emit(null);
    }

    onClickRemoveFavorite() {
        this.removeFavorite.emit(null);
    }
}
