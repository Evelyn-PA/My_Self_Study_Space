import Header from "./Components/Header"
import Tags from "./Components/Tags"
import Keyboard from "./Components/KeyBoard"
import "./App.css"

import { useState } from "react"

export default function App() {

  const [words, setWords] = useState("Javascript")

  const [userGuess, setUserGuess] = useState([])

  const letterElement = words.split("").map((letter, index) => (
    <span key={index}
    >{userGuess.includes(letter.toLowerCase()) && letter.toUpperCase()}</span>
  ))

  function checkWords(letter){
    return words.toLowerCase().includes(letter)
  }
  return (

    <div>
      <Header />

      <Tags />

      <section className="words">
        {letterElement}
      </section>


      <Keyboard guess={userGuess}
        setGuess={setUserGuess}
        word={words}
        checkLetter = {checkWords}
      />


    </div>

  )
}