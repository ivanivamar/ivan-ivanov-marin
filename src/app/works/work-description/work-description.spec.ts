import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDescription } from './work-description';

describe('WorkDetails', () => {
  let component: WorkDescription;
  let fixture: ComponentFixture<WorkDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkDescription);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
