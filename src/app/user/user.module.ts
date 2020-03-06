import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { userRoute } from './user.route';

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(userRoute)
    ],
  declarations:[ProfileComponent],
  exports:[],
  providers:[]
})
export class UserModule{}
