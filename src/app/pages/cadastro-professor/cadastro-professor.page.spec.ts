import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroProfessorPage } from './cadastro-professor.page';

describe('CadastroProfessorPage', () => {
  let component: CadastroProfessorPage;
  let fixture: ComponentFixture<CadastroProfessorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
