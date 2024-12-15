import { Component } from '@angular/core';
import { ImagePipe } from '../../pipes/image.pipe';
import { CommonModule } from '@angular/common';
import { Chip } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [CommonModule, Chip, ButtonModule, RouterModule],
  providers: [ImagePipe],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.scss'
})
export class ActivityCardComponent {

    id: string = '123456';
    title: string = 'Activity Card';
    description: string = 'This is an activity card component';
    src: string = '';
    types: string[] = ['activity', 'card'];

    icon = ['fa-solid fa-lightbulb', "fa-solid fa-circle-half-stroke", "fa-solid fa-check"]

    status: string = 'active';
    onDetailClick() {
      console.log('Detail clicked');
    }
}