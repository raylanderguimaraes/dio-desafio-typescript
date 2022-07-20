"use strict";
const mariana = {
    nome: "Mariana",
    idade: 28,
    profissao: "desenvolvedora"
};
mariana.idade = 29;
const andre = {
    nome: "Andre",
    idade: 25,
    profissao: "pintor"
};
const paula = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["professora"] = 0] = "professora";
    Profissao[Profissao["atriz"] = 1] = "atriz";
    Profissao[Profissao["desenvolvedora"] = 2] = "desenvolvedora";
    Profissao[Profissao["jogadoraDeFutebol"] = 3] = "jogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 25,
    profissao: Profissao.desenvolvedora
};
const maria = {
    nome: "Maria",
    idade: 26,
    profissao: Profissao.desenvolvedora
};
const jessica = {
    nome: "Jessica",
    idade: 15,
    materias: ["Fisiologia", "Programação", "Quimica"]
};
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(jessica.materias);
