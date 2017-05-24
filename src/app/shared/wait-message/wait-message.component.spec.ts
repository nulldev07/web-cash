import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitMessageComponent } from './wait-message.component';

describe('WaitMessageComponent', () => {
  let component: WaitMessageComponent;
  let fixture: ComponentFixture<WaitMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
