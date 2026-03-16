import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core'
import {ActivatedRoute, RouterLink} from '@angular/router'
import {MarkdownRenderer} from '../../../layout/markdown-renderer/markdown-renderer';

@Component({
    selector: 'app-project-details',
    imports: [
        RouterLink,
        MarkdownRenderer
    ],
    templateUrl: './project-details.html',
    styleUrl: './project-details.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetails {
    private readonly route = inject(ActivatedRoute);

    title$ = this.route.snapshot.params[ 'title'];
}
