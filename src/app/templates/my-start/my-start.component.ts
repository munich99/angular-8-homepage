import { Component, OnInit } from '@angular/core';
import { ServiceLanguageService } from '../../services/service-language.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-my-start',
  templateUrl: './my-start.component.html',
  styleUrls: ['./my-start.component.css'],
  animations: [ trigger('fadeIn', [
    transition(':enter', [
      style({opacity: 0}),
      animate('450ms', style({opacity:1}) )
    ])
  ]) ]
})
export class MyStartComponent implements OnInit {

  changeLanguage:boolean;

  constructor(private servicelanguageservice:ServiceLanguageService) {   }

  ngOnInit() {
    this.servicelanguageservice.changeLanguage.subscribe(c => {
      this.changeLanguage = c;
    })
  }

}
