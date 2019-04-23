import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionTableLayerComponent } from './fusion-table-layer.component';

describe('FusionTableLayerComponent', () => {
  let component: FusionTableLayerComponent;
  let fixture: ComponentFixture<FusionTableLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FusionTableLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionTableLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
