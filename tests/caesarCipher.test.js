import caesarCipher from '../scripts/caesarCipher'

test('caesar cipher', () => {
    expect(caesarCipher('bitcoin', 1)).toBe('cjudpjo')
})

test('from z to a', () => {
    expect(caesarCipher('z', 1)).toBe('a')
})

test('same case', () => {
    expect(caesarCipher('StAnImiR', 1)).toBe('TuBoJnjS')
})

test('Punctuation and empty space', () => {
    expect(caesarCipher('React is coming!!!', 1)).toBe('Sfbdu jt dpnjoh!!!')
})

test('Higher shift ', () => {
    expect(caesarCipher('Higher shift', 10)).toBe('Rsqrob crspd')
})
