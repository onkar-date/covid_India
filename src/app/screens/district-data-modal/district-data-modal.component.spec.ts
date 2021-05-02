import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictDataModalComponent } from './district-data-modal.component';

describe('DistrictDataModalComponent', () => {
  let component: DistrictDataModalComponent;
  let fixture: ComponentFixture<DistrictDataModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictDataModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
