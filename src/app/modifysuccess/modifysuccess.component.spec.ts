import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifysuccessComponent } from './modifysuccess.component';

describe('ModifysuccessComponent', () => {
  let component: ModifysuccessComponent;
  let fixture: ComponentFixture<ModifysuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifysuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifysuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
