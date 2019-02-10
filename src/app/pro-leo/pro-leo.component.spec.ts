import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProLeoComponent } from './pro-leo.component';

describe('ProLeoComponent', () => {
  let component: ProLeoComponent;
  let fixture: ComponentFixture<ProLeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProLeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProLeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
