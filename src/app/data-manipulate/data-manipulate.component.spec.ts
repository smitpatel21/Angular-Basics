import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManipulateComponent } from './data-manipulate.component';

describe('DataManipulateComponent', () => {
  let component: DataManipulateComponent;
  let fixture: ComponentFixture<DataManipulateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManipulateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataManipulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
