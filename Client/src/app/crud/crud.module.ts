import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatProductComponent } from '../components/creat-product/creat-product.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { ProductFormComponent } from '../components/product-form/product-form.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { CrudRoutingModule } from './crud-routing.module';
import { AgGridAngular } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    CreatProductComponent,
    ProductDetailsComponent,
    ProductFormComponent,
  ],

  imports: [
    CommonModule,
    CrudRoutingModule,
    AgGridAngular,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CrudModule {}
