import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTreeNode } from './about-tree-node';

describe('AboutTreeNode', () => {
  let component: AboutTreeNode;
  let fixture: ComponentFixture<AboutTreeNode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTreeNode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTreeNode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
