import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' ;
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServiceMailService } from './services/service-mail.service';

import { MyStartComponent } from './templates/my-start/my-start.component';
import { MyContactComponent } from './templates/my-contact/my-contact.component';
import { MyProjectComponent } from './templates/my-project/my-project.component';
import { MySkillsComponent } from './templates/my-skills/my-skills.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';


import { MyHeaderComponent } from './allways/my-header/my-header.component';
import { MyFooterComponent } from './allways/my-footer/my-footer.component';
import { MyDatenschutzComponent } from './allways/my-footer/my-datenschutz/my-datenschutz.component';
import { MyDatenschutzdeutschComponent } from './allways/my-footer/my-datenschutzdeutsch/my-datenschutzdeutsch.component';
import { MyImpressumComponent } from './allways/my-footer/my-impressum/my-impressum.component';
import { MyDisclaimerComponent } from './allways/my-footer/my-disclaimer/my-disclaimer.component';
import { MyDisclaimerdeutschComponent } from './allways/my-footer/my-disclaimerdeutsch/my-disclaimerdeutsch.component';






@NgModule({
  declarations: [
    AppComponent,
    MyStartComponent,
    MyContactComponent,
    MyProjectComponent,
    MyHeaderComponent,
    MyFooterComponent,
    MyDatenschutzComponent,
    MyDatenschutzdeutschComponent,
    MyImpressumComponent,
    MyDisclaimerComponent,
    MyDisclaimerdeutschComponent,
    MySkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot() 
  ],
  providers: [ServiceMailService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
