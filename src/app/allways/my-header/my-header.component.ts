import { Component, OnInit } from '@angular/core';
import { navigation } from './navi'
import { ServiceLanguageService } from '../../services/service-language.service';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  navigation = navigation;
  changeLanguage: boolean;

  constructor(private servicelanguageservice:ServiceLanguageService ) { }

  ngOnInit() {
    this.servicelanguageservice.changeLanguage.subscribe(c =>{
      this.changeLanguage = c;
    })
  }
  
  nextCount(){
    this.servicelanguageservice.nextCount();
  }
  
}
