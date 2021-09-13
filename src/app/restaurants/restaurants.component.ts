import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/clinet.service';

@Component({
  templateUrl: './restaurants.component.html',
})

export class RestaurantsComponent {
  restaurants: any;
  panelOpenState = false;

  constructor(
    public clientService: ClientService,
    private router: Router,
  ) { 
  }

  ngOnInit() {
    this.findRestaurants();
  }
  
  findRestaurants() {
    this.clientService.findRestaurants().subscribe(response => {
      const data = response;
      this.restaurants = data;
      console.log(data);
    });
  }

  chooseRestaurant(restaurantId: string) {
    
  }
}
