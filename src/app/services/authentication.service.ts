import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  userSubject = new Subject<any>();

  correctlyLogged$(): Observable<any> {
    return this.userSubject.asObservable();
  }
}
