import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private geolocation: Geolocation) {}

  getCurrentLocation() {
    this.geolocation.getCurrentPosition().then((position) => {
      console.log('Geolocation found.');
      this.onGetCurrentPositionSuccess(position);
    }).catch((error) => {
      console.log(error);
    });
  }

  private onGetCurrentPositionSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPositionMsg = 'Your current position is latitude ' + latitude +
    ' and longitude ' + longitude;
    alert(currentPositionMsg);
  }

}
