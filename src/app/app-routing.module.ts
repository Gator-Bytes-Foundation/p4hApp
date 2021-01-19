import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../assets/login.component';
import { ProfileComponent } from '../assets/profile.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
