import { Component, Inject, OnInit, OnDestroy } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { ProductService } from "../product.service";

@Component({
    selector: 'new-product-modal',
    templateUrl: 'new-product-modal.html',
})
export class NewProductModal implements OnInit, OnDestroy {

    // Public variables
    product = {
        name: '',
        price: 0,
        discountPrice: 0,
        type: "0",
        height: 0,
        width: 0,
        diameter: 0,
        weight: 0,
        length: 0,
        cover: 0,
        amount: 0,
        colors: [],
        description: "",
        category: {
            id: 0,
            name: ""
        }
    };
    categories: any[]
    colors: any[];
    title = 'Novo Produto';
    buttonText = 'CRIAR';
    // Private variables
    private _destroyed$ = new Subject();
    constructor(
        public dialogRef: MatDialogRef<NewProductModal>,
        private productService: ProductService,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit(): void {
        this.getCategories();
        this.getColors();
        if (this.data) {
            this.product = this.data;
            this.title = `Editar ${this.product.name}`;
            this.buttonText = 'ATUALIZAR';
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    create() {
        this.productService.create(this.product)
            .pipe(takeUntil(this._destroyed$))
            .subscribe(res => {
                if (res) {
                    this.dialogRef.close();
                }
            })
    }

    getCategories() {
        this.productService.getCategories()
            .pipe(takeUntil(this._destroyed$))
            .subscribe((res) => {
                this.categories = res[0];
            })
    }

    getColors() {
        this.productService.getColors()
            .pipe(takeUntil(this._destroyed$))
            .subscribe((res) => {
                this.colors = res;

            })
    }

    addColors(event: { source: { value: any; }; }) {
        this.product.colors.push(event.source.value);
    }

    ngOnDestroy(): void {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    compareObjects(o1: any, o2: any): boolean {
        return o1 === o2;
    }

    changeCategory(event) {
        this.product.category.id = event;
    }
}