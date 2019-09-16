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
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.css'],
  animations: [ trigger('fadeIn', [
    transition(':enter', [
      style({opacity: 0}),
      animate('450ms', style({opacity:1}) )
    ])
  ]) ]
})
export class MyProjectComponent implements OnInit {

  changeLanguage:boolean;

  html: string = `
<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>`;

  

  constructor(private servicelanguageservice:ServiceLanguageService) { }

  ngOnInit() {
    this.servicelanguageservice.changeLanguage.subscribe(c => {
      this.changeLanguage = c;      
    })
  }
  

}
