import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MemberComponent } from './components/member/member.component';
import { DonationsComponent } from './components/donations/donations.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { JobFormComponent } from './components/jobform/jobform.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'member', component: MemberComponent },
  { path: 'donations', component: DonationsComponent },
  { path: 'jobform', component: JobFormComponent },
];
