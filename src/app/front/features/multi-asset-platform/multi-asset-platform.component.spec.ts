import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAssetPlatformComponent } from './multi-asset-platform.component';

describe('MultiAssetPlatformComponent', () => {
  let component: MultiAssetPlatformComponent;
  let fixture: ComponentFixture<MultiAssetPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiAssetPlatformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiAssetPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
