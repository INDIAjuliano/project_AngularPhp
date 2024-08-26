import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
/* Core Data Grid CSS */
import 'ag-grid-community/styles/ag-grid.css';
/* Quartz Theme Specific CSS */
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  productList: any = [];
  productListSubscirbe: any;
  rowData: any = [];
  gridOptions = {
    rowHeight: 50,
  };

  constructor(
    private crudService$: CrudService,
    private routerService$: Router
  ) {}
  ngOnInit(): void {
    this.getProductList();
    console.log('res', this.getProductList());
  }
  // Row Data: The data to be displayed.
  // rowData = [
  //   { Name: 'Tesla', model: 'Model Y', price: 64950, electric: true },
  //   { Name: 'Ford', model: 'F-Series', price: 33850, electric: false },
  //   { Name: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  // ];
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    {
      field: 'p_name',
      headerName: 'Product Name',
      sortable: true,
      headerClass: 'header-cell',
    },
    {
      field: 'p_description',
      headerName: 'Descriptions',
      sortable: true,
      headerClass: 'header-cell',
    },
    {
      field: 'p_price',
      headerName: 'Price',
      sortable: true,
      headerClass: 'header-cell',
    },
    {
      field: '',
      headerName: 'Options',
      sortable: true,
      width: 250,
      headerClass: 'header-cell',
      cellRenderer: this.actionRender.bind(this),
    },
  ];

  getProductList() {
    this.productListSubscirbe = this.crudService$
      .loadProducts()
      .subscribe((res) => {
        this.productList = res;
        console.log('res:', res);
        this.rowData = res;
      });
  }

  actionRender(params: any) {
    let div = document.createElement('div');
    let htmlCode =
      '<button type="button" class="btn btn-success">View</button>\n' +
      '<button type="button" class="btn btn-danger">Delete</button>\n' +
      '<button type="button" class="btn btn-warning">Edit</button>\n';
    div.innerHTML = htmlCode;
    // handle view button
    let viewButton = div.querySelector('.btn-success');
    viewButton?.addEventListener('click', () => {
      this.viewProductDetails(params);
    });
    // handle edit button
    let editButton = div.querySelector('.btn-warning');
    editButton?.addEventListener('click', () => {
      this.editProductDetails(params);
    });
    // handle delet button
    let deleteButton = div.querySelector('.btn-danger');
    deleteButton?.addEventListener('click', () => {
      this.deletPoduct(params);
    });
    return div;
  }

  viewProductDetails(params: any) {
    // console.log('param', params);
    this.routerService$.navigate([
      '/crud/view-product-details/' + params.data.p_id,
    ]);
  }

  editProductDetails(params: any) {
    this.routerService$.navigate(['/crud/update-product/' + params.data.p_id]);
  }

  deletPoduct(params: any) {
    //Will  see later
    console.log('Supprimer');
  }
}
