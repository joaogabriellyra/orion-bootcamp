"use strict";
// 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.
// a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
// b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
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
    result.textContent = htmlVowelCounter;
});
