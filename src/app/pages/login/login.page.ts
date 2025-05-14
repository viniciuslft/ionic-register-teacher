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
    }).subscribe({
      next: (res: any) => {
        // ✅ salva o usuário no localStorage
        localStorage.setItem('usuario', JSON.stringify(res.user || res.usuario || res));
        // ✅ redireciona para a tela de cadastro de professor
        this.router.navigate(['/cadastro-professor']);
      },
      error: () => {
        alert('Credenciais inválidas');
      }
    });
  }
}
