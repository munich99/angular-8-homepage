import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyStartComponent } from './templates/my-start/my-start.component';
import { MyContactComponent } from './templates/my-contact/my-contact.component';

import { MyHeaderComponent } from './allways/my-header/my-header.component';




@NgModule({
  declarations: [
    AppComponent,
    MyStartComponent,
    MyContactComponent,
    MyHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
