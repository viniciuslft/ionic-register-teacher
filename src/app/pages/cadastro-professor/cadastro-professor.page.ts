import { Component } from '@angular/core';
import { Professor } from 'src/app/models/professor.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.page.html',
  styleUrls: ['./cadastro-professor.page.scss'],
  standalone: false
})
export class CadastroProfessorPage {
  professor: Professor = {
    nome: '',
    email: '',
    telefone: '',
    idade: 0
  };

  constructor(private http: HttpClient) {}

  salvar() {
    this.http.post('http://localhost:3000/professores', this.professor)
      .subscribe({
        next: () => alert('Professor cadastrado com sucesso!'),
        error: err => alert('Erro ao cadastrar: ' + err.message)
      });
  }
}