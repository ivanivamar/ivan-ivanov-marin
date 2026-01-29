import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfo } from './personal-info';

describe('PersonaInfo', () => {
  let component: PersonalInfo;
  let fixture: ComponentFixture<PersonalInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
