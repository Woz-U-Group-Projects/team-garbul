import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MessageFormComponent } from './shared/components/message-form/message-form.component';

const routes: Routes = [
    {
        path: 'message',
        component: MessageFormComponent
    }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
