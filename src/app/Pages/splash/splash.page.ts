import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {IonSlides} from '@ionic/angular/directives/proxies';

@Component({
    selector: 'app-splash',
    templateUrl: './splash.page.html',
    styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
    // @ViewChild(IonSlides) slides: IonSlides;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    // onClickSlide(index) {
    //     console.log(index);
    //     this.slides.slideTo(index);
    // }

    closeSplashScreen() {
        this.router.navigate(['/auth-page']);
        localStorage.setItem('splash', 'false');
    }
}
