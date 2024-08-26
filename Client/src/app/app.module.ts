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
import { CalculComponent } from './components/calcul/calcul.component';
import { CrudModule } from './crud/crud.module';

@NgModule({
  declarations: [
    AppComponent,
    AdditonsComponent,
    ListComponent,
    CalculComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatDividerModule, // component that allows for Material styling of a line separator with various orientation options.
    MatButtonModule,
    MatListModule,
    CrudModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
