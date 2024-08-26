import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductFormComponent } from '../components/product-form/product-form.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'creat-product', component: ProductFormComponent },
  { path: 'update-product/:productId', component: ProductFormComponent },
  { path: 'View-product-details/:productId', component: ProductFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
