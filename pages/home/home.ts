import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: string;
  propBind: string;
  alignment: string;
  currentYear: number;
  newYear: number;
  twoWayBinding: string;
  weight: number;
  height: number;

  constructor(public navCtrl: NavController) {
    this.name = "Javier Enrique Mantilla Urizar";
    this.propBind = "This is the <i>content of a</h2> H2 element";
    this.alignment = "middle";
    this.currentYear = new Date().getFullYear();
    this.twoWayBinding = "Initial value";
    this.weight = 100;
    this.height = 2;
  }

  clicked():void {
    alert("You have clicked my buttons!");
  }

  timeTravel():void {
    this.newYear = this.getRandomInt(this.currentYear, 5000);
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random()* (max - min + 1)) + min;
  }

}
