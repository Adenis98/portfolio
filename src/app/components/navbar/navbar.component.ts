import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from "@angular/core";
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

  hide:boolean= true  ; 
  screenWidth = window.innerWidth;

  constructor(private router: Router,) { }
  
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    //this.screenHeight = window.innerHeight;
    if(window.screen.width<=480){
      this.hide=true ; 
    } else{
      this.hide= false ; 
    }
  }

  ngOnInit(): void {
    if(window.screen.width<=480){
      this.hide=true ; 
    } else{
      this.hide= false ; 
    }
  }
  hideBtn(){
    console.log(this.hide);
    this.hide = !this.hide ; 
  }
 
}
