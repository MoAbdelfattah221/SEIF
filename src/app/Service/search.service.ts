import {Injectable} from '@angular/core';
import {ISearchQuery} from '../Models/search-query';
import {DataService} from './data.service';
import {IDoctorSearch} from '../Models/doctor-search';
import {FavoriteService} from './favorite.service';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    searchQuery = {} as ISearchQuery;
    doctors: IDoctorSearch[];
    searchDoctors: IDoctorSearch[];
    favoriteIds: number[] = [];
    favoriteDoctorsFiltered = [];

    constructor(private dataService: DataService, private favoritesService: FavoriteService) {
    }


    postSearchQuery() {
        return this.dataService.post('api/doctor_search_query', {params: this.searchQuery}).subscribe((res: { result }) => {
            this.doctors = res.result as IDoctorSearch[];
            this.searchDoctors = this.doctors;
        }, error => {
        }, () => {
            this.getAllFavoriteDoctors();
        });
    }

    getAllFavoriteDoctors() {
        this.favoritesService.getAllFavoriteDoctors().subscribe((res: { result }) => {
            this.favoriteIds = res.result.favorite_doctors;
            console.log(this.favoriteIds);
        }, error => {
        }, () => {
            this.getFavoriteDoctorsFiltered();
        });
    }

    checkInFavoriteList(doctorId: number) {
        return this.favoriteIds.includes(doctorId);
    }

    getFavoriteDoctorsFiltered() {
        this.favoriteDoctorsFiltered = [];
        if(this.doctors){
            this.doctors.forEach((c) => {
                const OBJ = {
                    doctorId: c.id,
                    name: c.name,
                    specialty: c.specialty,
                    rate_overall: c.rate_overall,
                    image_1920: c.image_1920,
                    state_id: c.state_id,
                    consul_fee: c.consul_fee,
                    count_rate: c.count_rate,
                    isFavorite: this.checkInFavoriteList(c.id)
                };
                this.favoriteDoctorsFiltered.push(OBJ);
            });
        }
        return this.favoriteDoctorsFiltered;
    }

    getDoctorFavorites() {
        this.favoriteDoctorsFiltered = [];
        this.doctors.forEach((c) => {
            const OBJ = {
                doctorId: c.id,
                name: c.name,
                specialty: c.specialty,
                rate_overall: c.rate_overall,
                image_1920: c.image_1920,
                state_id: c.state_id,
                consul_fee: c.consul_fee,
                count_rate: c.count_rate,
                isFavorite: this.checkInFavoriteList(c.id)
            };
            this.favoriteDoctorsFiltered.push(OBJ);
        });
        return this.favoriteDoctorsFiltered.filter(c => c.isFavorite === true);
    }
}
