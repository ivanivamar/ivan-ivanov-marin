import {Routes} from '@angular/router';
import {Home} from './landing-page/home';

export const routes: Routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: 'works',
        loadComponent: () => import('./works/works').then(m => m.Works),
        pathMatch: 'full'
    },
    {
        path: 'works/:title',
        loadComponent: () => import('./works/work-details/work-details').then(m => m.WorkDetails),
    }
];
