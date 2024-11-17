import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierOfSolutionComponent } from './tier-of-solution.component';

describe('TierOfSolutionComponent', () => {
  let component: TierOfSolutionComponent;
  let fixture: ComponentFixture<TierOfSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TierOfSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TierOfSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
