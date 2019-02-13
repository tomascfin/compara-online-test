import {Product} from "../models/Product";

export function updatePrice(product: Product) {

    if (product.name == 'Full Coverage') {

        if (product.sellIn < 0) {
            if (product.price - 2> 0) {
                product.price -= 2;
            }
        } else {
            if (product.price < 50) {
                product.price += 1;
            }
            product.sellIn -= 1;
        }
    }

    if (product.name == 'Special Full Coverage') {

        if (product.price < 50) {
            product.price = product.price + 1;
        }

        if (product.sellIn <= 5) {
            if (product.price + 3 <= 50) {
                product.price += 3;
            }
        } else if (product.sellIn <= 10) {
            if (product.price + 2 <= 50) {
                product.price += 2;
            }
        }

        product.sellIn -= 1;
    }

    if (product.name == 'Super Sale') {
        if (product.price > 0) {
            product.price -= 2;
        }
        product.sellIn -= 1;
    }

    return product;
}

export function productPrinter(product: Product): void {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
}
