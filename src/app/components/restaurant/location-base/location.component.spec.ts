import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBaseComponent } from './location.component';

describe('LocationBaseComponent', () => {
  let component: LocationBaseComponent;
  let fixture: ComponentFixture<LocationBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
