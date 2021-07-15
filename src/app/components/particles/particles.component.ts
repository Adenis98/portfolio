import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css'],
  animations: [
    trigger(
      'createParticles',[
        transition('void => *',[style({opacity:0 }),animate('0.5s 0.2s ease-in')])
      ]
    )
  ]
})
export class ParticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // https://vincentgarreau.com/particles.js/
    particlesJS.load('particles-js', 'assets/data/particles.json', function() { console.log('callback - particles.js config loaded'); });
  }

}
