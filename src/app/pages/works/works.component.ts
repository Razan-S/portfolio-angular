import { Component, OnInit } from '@angular/core';
import { ActivityCardComponent } from '../../components/activity-card/activity-card.component';
import { Activity, ActivityService } from '../../services/activity.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [ActivityCardComponent, CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent implements OnInit {
  activities: Activity[] = []

  items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  // constructor(
  //   private activity: ActivityService
  // ) { }

  ngOnInit() {  
    console.log('hello');
    // this.activity.getActivities()
    //   .subscribe((activities:Activity[]) => {
    //     this.activities = activities
    //   })
  }
}
