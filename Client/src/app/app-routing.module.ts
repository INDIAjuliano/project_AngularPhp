import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculComponent } from './components/calcul/calcul.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crud',
    pathMatch: 'full',
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then((m) => m.CrudModule),
  },
  {
    path: 'calcul',
    component: CalculComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
