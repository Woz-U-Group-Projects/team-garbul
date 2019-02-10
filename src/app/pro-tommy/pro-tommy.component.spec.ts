import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProTommyComponent } from './pro-tommy.component';

describe('ProTommyComponent', () => {
  let component: ProTommyComponent;
  let fixture: ComponentFixture<ProTommyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProTommyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProTommyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
