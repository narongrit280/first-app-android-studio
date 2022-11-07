import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevExtremeDataGridDetailViewComponent } from './dev-extreme-data-grid-detail-view.component';

describe('DevExtremeDataGridDetailViewComponent', () => {
  let component: DevExtremeDataGridDetailViewComponent;
  let fixture: ComponentFixture<DevExtremeDataGridDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevExtremeDataGridDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevExtremeDataGridDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
