import { Component, OnInit } from '@angular/core';
import { navigation } from '../my-header/navi';
import { sitemap } from './sitemap';
import { ServiceLanguageService } from '../../services/service-language.service';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.css']
})
export class MyFooterComponent implements OnInit {

  navigation = navigation;
  sitemap = sitemap;
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
