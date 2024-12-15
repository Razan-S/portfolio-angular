import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { AboutComponent } from './pages/about/about.component';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { detailResolver } from './components/activity-details/detail.resolver';
import { SlideShowComponent } from './components/slide-show/slide-show.component';

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
        runGuardsAndResolvers: 'always',
        resolve: { 
            actDetail: detailResolver 
        }
    },
    {
        path: 'about',
        component: AboutComponent 
    },
    {
        path: 'test',
        component: SlideShowComponent
    }
];
