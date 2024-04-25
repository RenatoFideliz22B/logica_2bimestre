const input = require("prompt-sync")()

const numero1 = Number(input("Digite o codigo da peça 1: "))
const numero2 = Number(input("Digite o numero de peças 1: "))
const numero3 = Number(input("Digite o valor unitario da peça 1: "))
const numero4 = Number(input("Digite o codigo de peça 2: "))
const numero5 = Number(input("Digite o numero de peças 2: "))
const numero6 = Number(input("Digite o valor unitario da peça 2: "))

const total = (numero2 * numero3) + (numero5 * numero6)

 console.log(total)