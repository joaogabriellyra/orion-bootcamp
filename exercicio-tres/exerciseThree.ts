import { ListTypes } from "./listInterface";

const input = document.querySelector("#vowelCounterInput") as HTMLInputElement;
const button = document.querySelector("#button") as HTMLButtonElement;
const result = document.querySelector("#result") as HTMLTitleElement;

const checkingVowel = (vowel: string):boolean => {
    const vowels: string[] = ["a", "e", "i", "o", "u"];
    return vowels.includes(vowel);
};

const vowelCounter = (vowelsWord: string):string => {
    const word = String(vowelsWord);
    const vowels: string[] = word.toLowerCase().split("").filter(checkingVowel);
    return String(vowels.length);
};

button.addEventListener("click", () => {
    const htmlVowelCounter = vowelCounter(input.value);
    result.textContent = `${input.value} contém ${htmlVowelCounter} vogais!`;
    input.value = "";
});

let lista: ListTypes[] = [
{id: 1, name: "Ada Lovelace", bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
{id: 2, name: "Alan Turing", bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
{id: 3, name: "Nikola Tesla", bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
{id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

const table = document.querySelector("#tabela") as HTMLTableElement;
const getBioOrNameButton = document.querySelector("#button-getBioOrName") as HTMLButtonElement;
const removeItemButton = document.querySelector("#removeItemButton") as HTMLButtonElement;
const changeBioOrNamebutton = document.querySelector("#buttonChangeBioOrName") as HTMLButtonElement;

const bioFunctional = (id: number):string  => {
    if (lista.filter((person) => person.id == id)[0] == undefined) {
        return "ID inválido!";
    } 
    return lista.filter((person) => person.id == id)[0].bio;
}

const bioImperative = (id: number):string | undefined => {
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
}

const nameFunctional = (id: number):string => {
    if (lista.filter((person) => person.id == id).length == 0) {
        return "ID inválido!";
    }
    return lista.filter((person) => person.id == id)[0].name;
}

const nameImperative = (id: number):string | undefined => {
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
}

const deleteItemFunctional = (id:number):void => {
    lista = lista.filter((person) => person.id !== id);
}

const deleteItemImperative = (id:number):void => {
    let newList = [];
    for(let i = 0; i < lista.length; i++) {
        if (lista[i].id !== id) {
            newList.push(lista[i]);
    }
    }
    lista = newList;
}

const changeNameOrBioFunctional = (id: number, key: "name" | "bio", value: string):string | void => {
    if (lista.filter((person) => person.id == id).length === 0) {
        return "ID inválido!";
    }
    if (key === "name") lista.filter((person) => person.id === id)[0].name = value;
    else lista.filter((person) => person.id === id)[0].bio  = value;
}

const changeNameOrBioImperative = (id: number, key: "name" | "bio", value: string):string | void => {
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
}

const initialInsert = ():void => {
    table.textContent = "";
    const firstLine = document.createElement("tr") as HTMLTableRowElement;
    const tableTitleOne = document.createElement("th") as HTMLTableCellElement;
    const tableTitleTwo = document.createElement("th") as HTMLTableCellElement;
    const tableTitleThree = document.createElement("th") as HTMLTableCellElement;
    tableTitleOne.textContent = "ID";
    tableTitleTwo.textContent = "Nome";
    tableTitleThree.textContent = "Biografia";
    firstLine.appendChild(tableTitleOne);
    firstLine.appendChild(tableTitleTwo);
    firstLine.appendChild(tableTitleThree);
    table.appendChild(firstLine);

    lista.forEach((person) => {
        const line = document.createElement("tr") as HTMLTableRowElement;
        const ceilOne = document.createElement("td") as HTMLTableCellElement;
        const ceilTwo = document.createElement("td") as HTMLTableCellElement;
        const ceilThree = document.createElement("td") as HTMLTableCellElement;
        ceilOne.textContent = String(person.id);
        ceilTwo.textContent = String(person.name);
        ceilThree.textContent = String(person.bio);
        line.appendChild(ceilOne);
        line.appendChild(ceilTwo);
        line.appendChild(ceilThree);
        table.appendChild(line);
    });
}

const getValueOfBioOrName = ():void => {
    const getNameOption = document.getElementById("name") as HTMLInputElement;
    const getbioOption = document.getElementById("bio") as HTMLInputElement;
    const idSelect = document.getElementById("idOptions") as HTMLSelectElement;
    const textArea = document.getElementById("textarea-getBioOrName") as HTMLTextAreaElement;
    let optionChecked = undefined;
    let idSelected = 1;
    let result = "";
    if (getNameOption.checked || getbioOption.checked) {
        optionChecked = getNameOption.checked ? "name" : "bio";
        for(let i = 0; i < idSelect.options.length; i++) {
            if (idSelect.options[i].selected) idSelected = Number(idSelect.options[i].value);
        };
        result = optionChecked == "name" ? nameFunctional(idSelected) : bioFunctional(idSelected);
        initialInsert();
        textArea.value = result;
    };
}

const removeItem = ():void => {
    const idSelect = document.getElementById("idOptionsRemove") as HTMLSelectElement;
    let idSelected = 1;
    for(let i = 0; i < idSelect.options.length; i++) {
        if (idSelect.options[i].selected) idSelected = Number(idSelect.options[i].value);
    };
    deleteItemFunctional(idSelected);
    initialInsert();
}

const changeBioOrName = ():void => {
    const getNameOption = document.getElementById("nameChange") as HTMLInputElement;
    const getbioOption = document.getElementById("bioChange") as HTMLInputElement;
    const idSelect = document.getElementById("idChangeOptions") as HTMLSelectElement;
    const textArea = document.getElementById("textareaChangeBioOrName") as HTMLTextAreaElement;
    let optionChecked = "";
    let idSelected = 1;
    if (getNameOption.checked || getbioOption.checked) {
        optionChecked = getNameOption.checked ? "name" : "bio";
        for(let i = 0; i < idSelect.options.length; i++) {
            if (idSelect.options[i].selected) idSelected = Number(idSelect.options[i].value);
        };
        optionChecked == "name" ? changeNameOrBioFunctional(idSelected, "name", textArea.value) : changeNameOrBioFunctional(idSelected, "bio", textArea.value);
        textArea.value = "";
        initialInsert();
    }
}

getBioOrNameButton.addEventListener(("click"), getValueOfBioOrName);
removeItemButton.addEventListener(("click"), removeItem);
changeBioOrNamebutton.addEventListener(("click"), changeBioOrName);

initialInsert();