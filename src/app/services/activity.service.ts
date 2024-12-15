import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Activity {
  id: string;
  title: string;
  description: string;
  images: string[];
  types: string[];
  status: string;
}

export interface ActivityDetail extends Activity {
  opinion: string;
  dateFrom: string;
  dateTo?: string;
  roles?: string[];
  reward?: string;
  link?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private http: HttpClient
  ) { }

  getActivities() {
    return this.http.get<Activity[]>('/api/activities');
  }

  getActivityDetail(id: string) {
    return this.http.get<ActivityDetail>(`/api/activities/${id}`);
  }
    
}
