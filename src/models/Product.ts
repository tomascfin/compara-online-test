export class Product {

    constructor(public _name: string, public _sellIn: number, public _price: number) {
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get sellIn(): number {
        return this._sellIn;
    }

    set sellIn(value: number) {
        this._sellIn = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}