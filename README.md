# Aplicação de Cadastro de Professores com Ionic, Angular e TailwindCSS

Este projeto tem como objetivo desenvolver uma aplicação responsiva para **cadastro de professores**, utilizando **Ionic Framework**, **Angular** e **TailwindCSS**. O foco está em **interface moderna**, **responsividade mobile** e **usabilidade aprimorada com formulários dinâmicos**.

## Funcionalidades

- **Cadastro de Professores**: Interface para inserir dados como nome, disciplina, e-mail, etc.
- **Layout Responsivo**: Utilização de TailwindCSS para adaptar o layout a diferentes tamanhos de tela.
- **Integração com Ionic e Angular**: Navegação fluida, componentes prontos para dispositivos móveis e estrutura moderna.

## Tecnologias Utilizadas

### Linguagens:
- <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="30" alt="TypeScript logo"/></a><img width="12"/>
- <a href="https://www.nodejs.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" height="30" alt="NodeJS logo"/></a><img width="12"/>

### Frameworks e Bibliotecas:
- <a href="https://angular.io/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" height="30" alt="Angular logo"/></a><img width="12"/>
- <a href="https://ionicframework.com/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" height="30" alt="Ionic logo"/></a><img width="12"/>
- <a href="https://tailwindcss.com/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" height="30" alt="TailwindCSS logo"/></a><img width="12"/>

## Funcionalidades Implementadas

- **Formulário de Cadastro**: Campos para nome, e-mail, matéria, e outros dados relevantes.
- **Validação de Campos**: Feedback visual usando TailwindCSS e Angular Forms.
- **Layout Mobile-First**: Aplicativo adaptado para rodar bem em dispositivos móveis.
- **Design Personalizado com TailwindCSS**: Estilo leve, customizável e baseado em utilitários.

## Como Rodar o Projeto

### Pré-Requisitos:

- Node.js 18+ instalado
- Ionic CLI (`npm install -g @ionic/cli`)
- Angular CLI (`npm install -g @angular/cli`)
- TailwindCSS (instalado automaticamente com `ng add ngx-tailwind`)

### Passos:

1. Clone este repositório:
   ```bash
   git clone https://github.com/viniciuslft/ionic-register-teacher.git
   cd ionic-register-teacher
   ```
2. Instale as dependências do front-end (Ionic + Angular):
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   ionic serve
   ```
4. Vá para a pasta do backend (caso esteja incluída no projeto ou seja um repositório separado):
   ```bash
   cd backend
   ```
5. Instale as dependências do backend Node.js:
   ```bash
   npm install
   ```
6. Crie um arquivo .env (caso necessário) com as variáveis de ambiente, como porta do servidor, conexão com banco de dados etc.

7. Inicie o servidor backend:
   ```bash
   node index.js
   ```
