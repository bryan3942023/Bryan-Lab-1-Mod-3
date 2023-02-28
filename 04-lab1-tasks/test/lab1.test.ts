import { Lab1 } from "../src/lab1";

test('validate if a text is palindrome', () => {
    //TDD
      //  const resNumb=jest.fn((a:string)=> a.split('').reverse().join(''));
       const pal = new Lab1();
    //actual
    //const actual = pal.palindrome('ANA LAVA LANA');
   const actual = pal.palindrome('Lavan esa base naval');

    //expected
        //const expc = true;
       
        expect(actual).toBeTruthy();
        
        });


test('returns the highest number ', () => {
//TDD
    const pal = new Lab1();
//actual
const arrayN= [2, 88, 65, 17, 95, 39];
const actual = pal.highestNumber(arrayN);

//expected
    const expc = 95;
    
    expect(actual).toBe(expc);
    
    });



    test('returns an Array of strings with input string', () => {
        //TDD
            const pal = new Lab1();
        //actual
        const txt= 'Hello';
        //const txt= 'Hola';
        const actual = pal.arrayString(txt);
   
        
        //expected
            const expc = ['H', 'e', 'l', 'l', 'o'];
           // const expc = ['H', 'o', 'l', 'a'];
            
            //expect(actual).toBe(expc);
            expect(actual).toStrictEqual(expc);
            
            });