"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input = document.querySelector("#vowelCounterInput");
const button = document.querySelector("#button");
const result = document.querySelector("#result");
const checkingVowel = (vowel) => {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(vowel);
};
const vowelCounter = (vowelsWord) => {
    const word = String(vowelsWord);
    const vowels = word.toLowerCase().split("").filter(checkingVowel);
    return String(vowels.length);
};
button.addEventListener("click", () => {
    const htmlVowelCounter = vowelCounter(input.value);
    result.textContent = `${input.value} contém ${htmlVowelCounter} vogais!`;
    input.value = "";
});
let lista = [
    { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
const table = document.querySelector("#tabela");
const getBioOrNameButton = document.querySelector("#button-getBioOrName");
const removeItemButton = document.querySelector("#removeItemButton");
const changeBioOrNamebutton = document.querySelector("#buttonChangeBioOrName");
const bioFunctional = (id) => {
    if (lista.filter((person) => person.id == id)[0] == undefined) {
        return "ID inválido!";
    }
    return lista.filter((person) => person.id == id)[0].bio;
};
const bioImperative = (id) => {
    let person;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            person = lista[i];
        }
    }
    if (!person) {
        return undefined;
    }
    const bio = person.bio;
    return bio;
};
const nameFunctional = (id) => {
    if (lista.filter((person) => person.id == id).length == 0) {
        return "ID inválido!";
    }
    return lista.filter((person) => person.id == id)[0].name;
};
const nameImperative = (id) => {
    let person;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            person = lista[i];
        }
    }
    if (!person) {
        return undefined;
    }
    const name = person.name;
    return name;
};
const deleteItemFunctional = (id) => {
    lista = lista.filter((person) => person.id !== id);
};
const deleteItemImperative = (id) => {
    let newList = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id !== id) {
            newList.push(lista[i]);
        }
    }
    lista = newList;
};
const changeNameOrBioFunctional = (id, key, value) => {
    if (lista.filter((person) => person.id == id).length === 0) {
        return "ID inválido!";
    }
    if (key === "name")
        lista.filter((person) => person.id === id)[0].name = value;
    else
        lista.filter((person) => person.id === id)[0].bio = value;
};
const changeNameOrBioImperative = (id, key, value) => {
    const newValue = value;
    const keyToAccess = key;
    let person;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            person = lista[i];
        }
    }
    if (!person) {
        return undefined;
    }
    if (keyToAccess === "name") {
        person.name = newValue;
    }
    else {
        person.bio = newValue;
    }
};
const initialInsert = () => {
    table.textContent = "";
    const firstLine = document.createElement("tr");
    const tableTitleOne = document.createElement("th");
    const tableTitleTwo = document.createElement("th");
    const tableTitleThree = document.createElement("th");
    tableTitleOne.textContent = "ID";
    tableTitleTwo.textContent = "Nome";
    tableTitleThree.textContent = "Biografia";
    firstLine.appendChild(tableTitleOne);
    firstLine.appendChild(tableTitleTwo);
    firstLine.appendChild(tableTitleThree);
    table.appendChild(firstLine);
    lista.forEach((person) => {
        const line = document.createElement("tr");
        const ceilOne = document.createElement("td");
        const ceilTwo = document.createElement("td");
        const ceilThree = document.createElement("td");
        ceilOne.textContent = String(person.id);
        ceilTwo.textContent = String(person.name);
        ceilThree.textContent = String(person.bio);
        line.appendChild(ceilOne);
        line.appendChild(ceilTwo);
        line.appendChild(ceilThree);
        table.appendChild(line);
    });
};
const getValueOfBioOrName = () => {
    const getNameOption = document.getElementById("name");
    const getbioOption = document.getElementById("bio");
    const idSelect = document.getElementById("idOptions");
    const textArea = document.getElementById("textarea-getBioOrName");
    let optionChecked = undefined;
    let idSelected = 1;
    let result = "";
    if (getNameOption.checked || getbioOption.checked) {
        optionChecked = getNameOption.checked ? "name" : "bio";
        for (let i = 0; i < idSelect.options.length; i++) {
            if (idSelect.options[i].selected)
                idSelected = Number(idSelect.options[i].value);
        }
        ;
        result = optionChecked == "name" ? nameFunctional(idSelected) : bioFunctional(idSelected);
        initialInsert();
        textArea.value = result;
    }
    ;
};
const removeItem = () => {
    const idSelect = document.getElementById("idOptionsRemove");
    let idSelected = 1;
    for (let i = 0; i < idSelect.options.length; i++) {
        if (idSelect.options[i].selected)
            idSelected = Number(idSelect.options[i].value);
    }
    ;
    deleteItemFunctional(idSelected);
    insertOptionsInSelect();
    initialInsert();
};
const changeBioOrName = () => {
    const getNameOption = document.getElementById("nameChange");
    const getbioOption = document.getElementById("bioChange");
    const idSelect = document.getElementById("idChangeOptions");
    const textArea = document.getElementById("textareaChangeBioOrName");
    let optionChecked = "";
    let idSelected = 1;
    if (getNameOption.checked || getbioOption.checked) {
        optionChecked = getNameOption.checked ? "name" : "bio";
        for (let i = 0; i < idSelect.options.length; i++) {
            if (idSelect.options[i].selected)
                idSelected = Number(idSelect.options[i].value);
        }
        ;
        optionChecked == "name" ? changeNameOrBioFunctional(idSelected, "name", textArea.value) : changeNameOrBioFunctional(idSelected, "bio", textArea.value);
        textArea.value = "";
        initialInsert();
    }
};
const insertOptionsInSelect = () => {
    const selectGetBioOrName = document.getElementById("idOptions");
    const selectRemoveItem = document.getElementById("idOptionsRemove");
    const selectIdForChangeValue = document.getElementById("idChangeOptions");
    selectGetBioOrName.textContent = "";
    selectRemoveItem.textContent = "";
    selectIdForChangeValue.textContent = "";
    lista.forEach((person) => {
        const optionToRemove = document.createElement("option");
        const optionToGetBioOrName = document.createElement("option");
        const optionToChangeValue = document.createElement("option");
        optionToChangeValue.setAttribute("value", String(person.id));
        optionToChangeValue.textContent = String(person.id);
        optionToGetBioOrName.setAttribute("value", String(person.id));
        optionToGetBioOrName.textContent = String(person.id);
        optionToRemove.setAttribute("value", String(person.id));
        optionToRemove.textContent = String(person.id);
        selectIdForChangeValue.appendChild(optionToChangeValue);
        selectRemoveItem.appendChild(optionToRemove);
        selectGetBioOrName.appendChild(optionToGetBioOrName);
    });
};
getBioOrNameButton.addEventListener(("click"), getValueOfBioOrName);
removeItemButton.addEventListener(("click"), removeItem);
changeBioOrNamebutton.addEventListener(("click"), changeBioOrName);
initialInsert();
insertOptionsInSelect();
