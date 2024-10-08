import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private httpClient$: HttpClient) {}
  loadProducts() {
    const url = environment.API_EndPoint + 'view.php';
    return this.httpClient$.get(url).pipe(map((data) => data));
  }
}
