import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadDiaristaPage } from './cad-diarista.page';

describe('CadDiaristaPage', () => {
  let component: CadDiaristaPage;
  let fixture: ComponentFixture<CadDiaristaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadDiaristaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadDiaristaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
