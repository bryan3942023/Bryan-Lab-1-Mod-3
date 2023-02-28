import { Calculadora } from "../src/calculadora";
//const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
//expect(sum(1, 2)).toBe(3);
//expect(1+2).toBe(3);
const calc = new Calculadora();
//actual
const actual = calc.sumNumber (1,2);
//expected
const expc = 3;
expect(actual).toBe(expc);
});

test('adds 1 - 2 to equal -1', () => {
//TDD
   // const resNumb=jest.fn((a:number,b:number,)=>-1);
   const calc = new Calculadora();
//actual
    //const actual = resNumb(1,2);
    const actual = calc.resNumb(1,2);
//expected
    const expc = -1;
   
    expect(actual).toBe(expc);
    //expect(actual).toBeTruthy();
    });