import {Component, OnInit} from '@angular/core';
import {FavoriteService} from '../../../../Service/favorite.service';
import {SearchService} from '../../../../Service/search.service';
import {ISearchQuery} from '../../../../Models/search-query';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-favorite-doctors',
    templateUrl: './favorite-doctors.page.html',
    styleUrls: ['./favorite-doctors.page.scss'],
})
export class FavoriteDoctorsPage implements OnInit {
    favoriteDoctors = [];

    constructor(private searchService: SearchService,
                private favoritesService: FavoriteService,
                public toastController: ToastController,
    ) {
    }

    ngOnInit() {
        this.getAllFavoriteList();
    }

    getAllFavoriteList() {
        this.searchService.searchQuery = {} as ISearchQuery;
        this.searchService.postSearchQuery();
        this.favoriteDoctors = this.searchService.getFavoriteDoctorsFiltered().filter(c => c.isFavorite === true);
    }

    onFavoriteDoctor(doctor: any) {
        this.favoritesService.postDoctorAsFavorite(doctor.doctorId).subscribe((res: { result }) => {
        }, error => {
        }, async () => {
            const toast = await this.toastController.create({
                message: `Doctor ${doctor.name} Has Been Added To Favorite`,
                position: 'top',
                duration: 2000
            });
            await toast.present();
            this.getAllFavoriteList();

        });
    }

    onRemoveFavoriteDoctor(doctor: any) {
        this.favoritesService.removeDoctorAsFavorite(doctor.doctorId).subscribe((res: { result }) => {
            console.log(res.result);
        }, error => {
        }, async () => {
            const toast = await this.toastController.create({
                message: `Doctor ${doctor.name} Has Been Removed From Favorite`,
                position: 'top',
                duration: 2000
            });
            await toast.present();
            this.getAllFavoriteList();
        });
    }
}
