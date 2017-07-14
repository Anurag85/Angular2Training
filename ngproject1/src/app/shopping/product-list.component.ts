import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cartitem.model';

@Component ({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    products:Product[] = [];

    constructor(private ps:ProductService, private cs:CartService){
        // let ps:ProductService = new ProductService();
        // this.products = ps.getProducts();
        ps.getProducts().subscribe(
            (successResponse) => this.products = successResponse.json(),
            (errorResponse) => console.log("Get error -- ",errorResponse)
        )
    }

    addToCart(selectedProduct:Product){
        this.cs.addCartItem(new CartItem(selectedProduct.name, selectedProduct.price, 1));
    }
}