const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

//-------questão a)

resultadoA = numeros.sort(function (primeiro, segundo) {
    return primeiro - segundo
})

console.log(resultadoA)

//-------questão b)

resultadoB = numeros.sort(function (primeiro, segundo) {
    return segundo - primeiro
})

console.log(resultadoB)

//-------questão c)

resultadoC = numeros.sort()

console.log(resultadoC)

//-------questão d)

resultadoD = frutas.sort(function (primeiro, segundo) {
    return primeiro.localeCompare(segundo)
})

console.log(resultadoD)

//-------questão e)

resultadoE = frutas.sort(function(primeiro, segundo){
    return segundo.localeCompare(primeiro)
})

console.log(resultadoE)

//-------questão f)

resultadoF = frutas.sort(function(primeiro, segundo){
    return primeiro.length - segundo.length
})

console.log(resultadoF)