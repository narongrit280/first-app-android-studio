import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevExtremeDataGridListviewComponent } from './dev-extreme-data-grid-listview.component';

describe('DevExtremeDataGridListviewComponent', () => {
  let component: DevExtremeDataGridListviewComponent;
  let fixture: ComponentFixture<DevExtremeDataGridListviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevExtremeDataGridListviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevExtremeDataGridListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
