import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProJoanComponent } from './pro-joan.component';

describe('ProJoanComponent', () => {
  let component: ProJoanComponent;
  let fixture: ComponentFixture<ProJoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProJoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProJoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
