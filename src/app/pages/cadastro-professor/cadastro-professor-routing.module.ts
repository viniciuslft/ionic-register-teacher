import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroProfessorPage } from './cadastro-professor.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroProfessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroProfessorPageRoutingModule {}
