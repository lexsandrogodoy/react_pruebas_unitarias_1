describe('Prueba en <DemoComponent/>', () => { 
    test('Esta prueba no debe fallar', () => {
        // if(0===0){
        //     throw new Error('No se puede dividir por 0');
        // }
        
        //1. Inicialización
        const message1 = 'Hola mundo';
    
        //2. Estímulo
        const message2 = message1.trim();
    
        //3. Observar cmportamiento..esperado
        expect(message1).toBe(message2);
    });
})

