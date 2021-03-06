import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuhtService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
templateUrl:'./profile.component.html',
styles:[`
em {float:right; color:#e05c65; padding-left: 10px;}
.error input {background-color:#E3C3C5}
.error ::-webkit-input-placeholder {color:#999;}
.error ::-moz-placeholder {color:#999;}
.error :-moz-placeholder {color:#999;}
.error :ms-input-placeholder {color:#999;}
`]
})
export class ProfileComponent implements OnInit{
  profileForm : FormGroup
  private firstname:FormControl
  private lastname:FormControl

  constructor(private authService :AuhtService,
              private router:Router,
                @Inject(TOASTR_TOKEN) private toastr:Toastr){}
  ngOnInit(): void {
    this.firstname = new FormControl(this.authService.currentUser?.firstName,
      [Validators.required,Validators.pattern('[a-zA-Z].*')])
      this.lastname =new FormControl(this.authService.currentUser?.lastName,
        Validators.required)
    this.profileForm = new FormGroup({

      fname : this.firstname ,
      lname : this.lastname
    })
  }

  cancel(){
    this.router.navigate(['events'])
  }

  saveProfile(profileFormValue){
    if(this.profileForm.valid){
    this.authService.editProfile(profileFormValue.fname, profileFormValue.lname)
    // this.router.navigate(['events'])
    this.toastr.success("porfile saved",'profile')
    }
  }

  validateFirstName =() =>  this.firstname.valid || this.firstname.touched



  validateLastName =()=>   this.lastname.valid || this.lastname.touched

}
