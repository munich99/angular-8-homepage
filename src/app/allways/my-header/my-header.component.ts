import { Component, OnInit } from '@angular/core';
import { navigation } from './navi'

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  navigation = navigation;

  constructor() { }

  ngOnInit() {
  }

  changeLanguage:boolean=true;
}
