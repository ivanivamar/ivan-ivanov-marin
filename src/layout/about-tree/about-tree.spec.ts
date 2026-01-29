import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTree } from './about-tree';

describe('AboutTree', () => {
  let component: AboutTree;
  let fixture: ComponentFixture<AboutTree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
