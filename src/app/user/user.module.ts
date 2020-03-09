import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { userRoute } from './user.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
     ReactiveFormsModule,
    RouterModule.forChild(userRoute)
    ],
  declarations:[ProfileComponent,
                LoginComponent],
  exports:[],
  providers:[]
})
export class UserModule{}
