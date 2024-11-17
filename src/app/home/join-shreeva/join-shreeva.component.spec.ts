import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinShreevaComponent } from './join-shreeva.component';

describe('JoinShreevaComponent', () => {
  let component: JoinShreevaComponent;
  let fixture: ComponentFixture<JoinShreevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinShreevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinShreevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
