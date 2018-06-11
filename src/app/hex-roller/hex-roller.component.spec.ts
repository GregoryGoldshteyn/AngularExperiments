import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexRollerComponent } from './hex-roller.component';

describe('HexRollerComponent', () => {
  let component: HexRollerComponent;
  let fixture: ComponentFixture<HexRollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexRollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
