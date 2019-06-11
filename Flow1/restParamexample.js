function f (x, y, ...rest) {
    return (x + y) * rest.length
}
f(1, 2, "hello", true, 7) === 9
