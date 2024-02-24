import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittComponent } from './submitt.component';

describe('SubmittComponent', () => {
  let component: SubmittComponent;
  let fixture: ComponentFixture<SubmittComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmittComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
