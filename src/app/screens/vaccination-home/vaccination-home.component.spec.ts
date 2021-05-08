import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationHomeComponent } from './vaccination-home.component';

describe('VaccinationHomeComponent', () => {
  let component: VaccinationHomeComponent;
  let fixture: ComponentFixture<VaccinationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
