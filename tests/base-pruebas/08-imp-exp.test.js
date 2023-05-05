import {getHeroeById, getHeroesByOwner} from '../../src/base-pruebas/08-imp-exp.js';
import heroes from '../../src/data/heroes.js';

describe('Verificar 08-imp-exp de heroes', ()=>{
    test('Buscar heroe por id', ()=>{
        const id = 2;
        const heroReturn = getHeroeById(id);
        expect(heroReturn).toEqual({
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        });
    });

    test('Evaluar undefined', ()=>{
        const id = 10;
        const heroReturn = getHeroeById(id);
        expect(heroReturn).toBeFalsy();
    });

    test('Obtener heroes por compañia DC', ()=>{
        const owner = 'DC';
        const herosReturn = getHeroesByOwner(owner);
        expect(herosReturn).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC'},
            { id: 4, name: 'Flash', owner: 'DC'}
        ]);
        expect(herosReturn).toEqual(heroes.filter((heroe) => heroe.owner === owner));
        expect(herosReturn.length).toBe(3);
    });

    test('Obtener heroes por compañia Marvel', ()=>{
        const owner = 'Marvel';
        const herosReturn = getHeroesByOwner(owner);
        expect(herosReturn).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel'},
            { id: 5, name: 'Wolverine', owner: 'Marvel'}
        ]);
        expect(herosReturn).toEqual(heroes.filter((heroe) => heroe.owner === owner));
        expect(herosReturn.length).toBe(2);
    });
});