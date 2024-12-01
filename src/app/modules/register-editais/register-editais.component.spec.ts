import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEditaisComponent } from './register-editais.component';

describe('RegisterEditaisComponent', () => {
  let component: RegisterEditaisComponent;
  let fixture: ComponentFixture<RegisterEditaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterEditaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEditaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
