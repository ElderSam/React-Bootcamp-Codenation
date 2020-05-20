const calculadora = require('./calc');

describe("calculadora", () => {
    it('teste exemplo', () => {
        const numero1 = 23
        const numero2 = 7
        expect(23 + 7).toBe(30); //vai passar
        //expect(23 + 7).toBe(31); //vai falhar
        expect(23 + 7).not.toBe(31); //vai passar
    });

    describe('soma', () => {
        it('retorna 3 quando 2 somado com 1', () => {
            const num1 = 2
            const num2 = 1
            expect(calculadora.soma(num1, num2)).toBe(3)
        });
       
    });

    describe('subtracao', () => {
        it('retorna 1 quando 2 subtraído de 3', () => {
            const num1 = 3;
            const num2 = 2;
            expect(calculadora.subtracao(num1, num2)).toBe(1)
        });
    });

    describe('multiplicacao', () => {
        it('retorna 6 quando 3 multiplicado por 2', () => {
            const num1 = 3;
            const num2 = 2;
            expect(calculadora.multiplicacao(num1, num2)).toBe(6);
        });
    });

    describe('divisao', () => {
        it('retorna 2 quando 6 dividido por 3', () => {
            const num1 = 6;
            const num2 = 3;
            expect(calculadora.divisao(num1, num2)).toBe(2)
        });
    });

    describe('divisao', () => {
        it('retorna ERRO quando dividido por 0', () => {
            const num1 = 6;
            const num2 = 0;
            expect(calculadora.divisao(num1, num2)).toBe("Erro, não pode dividir por 0")
        });
    });
});