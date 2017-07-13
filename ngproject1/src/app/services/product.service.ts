import { Product } from '../models/product.model';

export class ProductService{
    private productsData:Product[];

    constructor(){
        this.productsData = [
            new Product(1, 'Nokia 3', 6000, "Nokia Smart Phone"),
            new Product(2, 'Hitachi AC', 35000, "Hitachi Window AC"),
            new Product(3, 'Sony TV', 55000, "Sony Android TV"),
            new Product(4, 'iPhone 7', 76000, "Apple Smart Phone"),
            new Product(5, 'iPad Pro', 90000, "Apple Smart Tablet")
        ];
    }

    getProducts() {
        return this.productsData;
    }
}