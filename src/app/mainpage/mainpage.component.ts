import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './mainpage.component.html',
})

export class MainPageComponent {
  constructor(
    private router: Router,
  ) { 
  }

  ngOnInit() {
  }

  searchRestaurants() {
   // console.log("SEARCH")
    // if ((this.f.username.value === 'kurier1' || this.f.username.value === 'kurier2') && (this.f.password.value === 'kurier1' || this.f.password.value === 'kurier2')) {
    //   this.authService.userSubject.next(this.f.username.value);
    //   localStorage.setItem('id', this.f.username.value);
    //   this.router.navigate(['/home']);
    // }
    this.router.navigate(['restaurants']);
  }
}
