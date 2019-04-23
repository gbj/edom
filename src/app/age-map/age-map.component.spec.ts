import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeMapComponent } from './age-map.component';

describe('AgeMapComponent', () => {
  let component: AgeMapComponent;
  let fixture: ComponentFixture<AgeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
