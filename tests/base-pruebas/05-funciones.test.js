import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones.js';

describe('Pruebas en 05-funciones', () => {
    test('Debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        // toEqual evalua los objetos, por el valor por referencia en que se pasan los objetos
        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name = 'Fernando';
        const testUserActive = {
            uid: 'ABC567',
            username: name
        }
        const userActive = getUsuarioActivo(name);
        expect(testUserActive).toStrictEqual(userActive);
    });
});