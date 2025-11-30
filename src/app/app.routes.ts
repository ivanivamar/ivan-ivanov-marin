import { Routes } from '@angular/router';
import {Hello} from './hello/hello';
import {About} from './about/about';
import {Projects} from './projects/projects';
import {Contact} from './contact/contact';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/hello',
        pathMatch: 'full'
    },
    {
        path: 'hello',
        component: Hello,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: About,
        pathMatch: 'full'
    },
    {
        path: 'projects',
        component: Projects,
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: Contact,
        pathMatch: 'full'
    }
];
