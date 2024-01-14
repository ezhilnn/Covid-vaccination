import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSignInComponent } from './register-sign-in.component';

describe('RegisterSignInComponent', () => {
  let component: RegisterSignInComponent;
  let fixture: ComponentFixture<RegisterSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterSignInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
