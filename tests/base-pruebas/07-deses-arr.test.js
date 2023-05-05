import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr.js';

describe('Prueba en 07-arreglos', () => {
    test('Debe retornar un string y un número', () => {
        const [letters, numbers] = retornaArreglo();
        //console.log(arreglo);
        //expect([letters, numbers]).toEqual(['ABC', 123]);
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
        
        expect(typeof letters).toBe('string');                 
        expect(typeof numbers).toBe('number');             
    });
});