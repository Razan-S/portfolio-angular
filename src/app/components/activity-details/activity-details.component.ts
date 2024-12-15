import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Fieldset } from 'primeng/fieldset';
import { SlideShowComponent } from '../slide-show/slide-show.component';
import { ActivityDetail } from '../../services/activity.service';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-activity-details',
  standalone: true,
  imports: [CommonModule, SlideShowComponent, ButtonModule, Fieldset, ChipModule],
  templateUrl: './activity-details.component.html',
  styleUrl: './activity-details.component.scss'
})
export class ActivityDetailsComponent {

  detail!: ActivityDetail;


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data);
    });

    this.detail = {
      id: "12312",
      title: 'Activity 1',
      description: 'This is the first activity',
      images: [
        './assets/images/me.png',
        './assets/images/me.png',
        './assets/images/me.png',
      ],
      types: [
        'backend',
        'frontend'
      ],
      status: 'acheived',
      opinion: 'good',
      dateFrom: '2021-01-01',
      dateTo: '2021-01-01',
      roles: [
        'admin',
        'UX/UI Designer'
      ],
      // reward: 'good',
      link: 'https://www.google.com'
    }
  }

  backToActivityList() {
    this.router.navigate(['/works']);
  }
}
