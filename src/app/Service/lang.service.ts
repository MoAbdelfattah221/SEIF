import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LangService {
    private lang: BehaviorSubject<string> = new BehaviorSubject(null);

    getLang(): Observable<string> {
        return this.lang.asObservable();
    }

    // tslint:disable-next-line:typedef
    setLang(lang: string) {
        this.lang.next(lang);
    }
}
