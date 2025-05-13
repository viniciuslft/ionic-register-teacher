import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cadastro-professor',
    loadChildren: () => import('./pages/cadastro-professor/cadastro-professor.module').then( m => m.CadastroProfessorPageModule)
  },
    {
    path: '',
    redirectTo: 'cadastro-professor',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
