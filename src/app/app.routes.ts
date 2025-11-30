import {Routes} from '@angular/router';
import {Hello} from './hello/hello';
import {About} from './about/about';
import {Projects} from './projects/projects';
import {Contact} from './contact/contact';
import {WorkExperience} from './about/work-experience/work-experience';
import {PersonalInfo} from './about/personal-info/personal-info';

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
        children: [
            {path: '', redirectTo: 'work-experience', pathMatch: 'full'},
            {
                path: 'work-experience',
                component: WorkExperience,
            },
            {
                path: 'personal-info',
                component: PersonalInfo,
            }
        ]
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
