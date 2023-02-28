import { Lab1 } from "../src/lab1";

test('validate if a text is palindrome', () => {
    //TDD
      //  const resNumb=jest.fn((a:string)=> a.split('').reverse().join(''));
       const pal = new Lab1();
    //actual
    const actual = pal.palindrome('ANA LAVA LANA');
    //const actual = resNumb(1,2);
        //const actual = calc.resNumb(1,2);

    //expected
        const expc = true;
       
        expect(actual).toBe(expc);
        
        });


test('returns the highest number ', () => {
//TDD
    //  const resNumb=jest.fn((a:string)=> a.split('').reverse().join(''));
    const pal = new Lab1();
//actual
const arrayN= [2, 88, 65, 17, 95, 39]
const actual = pal.highestNumber(arrayN);
//const actual = resNumb(1,2);
    //const actual = calc.resNumb(1,2);

//expected
    const expc = 95;
    
    expect(actual).toBe(expc);
    
    });