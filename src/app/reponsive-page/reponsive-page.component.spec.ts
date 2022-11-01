import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponsivePageComponent } from './reponsive-page.component';

describe('ReponsivePageComponent', () => {
  let component: ReponsivePageComponent;
  let fixture: ComponentFixture<ReponsivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponsivePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReponsivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
