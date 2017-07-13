import { Component } from '@angular/core';
import { CartItem } from '../models/cartitem.model';
import { CartService } from '../services/cart.service';

@Component ({
    selector: 'cart-items',
    templateUrl: './cart-items.component.html'
})

export class CartItemsComponent {
    cartItems:CartItem[] = [];
    constructor(private cs:CartService) {
        // let cs:CartService = new CartService();
        this.cartItems = cs.getCartItems();

    }

    cancelItem(idx){
        this.cs.deleteCartItem(idx);
    }

    totalAmount(){
        let tot:number = 0;
        for (let e of this.cartItems) {
           tot += (e.price * e.qty);
        }
        return tot;
    }
}