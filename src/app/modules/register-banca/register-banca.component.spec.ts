import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBancaComponent } from './register-banca.component';

describe('RegisterBancaComponent', () => {
  let component: RegisterBancaComponent;
  let fixture: ComponentFixture<RegisterBancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterBancaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
