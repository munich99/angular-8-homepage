import { Component, OnInit } from '@angular/core';
import { ServiceMailService } from '../../services/service-mail.service';
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
  selector: 'app-my-contact',
  templateUrl: './my-contact.component.html',
  styleUrls: ['./my-contact.component.css'],
  animations: [ trigger('fadeIn', [
    transition(':enter', [
      style({opacity: 0}),
      animate('450ms', style({opacity:1}) )
    ])
  ]) ]
})
export class MyContactComponent implements OnInit {

  changeLanguage:boolean;

  constructor(private Mail: ServiceMailService, private servicelanguageservice:ServiceLanguageService) { }
  // constructor() { }

  ngOnInit() {
    this.servicelanguageservice.changeLanguage.subscribe(c => {
      this.changeLanguage = c;
    })
  }

  contactUser(event) {
    const target = event.target;
    const name  =   target.querySelector('#name').value;
    const email  =  target.querySelector('#email').value;
    const phone =   target.querySelector('#phone').value;
    const subject = target.querySelector('#subject').value;
    const mailmessage = target.querySelector('#mailmessage').value; 

    this.Mail.contactUserdetails(name, email, phone, subject, mailmessage).subscribe(data => {

      if (data.success){
        alert('yeah!')
      } else {
        alert('not possible')
      }
    });
    // console.log("drinnen");
   // alert(name + "+" + email + "+" + phone + "+" + subject + "+" + mailmessage);
  }



}
