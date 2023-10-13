// 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.
// a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
// b) Dar um exemplo de uso com uma palavra recebida via input no formulário.

const checkingVowel = (vowel: string):boolean => {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(vowel);
};

const vowelCounter = (vowelsWord: string):number => {
    const vowels: string[] = vowelsWord.toLowerCase().split("").filter(checkingVowel);
    return vowels.length;
};

console.log(vowelCounter("Gabriel"));