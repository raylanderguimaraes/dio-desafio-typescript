const funcionario = {codigo: 10, nome: "Jhon"};
funcionario.codigo = 10;
funcionario.nome = "John";

interface Funcionario {
    codigo: number,
    nome: string,

}



const funcionario2 : Funcionario = {
    codigo: 25,
    nome: "Pablo"

}

const funcionario3 : {codigo: number, nome: string} = {
    codigo: 300,
    nome: "José"
}

console.log(funcionario2)
console.log(funcionario3)
