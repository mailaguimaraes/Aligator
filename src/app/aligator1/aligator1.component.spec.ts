import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aligator1Component } from './aligator1.component';

describe('Aligator1Component', () => {
  let component: Aligator1Component;
  let fixture: ComponentFixture<Aligator1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aligator1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aligator1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
