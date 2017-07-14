import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Product } from '../models/product.model';

@Injectable()

export class ProductService{
    private productsData:Product[] = [];

    restUrl = "http://localhost:2403/wsproducts";
    myHeaders = new Headers({
        'Content-Type':'application/json'
    });
    myOptions = new RequestOptions({
        headers:this.myHeaders
    });

    constructor(private http:Http){
        /*this.productsData = [
            new Product(1, 'Nokia 3', 6000, "Nokia Smart Phone"),
            new Product(2, 'Hitachi AC', 35000, "Hitachi Window AC"),
            new Product(3, 'Sony TV', 55000, "Sony Android TV"),
            new Product(4, 'iPhone 7', 76000, "Apple Smart Phone"),
            new Product(5, 'iPad Pro', 90000, "Apple Smart Tablet")
        ];*/
    }

    getProducts() {
        // return this.productsData; 
        return this.http.get(this.restUrl);
    }

    addProduct(newProduct:Product) {
        return this.http.post(this.restUrl, newProduct, this.myOptions);
    }

    deleteProduct(prdId:string){
        return this.http.delete(this.restUrl+'/'+prdId, this.myOptions);
    }
}