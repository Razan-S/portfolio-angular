import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { AboutComponent } from './pages/about/about.component';

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
        path: 'about',
        component: AboutComponent 
    }
];
