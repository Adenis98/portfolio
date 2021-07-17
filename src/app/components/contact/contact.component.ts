import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] , 
  animations: [
    trigger('textOpen',[
      transition('void => *',[style({opacity :0 ,transform : 'translateX(-7%)'}),animate('0.6s 0.2s ease-out')])
    ])
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
