import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartitem.model';

@Injectable()

export class CartService {
    private cartItemsData:CartItem[] = [];

    addCartItem(newItem:CartItem){
        let isProductAlreadyAvailableInCart:boolean = false; 
        for (let i = 0; i < this.cartItemsData.length; i++) {
            let cItem = this.cartItemsData[i];
            if(cItem.name == newItem.name)
            {
                isProductAlreadyAvailableInCart = true;
                cItem.qty++;
                break;
            }
        }
        if(!isProductAlreadyAvailableInCart) {
            this.cartItemsData.push(newItem);
        }
    }

    deleteCartItem(idx:number){
        this.cartItemsData.splice(idx, 1);
    }

    getCartItems(){
        return this.cartItemsData;
    }
}