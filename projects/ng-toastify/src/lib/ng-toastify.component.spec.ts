import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgToastifyComponent } from './ng-toastify.component';

describe('NgToastifyComponent', () => {
  let component: NgToastifyComponent;
  let fixture: ComponentFixture<NgToastifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgToastifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgToastifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
