import { Component, inject, input, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'

@Component({
  selector: 'app-project-details',
    imports: [
        RouterLink
    ],
  templateUrl: './project-details.html',
  styleUrl: './project-details.sass',
})
export class ProjectDetails implements OnInit {
    private readonly route = inject(ActivatedRoute);

    title: string | null = null;

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const titleParam = params.get('title');
            if (titleParam) {
                this.title = titleParam;
            }
        });
    }
}
