function isLetter(char) {
    return /[a-zA-Z]/.test(char)
}

function caesarCipher(str, shift) {
    const strLowerCase = str.toLowerCase()
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let newStr = ''

    for (let i = 0; i < str.length; i++) {
        if (isLetter(str[i])) {
            const letterIndex = alphabet.indexOf(strLowerCase[i])
            let newIndex = letterIndex + shift

            if (newIndex > 25) newIndex -= 26
            if (newIndex < 0) newIndex += 26
            if (str[i] === str[i].toUpperCase()) {
                newStr += alphabet[newIndex].toUpperCase()
            } else newStr += alphabet[newIndex]
        } else {
            newStr += str[i]
        }
    }
    return newStr
}

export default caesarCipher
// ESLint makes me refactor the i++ to i += i in the for loop
// and in that same time Jest doesn't work well with i += i
// so that was interesting to debug ....
