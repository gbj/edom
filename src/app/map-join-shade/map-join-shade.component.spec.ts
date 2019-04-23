import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapJoinShadeComponent } from './map-join-shade.component';

describe('MapJoinShadeComponent', () => {
  let component: MapJoinShadeComponent;
  let fixture: ComponentFixture<MapJoinShadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapJoinShadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapJoinShadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
