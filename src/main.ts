import {Product} from "./models/Product";
import {CarInsurance} from "./models/CarInsurance";
import * as CarInsuranceController from './controllers/CarInsurance';

const productsAtDayZero = [
    new Product('Medium Coverage', 10, 20),
    new Product('Full Coverage', 2, 0),
    new Product('Low Coverage', 5, 7),
    new Product('Mega Coverage', 0, 80),
    new Product('Mega Coverage', -1, 80),
    new Product('Special Full Coverage', 15, 20),
    new Product('Special Full Coverage', 10, 49),
    new Product('Special Full Coverage', 5, 49),
    new Product('Super Sale', 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);



for (let i = 1; i <= 30; i += 1) {
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');
    carInsurance.products.forEach(product => CarInsuranceController.productPrinter(CarInsuranceController.updatePrice(product)));
    console.log('');
}