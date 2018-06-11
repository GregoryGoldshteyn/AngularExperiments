import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHexDialogComponent } from './edit-hex-dialog.component';

describe('EditHexDialogComponent', () => {
  let component: EditHexDialogComponent;
  let fixture: ComponentFixture<EditHexDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHexDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHexDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
