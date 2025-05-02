import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTradingComponent } from './mobile-trading.component';

describe('MobileTradingComponent', () => {
  let component: MobileTradingComponent;
  let fixture: ComponentFixture<MobileTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileTradingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
