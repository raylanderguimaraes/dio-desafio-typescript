// Como podemos melhorar o esse código usando TS? 


interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao

}

enum Profissao {
    Atriz,
    Pedreiro,
    
}


let pessoa1 = {
    nome: "Maria",
    idade: 35,
    profissao: Profissao.Pedreiro 
}


let pessoa2 = {
    nome: "Roberto",
    idade: 22,
    profissao: Profissao.Pedreiro
}


let pessoa3 : Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4 : Pessoa = {
    nome : "Carlos",
    idade : 19,
    profissao : Profissao.Pedreiro
}

