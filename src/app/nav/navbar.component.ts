import { Component, OnInit } from '@angular/core';
import { AuhtService } from '../user/auth.service';

@Component({
  selector:'navbar',
  templateUrl:'./navbar.component.html',
  styles:[`
  .nav.navbar-nav {font-size: 15 px;}
  .navbar-nav {background-color: #485563;}
  #searchForm {margin-right: 100px}
  @media (max-width: 120px) {#searchForm{display:none}}
   a{color:#bbb}
  li > a.active {color: #F97924}
  `]
})
export class NavBarComponent {

  constructor(public authService :AuhtService){}


}
