import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-filter-form',
    templateUrl: './filter-form.page.html',
    styleUrls: ['./filter-form.page.scss'],
})
export class FilterFormPage implements OnInit {
    rangeValue = {lower: 55, upper: 500};
    segment: string = 'filter';
    rate;

    constructor(private router: Router, private navCtrl: NavController) {
    }

    ngOnInit() {
        // this.segment = 'filter';
    }

    onRatingChange(event) {
        this.rate = event;
        console.log(this.rate);
    }

    onSubmitFilter() {
        console.log(this.rate);
        // this.router.navigate(['/home-page-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/']);
        this.navCtrl.back();
        // console.log('/home-page-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/');
    }
}
