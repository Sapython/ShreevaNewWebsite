import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTrustComponent } from './client-trust.component';

describe('ClientTrustComponent', () => {
  let component: ClientTrustComponent;
  let fixture: ComponentFixture<ClientTrustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTrustComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
