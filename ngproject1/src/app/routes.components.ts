import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';

@Component({
    template: `<h3>Welcome To Shopping
        <br>Price value is {{price | currency:'INR' | lowercase}}
        <br> {{myDate | date : "dd/MM/yyyy"}}
        <br> Product name is {{productName | uppercase | reverseText}}
    </h3>`
})
export class HomeComponent{
    price:number = 110.1274;
    myDate = new Date();
    productName = "Sony tv";
}

@Component ({
    template: `<div class="col-xs-6">
        <product-list></product-list>
    </div>
    <div class="col-xs-6 well">
        <cart-items></cart-items>
    </div>`
})
export class ListComponent{}

@Component ({
    template: "<h3 class='well'>404 - Page Not Found.</h3>"
})
export class NotFoundComponent{}

@Component({
    templateUrl: "./manage.component.html"
})
export class ManageComponent{
    mgProducts:Product[] = [];
    frmProduct:Product = new Product("","",0,"");
    temp = -1;

    constructor(private psvc:ProductService){
        // this.mgProducts = psvc.getProducts();
        psvc.getProducts().subscribe(
            (successResponse) => this.mgProducts = successResponse.json(),
            (errorResponse) => console.log("Get error -- ",errorResponse)
        )
    }

    save(){
        this.psvc.addProduct(this.frmProduct).subscribe(
            (successResponse) => {
                // console.log(this.frmProduct.id);
                // if(this.frmProduct.id == ""){
                if(this.temp == -1){
                    this.mgProducts.push(successResponse.json());
                }
                else {
                    this.mgProducts[this.temp] = successResponse.json();
                    this.temp = -1;
                }
            },
            (errorResponse) => console.log("Save failed -- ",errorResponse)
        )
        this.frmProduct = new Product("","",0,"");
    }

    delete(productId, idx){
        this.psvc.deleteProduct(productId).subscribe(
            (successResponse) => this.mgProducts.splice(idx,1),
            (errorResponse) => console.log("Delete failed -- ",errorResponse)
        )
    }

    edit(selectedProduct:Product, idx){
        // this.frmProduct = selectedProduct;
        this.temp = idx;
        Object.assign(this.frmProduct, selectedProduct);
    }
}