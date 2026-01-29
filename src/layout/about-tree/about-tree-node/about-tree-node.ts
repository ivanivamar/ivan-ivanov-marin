import { Component, input, output } from '@angular/core'
import { IAboutTree } from '../about-tree'

@Component({
  selector: 'app-about-tree-node',
  imports: [],
  templateUrl: './about-tree-node.html',
  styleUrl: './about-tree-node.sass',
})
export class AboutTreeNode {
    node = input<IAboutTree>(new IAboutTree());
    level = input<number>(0);
    onNodeClick = output<IAboutTree>();
}
