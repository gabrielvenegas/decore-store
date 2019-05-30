import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Subject } from 'rxjs';
import { pipe } from '@angular/core/src/render3';
import { takeUntil } from 'rxjs/operators';
import { NewProductModal } from './new-product-modal/new-product-modal';
import { MatDialog } from '@angular/material';
import { AddPicsComponent } from './add-pics-modal/add-pics.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // Public variables
  products: any[];
  // Private variables
  private _destroyed$ = new Subject();

  constructor(private productService: ProductService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.getProducts();
  }

  getProducts() {
    this.productService.get()
      .pipe(takeUntil(this._destroyed$))
      .subscribe(res => this.products = res);
  }

  openDialog(component, size = '600px', data?: any): void {
    const dialogRef = this.dialog.open(component, {
      width: size,
      data: data ? data : null
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProducts();
    });
  }

  newProduct() {
    this.openDialog(NewProductModal, '1000px');
  }

  addPics(id: number) {
    this.openDialog(AddPicsComponent, '600px', id);
  }

  editProduct(product: any) {
    this.openDialog(NewProductModal, '600px', product);
  }

  disable(id: number) {
    this.productService.disable(id)
      .subscribe(res => {
        if (res.status) {
          this.getProducts();
        }
      })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._destroyed$.next();
    this._destroyed$.complete();
  }

}
