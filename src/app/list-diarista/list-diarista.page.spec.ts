import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDiaristaPage } from './list-diarista.page';

describe('ListDiaristaPage', () => {
  let component: ListDiaristaPage;
  let fixture: ComponentFixture<ListDiaristaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDiaristaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDiaristaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
