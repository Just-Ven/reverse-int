module.exports = function reverse (n) {
    if (n > 0) {
        const str = String(n)
        const arr = Array.from(str)
        arr.reverse()
        const num = arr.join('')
        return +num
    }
    else {
        const str = String(n)
        const arr = Array.from(str)
        arr.reverse().pop()
        const num = arr.join('')
        return +num
    }
}
