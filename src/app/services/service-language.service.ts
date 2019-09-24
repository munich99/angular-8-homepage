import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceLanguageService {
  counter= false;
  changeLanguage: BehaviorSubject<boolean>; 

  constructor() { 
    this.changeLanguage= new BehaviorSubject(this.counter);
  }

  nextCount(){
    this.counter = !this.counter;
    this.changeLanguage.next(this.counter);

    var bb = this.changeLanguage;
    console.log(bb);
  }
}
