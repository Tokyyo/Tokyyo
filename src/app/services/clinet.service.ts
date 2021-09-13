import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class ClientService {
  baseUrl: string;

  constructor(private http: HttpClient, private router: Router, private authService: AuthenticationService,
  ) {
    this.baseUrl = `${environment.baseUrl}`;
  }

  findRestaurants() {
    return this.http.get<any>(`${this.baseUrl}/Restaurant/FindRestaurants`);
  }
}
