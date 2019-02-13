import {Product} from "../models/Product";

export function updatePrice(product: Product) {

    if (product.name != 'Full Coverage' && product.name != 'Special Full Coverage') {
        if (product.price > 0) {
            if (product.name != 'Mega Coverage') {
                product.price = product.price - 1;
            }
        }
    } else {
        if (product.price < 50) {
            product.price = product.price + 1;
            if (product.name == 'Special Full Coverage') {
                if (product.sellIn < 11) {
                    if (product.price < 50) {
                        product.price = product.price + 1;
                    }
                }
                if (product.sellIn < 6) {
                    if (product.price < 50) {
                        product.price = product.price + 1;
                    }
                }
            }
        }
    }
    if (product.name != 'Mega Coverage') {
        product.sellIn = product.sellIn - 1;
    }
    if (product.sellIn < 0) {
        if (product.name != 'Full Coverage') {
            if (product.name != 'Special Full Coverage') {
                if (product.price > 0) {
                    if (product.name != 'Mega Coverage') {
                        product.price = product.price - 1;
                    }
                }
            } else {
                product.price = product.price - product.price;
            }
        } else {
            if (product.price < 50) {
                product.price = product.price + 1;
            }
        }
    }


    return product;
}

export  function productPrinter(product: Product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};
