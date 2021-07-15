import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { InformationComponent } from './components/information/information.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ParticlesComponent } from './components/particles/particles.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    InformationComponent,
    ParticlesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
