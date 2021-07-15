import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger(
      'openSidenav',[
        transition('void => *',[style({transform : 'translateX(-100%)' }),animate('0.1s 0.2s ease-in')])
      ]
    )
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,) { }


  ngOnInit(): void {

  }
 
}
