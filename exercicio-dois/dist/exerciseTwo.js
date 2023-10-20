"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let lista = [
    { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
// a) Crie uma função que retorne a bio do id passado
// b) Crie uma função que retorne o name do id passado
// c) Crie uma função que apague um item da lista a partir de um id passado
// d) Crie uma função que altere a bio ou o name a partir de um id passado
// e) Demonstre todas as funções com o paradigma funcional e com o imperativo
const bioFunctional = (id) => {
    if (!(lista.find((person) => person.id === id))) {
        return "ID inválido!";
    }
    return lista.filter((person) => person.id === id)[0].bio;
};
console.log("------------CONSULTANDO A BIO VIA FUNÇÃO FUNCIONAL---------------");
console.log(bioFunctional(3));
const bioImperative = (id) => {
    const person = (lista.find((person) => person.id === id));
    if (!person) {
        return "ID inválido!";
    }
    const bio = person.bio;
    return bio;
};
console.log("------------CONSULTANDO A BIO VIA FUNÇÃO IMPERATIVA---------------");
console.log(bioImperative(2));
const nameFunctional = (id) => {
    if (!(lista.find((person) => person.id === id))) {
        return "ID inválido!";
    }
    return lista.filter((person) => person.id === id)[0].name;
};
console.log("------------CONSULTANDO O NOME VIA FUNÇÃO FUNCIONAL---------------");
console.log(nameFunctional(2));
const nameImperative = (id) => {
    const person = (lista.find((person) => person.id === id));
    if (!person) {
        return "ID inválido!";
    }
    const name = person.name;
    return name;
};
console.log("------------CONSULTANDO O NOME VIA FUNÇÃO IMPERATIVA---------------");
console.log(nameImperative(2));
const deleteItemFunctional = (id) => {
    lista = lista.filter((person) => person.id !== id);
};
console.log("------------DELETANDO UM ITEM VIA FUNÇÃO FUNCIONAL---------------");
deleteItemFunctional(1);
console.log(lista);
const deleteItemImperative = (id) => {
    const newList = lista.filter((person) => person.id !== id);
    lista = newList;
};
console.log("------------DELETANDO UM ITEM VIA FUNÇÃO IMPERATIVA---------------");
deleteItemImperative(2);
console.log(lista);
const changeNameOrBioFunctional = (id, key, value) => {
    if (!(lista.find((person) => person.id === id))) {
        return "ID inválido!";
    }
    if (key === "name")
        lista.filter((person) => person.id === id)[0].name = value;
    else
        lista.filter((person) => person.id === id)[0].bio = value;
};
console.log("------------ALTERANDO O NOME DE UM ITEM VIA FUNÇÃO FUNCIONAL---------------");
console.log(changeNameOrBioFunctional(3, "name", "Marie Curie"));
console.log(lista);
console.log("------------ALTERANDO O BIO DE UM ITEM VIA FUNÇÃO FUNCIONAL---------------");
changeNameOrBioFunctional(3, "bio", "Marie Skłodowska-Curie, nascida Maria Salomea Skłodowska, foi uma física e química polonesa naturalizada francesa, que conduziu pesquisas pioneiras sobre radioatividade.");
console.log(lista);
const changeNameOrBioImperative = (id, key, value) => {
    const newValue = value;
    const keyToAccess = key;
    const person = (lista.find((person) => person.id === id));
    if (!person) {
        return "ID inválido!";
    }
    const personToChangeValue = person;
    if (keyToAccess === "name") {
        personToChangeValue.name = newValue;
    }
    else {
        personToChangeValue.bio = newValue;
    }
};
console.log("------------ALTERANDO O NOME DE UM ITEM VIA FUNÇÃO IMPERATIVA---------------");
changeNameOrBioImperative(4, "name", "Albert Einstein");
console.log(lista);
console.log("------------ALTERANDO O BIO DE UM ITEM VIA FUNÇÃO IMPERATIVA---------------");
changeNameOrBioImperative(4, "bio", "Albert Einstein foi um físico teórico alemão, que desenvolveu a teoria da relatividade geral, um dos pilares da física moderna ao lado da mecânica quântica. ");
console.log(lista);
