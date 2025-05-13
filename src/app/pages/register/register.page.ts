import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  standalone: false
})
export class RegisterPage {
  name = '';
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    this.http.post('http://localhost:3000/api/register', {
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe(() => {
      alert('Usuário cadastrado com sucesso!');
      this.router.navigate(['/login']);
    }, err => {
      alert('Erro ao cadastrar');
    });
  }
}