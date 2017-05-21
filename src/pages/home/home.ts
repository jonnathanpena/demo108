import { Component } from '@angular/core';
import { trigger,state, style, transition, animate } from '@angular/animations';

import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('itemState', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      //Enter
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('300ms ease-in')
      ]),
      //Leave
      transition('* => void', animate('300ms ease-out', style({
        opacity: 0,
        transform: 'translateX(100%)'
      }))),
    ])
  ]
})
export class HomePage {

  items: any[] = [];

  constructor(public navCtrl: NavController) {}

  add(){
    this.items.push({
      title: 'item',
      state: 'in'
    });
  }

  remove(){
    this.items.splice(0,1);
  }

}