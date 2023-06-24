import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectReplayComponent } from './subject-replay.component';

describe('SubjectReplayComponent', () => {
  let component: SubjectReplayComponent;
  let fixture: ComponentFixture<SubjectReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectReplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
