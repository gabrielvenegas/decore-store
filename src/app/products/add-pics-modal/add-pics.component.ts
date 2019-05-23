import { Component, Inject, AfterViewInit, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { ProductService } from "../product.service";

@Component({
    selector: 'add-pics',
    templateUrl: 'add-pics.component.html',
})
export class AddPicsComponent implements OnInit {

    afuConfig = {
        multiple: false,
        formatsAllowed: ".jpg,.png",
        maxSize: "3",
        uploadAPI: {},
        theme: "dragNDrop",
        hideProgressBar: false,
        hideResetBtn: false,
        hideSelectBtn: false,
        replaceTexts: {
            selectFileBtn: 'Selecione',
            uploadBtn: 'Salvar',
            resetBtn: 'Resetar',
            dragNDropBox: 'Arraste e solte',
            attachPinBtn: 'Attach Files...',
            afterUploadMsg_success: 'Carregamento realizado com sucesso!',
            afterUploadMsg_error: 'O carregamento falhou!'
        }
    };

    product = {};
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private productService: ProductService) {
        this.afuConfig.uploadAPI = {
            url: `http://localhost:3000/api/product/images?idProduct=${data}`
        }
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getProduct();
    }

    getProduct() {
        this.productService.getOne(this.data)
            .subscribe(res => this.product = res);
    }
}