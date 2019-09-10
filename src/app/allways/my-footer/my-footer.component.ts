import { Component, OnInit, TemplateRef } from '@angular/core';
import { navigation } from '../my-header/navi';
import { sitemap } from './sitemap';
import { law } from './law';
import { ServiceLanguageService } from '../../services/service-language.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.css']
})
export class MyFooterComponent implements OnInit {

  navigation = navigation;
  sitemap = sitemap;
  law = law; 
  changeLanguage: boolean;

  modalRef: BsModalRef;
  items: any[];

  constructor(private servicelanguageservice:ServiceLanguageService, private modalService: BsModalService ) { 
    this.items = Array(15).fill(0);
  }

  ngOnInit() {
    this.servicelanguageservice.changeLanguage.subscribe(c =>{
      this.changeLanguage = c;
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  nextCount(){
    this.servicelanguageservice.nextCount();
  }

}
