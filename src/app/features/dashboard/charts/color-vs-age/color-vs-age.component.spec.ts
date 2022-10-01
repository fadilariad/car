import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorVsAgeComponent } from './color-vs-age.component';

describe('ColorVsAgeComponent', () => {
  let component: ColorVsAgeComponent;
  let fixture: ComponentFixture<ColorVsAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorVsAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorVsAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
