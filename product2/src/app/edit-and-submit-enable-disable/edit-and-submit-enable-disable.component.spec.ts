import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAndSubmitEnableDisableComponent } from './edit-and-submit-enable-disable.component';

describe('EditAndSubmitEnableDisableComponent', () => {
  let component: EditAndSubmitEnableDisableComponent;
  let fixture: ComponentFixture<EditAndSubmitEnableDisableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAndSubmitEnableDisableComponent]
    });
    fixture = TestBed.createComponent(EditAndSubmitEnableDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
