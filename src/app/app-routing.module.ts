import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { StudentsComponent } from "./students/students.component";
import { OrganisationsComponent } from "./organisations/organisations.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'organisations', component: OrganisationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
