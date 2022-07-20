const mariana = {
    nome: "Mariana",
    idade: 28,
    profissao: "desenvolvedora"
}

mariana.idade = 29

const andre : {nome: string, idade: number, profissao: string} = {
    nome: "Andre",
    idade: 25,
    profissao: "pintor"
}

const paula : {nome: string, idade: number, profissao: string} = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora"
}

enum Profissao {
    professora,
    atriz,
    desenvolvedora,
    jogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: "Vanessa",
    idade: 25,
    profissao: Profissao.desenvolvedora
}

const maria: Pessoa = {
    nome: "Maria",
    idade: 26,
    profissao: Profissao.desenvolvedora
}

const jessica: Estudante = {
    nome: "Jessica",
    idade: 15,
    materias: ["Fisiologia", "Programação", "Quimica"]
}


function listar(lista: string[]) {
    for (const item of lista) {
        console.log("- ", item);
    }
}

listar(jessica.materias);