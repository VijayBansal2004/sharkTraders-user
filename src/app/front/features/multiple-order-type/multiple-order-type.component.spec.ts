import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleOrderTypeComponent } from './multiple-order-type.component';

describe('MultipleOrderTypeComponent', () => {
  let component: MultipleOrderTypeComponent;
  let fixture: ComponentFixture<MultipleOrderTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleOrderTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleOrderTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
