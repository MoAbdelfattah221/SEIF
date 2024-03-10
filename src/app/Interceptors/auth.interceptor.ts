import {Injectable} from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


import {ToastController} from '@ionic/angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(public toastController: ToastController) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log(request);
        // if (request.url.includes('countries')) {
        //     request = request.clone({headers: request.headers.set('Content-Type', '/x-www-form-urlencoded')});
        //     return next.handle(request);
        // }
        // if (request.url.includes('confirm_renewal_membership')) {
        //     request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
        //     return next.handle(request);
        // }
        // const sessionId = this.cookieService.get('session_id');
        // if (sessionId) {
        //     request = request.clone({headers: request.headers.set('Set-Cookie', 'session_id=' + sessionId)});
        // }
        request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
        return next.handle(request).pipe(
            tap(
                () => {
                },
                err => {
                    console.log(err);
                    if (err.status === 0 && err.statusText === 'Unknown Error') {
                        this.toastController.create({
                            message: 'ERROR: CORS Error',
                            color: 'danger',
                            position: 'top',
                            duration: 2000
                        }).then(r => r.present());
                    }
                }
            )
        );
    }
}
