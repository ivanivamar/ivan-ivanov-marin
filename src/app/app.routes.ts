import {Routes} from '@angular/router';
import {Hello} from './hello/hello';
import {About} from './about/about';
import {Projects} from './projects/projects';
import {Contact} from './contact/contact';
import {WorkExperience} from './about/work-experience/work-experience';
import {PersonalInfo} from './about/personal-info/personal-info';
import { ProjectDetails } from './projects/project-details/project-details'

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
        children: [
            {
                // This route can be for the component that contains the provided HTML
                path: '',
                component: Projects,
            },
            {
                // This route handles the navigation to project details
                path: 'project-details/:title',
                component: ProjectDetails,
            }
        ]
    },
    {
        path: 'contact',
        component: Contact,
        pathMatch: 'full'
    }
];
