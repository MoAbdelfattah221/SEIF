import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IUserData } from '../../Models/user-data';

@Component({
    selector: 'app-home-tabs',
    templateUrl: './home-tabs.page.html',
    styleUrls: ['./home-tabs.page.scss'],
})
export class HomeTabsPage implements OnInit {
    userData: IUserData;

    constructor(private nativeStorage: NativeStorage) {
    }

    ngOnInit() {
        // this.nativeStorage.getItem('user')
        //     .then(
        //         data => {
        //             this.userData = data;
        //             console.log(data);
        //             return data;
        //         },
        //         error => console.error(error)
        //     );
    }

    ionViewDidEnter() {
        if(localStorage.getItem('uid') != null){
            this.userData = {
                'name': localStorage.getItem('name'),
                'session_id': localStorage.getItem('session_id'),
                'uid': localStorage.getItem('uid')
            }
        }
    }
}
