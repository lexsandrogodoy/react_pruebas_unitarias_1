import { usContext } from '../../src/base-pruebas/06-deses-obj.js';

describe('Pruebas en 06-deses', () => {
    test('usContext debe de retornar un objeto', () => {
        const infoClave = "lex";
        const infoNombre = "lexsandro";
        const infoEdad = 33;
        const infoRango = "soldado";
        const data = {
            clave: infoClave,
            nombre: infoNombre,
            edad: infoEdad,
            rango: infoRango,
        }
        const info = usContext(data);
        //console.log(info);

        expect(info).toStrictEqual(
            {
                nombreClave: infoClave,
                anios: infoEdad,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
            }
        );
    });
});