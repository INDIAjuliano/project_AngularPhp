import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditonsComponent } from './additons.component';

describe('AdditonsComponent', () => {
  let component: AdditonsComponent;
  let fixture: ComponentFixture<AdditonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdditonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
