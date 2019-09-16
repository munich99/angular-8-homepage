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


  htmlOne: string = `
  <b>Aufgabe:</b><br>
  Bestehender Auftritt - Neue Navi Elemente, Content Elemente, Suchfunktionen, UI-Funktionen<br>
  
  <b>Technik:</b><br>
  Responsive (Bootstrap)<br>
  Styling (SCSS)<br>
  Development (jQuery)<br>
  Template (JavaApi)<br>
  URL (www)<br>
  <b>Arbeitgeber</b><br>
  Bayerische Staatsbibliothek 
  `;
  htmlTwo: string = `
  <b>Aufgabe:</b><br>
  Realaunch - neuer Onepager<br>

  <b>Technik:</b><br>
  Responsive (Bootstrap)<br>
  Development - Bootstrap<br>
  Styling (CSS)<br>
  CMS (CMS Simple)<br>
  Backendfunktionen (php)
  `;

  

  constructor(private servicelanguageservice:ServiceLanguageService) { }

  ngOnInit() {
    this.servicelanguageservice.changeLanguage.subscribe(c => {
      this.changeLanguage = c;      
    })
  }
  

}
