import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoyakuSite3Component } from './yoyaku-site3.component';

describe('YoyakuSite3Component', () => {
  let component: YoyakuSite3Component;
  let fixture: ComponentFixture<YoyakuSite3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoyakuSite3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoyakuSite3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
