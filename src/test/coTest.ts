import { expect } from 'chai';
import * as CarInsuranceController from '../controllers/CarInsurance';
import {CarInsurance} from "../models/CarInsurance";
import {Product} from "../models/Product";

describe("Co Test", function() {

    it("should foo", function() {
        const carInsurance = new CarInsurance([ new Product("foo", 0, 0) ]);
        const product = CarInsuranceController.updatePrice(carInsurance.products[0]);
        expect(product.name).equal("fixme");
    });

});