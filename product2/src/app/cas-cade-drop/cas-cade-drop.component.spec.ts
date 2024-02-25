import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasCadeDropComponent } from './cas-cade-drop.component';

describe('CasCadeDropComponent', () => {
  let component: CasCadeDropComponent;
  let fixture: ComponentFixture<CasCadeDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasCadeDropComponent]
    });
    fixture = TestBed.createComponent(CasCadeDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
