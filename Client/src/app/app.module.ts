import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AdditonsComponent } from './components/additons/additons.component';
import { ListComponent } from './components/list/list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreatProductComponent } from './components/creat-product/creat-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [AppComponent, AdditonsComponent, ListComponent, ProductListComponent, CreatProductComponent, ProductDetailsComponent, ProductFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatDividerModule, // component that allows for Material styling of a line separator with various orientation options.
    MatButtonModule,
    MatListModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
