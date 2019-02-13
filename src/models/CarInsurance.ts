import {Product} from "./Product";

export class CarInsurance {
    constructor(public _products : Product[]) {

    }

    get products(): Product[] {
        return this._products;
    }

    set products(value: Product[]) {
        this._products = value;
    }
}

