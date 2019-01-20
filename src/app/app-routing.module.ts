import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MessageFormComponent } from '../app/message-form/message-form.component';

import { AwsComponent } from '../app/aws/aws.component';
import { AngularComponent } from './angular/angular.component';

const routes: Routes = [
    { path: 'message', component: MessageFormComponent },
    { path: 'angular', component: AngularComponent },
    { path: 'aws', component: AwsComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []

})
export class AppRoutingModule { }
