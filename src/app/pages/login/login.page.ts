import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: false
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post('http://localhost:3000/api/login', {
      email: this.email,
      password: this.password
    }).subscribe((res: any) => {
      console.log('Login bem-sucedido', res);
      // redirecionar ou salvar token se houver
    }, err => {
      alert('Credenciais inválidas');
    });
  }
}