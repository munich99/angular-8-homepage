import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  success: boolean,
  message: string
}

@Injectable()
export class ServiceMailService {

  constructor(private http:HttpClient) { }

  contactUserdetails( name, email, phone, subject, mailmessage) {
    // post these details to BACKEND server return user info if correct
    return this.http.post<myData>('http://fake-mail',{
      name, email, phone, subject, mailmessage
    })

  }

}
