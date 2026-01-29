import { Component } from '@angular/core';
import { AboutTree, IAboutTree } from '../../../layout/about-tree/about-tree'

@Component({
  selector: 'app-work-experience',
    imports: [
        AboutTree
    ],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.sass',
})
export class WorkExperience {
    options: IAboutTree[] = [
        {
            title: 'Work Experience',
            extended: true,
            children: [
                {
                    title: 'Angular Developer',
                },
                {
                    title: 'Salesforce B2C Developer',
                }
            ]
        },
        {
            title: 'Skills',
            children: [
                {
                    title: 'Angular',
                },
                {
                    title: 'C#',
                }
            ]
        },
        {
            title: 'Education',
            children: [
                {
                    title: '',
                },
                {
                    title: '',
                }
            ]
        }
    ]
}
