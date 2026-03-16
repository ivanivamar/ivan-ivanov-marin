import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDrawer } from './nav-drawer';

describe('NavDrawer', () => {
  let component: NavDrawer;
  let fixture: ComponentFixture<NavDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavDrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDrawer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
