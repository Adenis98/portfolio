import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('createIntro',[
      transition('void => *',[style({transform : 'translateX(-10%)',opacity :0 }),animate('0.5s 0.2s ease-out')])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  
}
