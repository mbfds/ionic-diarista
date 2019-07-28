import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteMidiaPage } from './teste-midia.page';

describe('TesteMidiaPage', () => {
  let component: TesteMidiaPage;
  let fixture: ComponentFixture<TesteMidiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteMidiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteMidiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
