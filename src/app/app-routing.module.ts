import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { TablesComponent } from './components/tables/tables.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './components/signin/signin.component';
import { CalenderComponent } from './components/calender/calender.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'calender', component: CalenderComponent },
    
  ] 
},
{ path: 'login', component: SigninComponent },
{ path: 'register', component: SignupComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
