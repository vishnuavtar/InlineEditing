import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitButtonActiveComponent } from './submit-button-active.component';

describe('SubmitButtonActiveComponent', () => {
  let component: SubmitButtonActiveComponent;
  let fixture: ComponentFixture<SubmitButtonActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitButtonActiveComponent]
    });
    fixture = TestBed.createComponent(SubmitButtonActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
