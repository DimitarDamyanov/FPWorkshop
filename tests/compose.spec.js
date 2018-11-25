import { formula, formula2, formula3, formula4 } from '../exercises/compose'

describe('compose module suite', () => {
    describe('(a + 5) * 2', () => {
        test('test with positive number', () => {
            expect(formula(5)).toBe(20);
        });

        test('test with negative number smaller than 5', () => {
            expect(formula(-2)).toBe(6);
        });

        test('test with negative number bigger than 5', () => {
            expect(formula(-7)).toBe(-4);
        });

        test('test with zero', () => {
            expect(formula(0)).toBe(10);
        });
    });

    describe('(a + b) * 2', () => {
        test('test with positive numbers', () => {
            expect(formula2(2, 5)).toBe(14);
        });

        test('test with negative numbers', () => {
            expect(formula2(-2, -5)).toBe(-14);
        });

        test('test with negative and positive numbers', () => {
            expect(formula2(-7, 10)).toBe(6);
        });

        test('test with zero and positive number', () => {
            expect(formula2(0, 5)).toBe(10);
        });
    });

    describe(' (a + b)  * c', () => {
        test('test with positive numbers', () => {
            expect(formula3(3, 2, 5)).toBe(21);
        });

        test('test with negative numbers', () => {
            expect(formula3(-2, -2, -5)).toBe(14);
        });

        test('test with negative and positive numbers', () => {
            expect(formula3(4, -7, 10)).toBe(12);
        });

        test('test with zero and positive number', () => {
            expect(formula3(4, 0, 5)).toBe(20);
        });
    });

    describe('((a + b) * c) / d', () => {
        test('test with positive numbers', () => {
            expect(formula4(2, 6, 4, 4)).toBe(8);
        });

        test('test with negative numbers', () => {
            expect(formula4(-3, -5, -2, -4)).toBe(-4);
        });

        test('test with negative and positive numbers', () => {
            expect(formula4(-7, 10, 4, 6 )).toBe(2);
        });

        test('test with zero and positive numbers', () => {
            expect(formula4(0, 6, 4, 3)).toBe(8);
        });
    });
});
