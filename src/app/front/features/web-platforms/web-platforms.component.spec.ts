import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPlatformsComponent } from './web-platforms.component';

describe('WebPlatformsComponent', () => {
  let component: WebPlatformsComponent;
  let fixture: ComponentFixture<WebPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebPlatformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
