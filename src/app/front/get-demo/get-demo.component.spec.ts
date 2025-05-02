import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDemoComponent } from './get-demo.component';

describe('GetDemoComponent', () => {
  let component: GetDemoComponent;
  let fixture: ComponentFixture<GetDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
