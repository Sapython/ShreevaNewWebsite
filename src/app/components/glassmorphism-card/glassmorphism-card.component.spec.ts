import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassmorphismCardComponent } from './glassmorphism-card.component';

describe('GlassmorphismCardComponent', () => {
  let component: GlassmorphismCardComponent;
  let fixture: ComponentFixture<GlassmorphismCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassmorphismCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassmorphismCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
