import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  animations: [
    trigger('textOpen',[
      transition('void => *',[style({opacity :0 }),animate('1s 0.2s ease-out')])
    ])
  ]
})
export class InformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
