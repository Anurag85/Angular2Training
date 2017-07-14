import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { CartItemsComponent } from './cart-items.component';

@NgModule({
    declarations:[
        ProductListComponent,
        CartItemsComponent
    ],
    exports: [ProductListComponent, CartItemsComponent],
    imports: [CommonModule, FormsModule]
})

export class ShoppingModule {

}