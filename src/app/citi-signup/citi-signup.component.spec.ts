import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiSignupComponent } from './citi-signup.component';

describe('CitiSignupComponent', () => {
  let component: CitiSignupComponent;
  let fixture: ComponentFixture<CitiSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitiSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitiSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
