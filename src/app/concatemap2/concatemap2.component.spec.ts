import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Concatemap2Component } from './concatemap2.component';

describe('Concatemap2Component', () => {
  let component: Concatemap2Component;
  let fixture: ComponentFixture<Concatemap2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Concatemap2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Concatemap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
