import { BrowserModule } from '@angular/platform-browser';
import { InViewportModule } from 'ng-in-viewport';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParallaxDirective } from './parallax.directive';
import { LandingComponent } from './landing/landing.component';
import { StudentsComponent } from './students/students.component';
import { OrganisationsComponent } from './organisations/organisations.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective,
    LandingComponent,
    StudentsComponent,
    OrganisationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InViewportModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
