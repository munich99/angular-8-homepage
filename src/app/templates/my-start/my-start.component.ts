import { Component, OnInit } from '@angular/core';
import { ServiceLanguageService } from '../../services/service-language.service';

@Component({
  selector: 'app-my-start',
  templateUrl: './my-start.component.html',
  styleUrls: ['./my-start.component.css']
})
export class MyStartComponent implements OnInit {

  changeLanguage:boolean;

  constructor(private servicelanguageservice:ServiceLanguageService) {   }

  ngOnInit() {
    this.servicelanguageservice.changeLanguage.subscribe(c => {
      this.changeLanguage = c;
    })
  }

  nextCount(){
    this.servicelanguageservice.nextCount();
  }

}
