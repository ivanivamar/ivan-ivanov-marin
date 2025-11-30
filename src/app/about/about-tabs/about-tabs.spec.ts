import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTabs } from './about-tabs';

describe('AboutTabs', () => {
  let component: AboutTabs;
  let fixture: ComponentFixture<AboutTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
