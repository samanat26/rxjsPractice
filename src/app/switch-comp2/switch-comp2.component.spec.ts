import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchComp2Component } from './switch-comp2.component';

describe('SwitchComp2Component', () => {
  let component: SwitchComp2Component;
  let fixture: ComponentFixture<SwitchComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchComp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
