import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacInfoComponent } from './vac-info.component';

describe('VacInfoComponent', () => {
  let component: VacInfoComponent;
  let fixture: ComponentFixture<VacInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
