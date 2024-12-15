import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Fieldset } from 'primeng/fieldset';

@Component({
  selector: 'app-activity-details',
  standalone: true,
  imports: [ButtonModule, Fieldset],
  templateUrl: './activity-details.component.html',
  styleUrl: './activity-details.component.scss'
})
export class ActivityDetailsComponent {

  constructor(
    private router: Router,
  ) { }

  backToActivityList() {
    this.router.navigate(['/works']);
  }
}
