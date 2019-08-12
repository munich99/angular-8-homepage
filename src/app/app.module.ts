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

import { MyHeaderComponent } from './allways/my-header/my-header.component';
import { MyFooterComponent } from './allways/my-footer/my-footer.component';






@NgModule({
  declarations: [
    AppComponent,
    MyStartComponent,
    MyContactComponent,
    MyHeaderComponent,
    MyFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    BrowserModule,
    BrowserAnimationsModule   
  ],
  providers: [ServiceMailService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
