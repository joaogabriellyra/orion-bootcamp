import { useState } from 'react';
import './App.css'

function App() {

  const [textValue, setTextValue] = useState("");
  const [answer, setAnswer] = useState(0)
  
  const checkingVowel = (vowel: string):boolean => {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(vowel);
};

  const vowelCounter = (vowelsWord: string):void => {
    const vowels: string[] = vowelsWord.toLowerCase().split("").filter(checkingVowel);
    setAnswer(vowels.length);
};

  return (
    <>
     <div>
      <h1>
        Verificador de vogais em uma ou mais palavras
      </h1>
      <input
      onChange={ ({ target: { value } }) => {
        setTextValue(value)
      }} 
      type="text"
      placeholder="Digite a ou as palavras"
      />
      <button onClick={() => vowelCounter(textValue)}>Checar</button>
      <h2>{answer}</h2>
     </div>
    </>
  )
}

export default App
