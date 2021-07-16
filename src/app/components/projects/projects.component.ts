import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('createCard',[
      transition('void => *',[style({transform : 'translateX(-15%)',opacity :0 }),animate('0.6s 0.2s ease-out')])
    ]),
    trigger('textOpen',[
      transition('void => *',[style({opacity :0 ,transform : 'translateX(-7%)'}),animate('0.6s 0.2s ease-out')])
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
