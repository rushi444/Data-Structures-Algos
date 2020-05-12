// // TripleByte Practice

// // What is the Value of g?
// const f = n => n <= 1 ? 1 : n * f(n - 1)

// let g = f(4)

// console.log(g)

// function foo() {
//     function bar(){
//         setTimeout(
//             () => console.log('curly'), 1000
//         )
//     }
//     console.log('larry')
//     return bar
// }

// let x = foo()
// x()

// console.log('moe')

// function makeAdder(x){

// }

// var add5 = makeAdder(5)
// var add8 = makeAdder(8)
// var add20 = makeAdder(20)

// asserts(add)

// function f(x){
//     x *= 2
//     return function(y){
//         y *= x
//         return function(z){
//             return z * y
//         }
//     }
// }

// let g = f(3)(4)(5)

// console.log(g)
// function f(x){
//     console.log(x)
// }


// f('foo')
// setTimeout(function (){
//     f('bar')
// },0)
// f('baz')

const add = (a, b, c) => {
    return a + b + c
}

console.log(add(5))