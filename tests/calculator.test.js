import { add, sub, divide, multiply } from '../scripts/calculator'

test('Addition', () => {
    expect(add(213, 912)).toEqual(1125)
})

test('Subtraction', () => {
    expect(sub(1000, 500)).toBe(500)
})

test('Division', () => {
    expect(divide(10, 2)).toEqual(5)
})

test('Multiplication', () => {
    expect(multiply(5, 5)).toBe(25)
})
