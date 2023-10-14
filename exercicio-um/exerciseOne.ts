// 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.
// a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
// b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
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
    result.textContent = htmlVowelCounter;
});

