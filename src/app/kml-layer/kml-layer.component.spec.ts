import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmlLayerComponent } from './kml-layer.component';

describe('KmlLayerComponent', () => {
  let component: KmlLayerComponent;
  let fixture: ComponentFixture<KmlLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmlLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmlLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
