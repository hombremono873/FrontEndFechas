import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarfechaComponent } from './verificarfecha.component';

describe('VerificarfechaComponent', () => {
  let component: VerificarfechaComponent;
  let fixture: ComponentFixture<VerificarfechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificarfechaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificarfechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
