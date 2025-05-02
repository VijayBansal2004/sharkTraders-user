import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictiveTradingOptionsComponent } from './predictive-trading-options.component';

describe('PredictiveTradingOptionsComponent', () => {
  let component: PredictiveTradingOptionsComponent;
  let fixture: ComponentFixture<PredictiveTradingOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredictiveTradingOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictiveTradingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
