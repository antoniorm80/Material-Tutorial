import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolComponent } from './arbol.component';

describe('ArbolComponent', () => {
  let component: ArbolComponent;
  let fixture: ComponentFixture<ArbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ArbolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
