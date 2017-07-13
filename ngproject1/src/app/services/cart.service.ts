import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartitem.model';

@Injectable()

export class CartService {
    private cartItemsData:CartItem[] = [];

    addCartItem(newItem:CartItem){
        this.cartItemsData.push(newItem);
    }

    deleteCartItem(idx:number){
        this.cartItemsData.splice(idx, 1);
    }

    getCartItems(){
        return this.cartItemsData;
    }
}