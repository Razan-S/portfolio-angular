import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { AboutComponent } from './pages/about/about.component';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { detailResolver } from './components/activity-details/detail.resolver';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'works',
        component: WorksComponent
    },
    {
        path: 'works/detail',
        component: ActivityDetailsComponent,
        resolve: { detailResolver }
    },
    {
        path: 'about',
        component: AboutComponent 
    }
];
