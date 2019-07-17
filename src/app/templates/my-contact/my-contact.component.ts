import { Component, OnInit } from '@angular/core';
import { ServiceMailService } from '../../services/service-mail.service';



@Component({
  selector: 'app-my-contact',
  templateUrl: './my-contact.component.html',
  styleUrls: ['./my-contact.component.css']
})
export class MyContactComponent implements OnInit {

  constructor(private Mail: ServiceMailService) { }
  // constructor() { }

  ngOnInit() {
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
