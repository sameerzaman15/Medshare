import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface Job {
  title: string;
  categories: string[];
  location: string;
}
@Component({
  selector: 'app-member',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  category = 'All Jobs Category';
  type = 'All Jobs Type';
  location = 'All Jobs Location';  

  jobs: Job[] = [
    { title: 'Medical Staff', categories: ['Cleaner', 'Chemist', 'Nurse', 'Pharmacist'], location: 'Islamabad Pakistan' },
    { title: 'Nurses', categories: ['Health', 'Medical', 'Nurse'], location: 'Islamabad Pakistan' },
    { title: 'Drivers', categories: ['Ambulance Drivers', 'Motorbike Ambulance Drivers'], location: 'Islamabad Pakistan' },
  ];


}
