import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyStartComponent } from './templates/my-start/my-start.component';
import { MyContactComponent } from './templates/my-contact/my-contact.component';
import { MyProjectComponent } from './templates/my-project/my-project.component';
import { MySkillsComponent } from './templates/my-skills/my-skills.component';


const routes: Routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full'} ,
    { path: 'start', component: MyStartComponent}, 
    { path: 'contact', component: MyContactComponent },
    { path: 'project', component: MyProjectComponent },
    { path: 'skills', component: MySkillsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
