import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexMapperComponent } from './hex-mapper.component';

describe('HexMapperComponent', () => {
  let component: HexMapperComponent;
  let fixture: ComponentFixture<HexMapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexMapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
