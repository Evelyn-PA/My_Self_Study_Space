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

  function checkWords(letter) {
    return words.toLowerCase().includes(letter)
  }

  const [guessTime, setGuesstime] = useState(8)

  function startNewGame() {
    setUserGuess([])
    setGuesstime(8)
  }


  function count(letter) {
    if (!checkWords(letter)) {
      setGuesstime(prev => {
        const newTime = prev - 1
        if (newTime === 0) {
          isGameOver
        }
        return newTime
      })
    }
  }


  const isWin = words
    .toLowerCase()
    .split("")
    .every(letter => userGuess.includes(letter.toLowerCase()))
  
  const isGameOver = isWin || guessTime === 0 

  return (

    <div>
      <Header
        guessTime={guessTime} />

      <Tags />

      <section className="words">
        {letterElement}
      </section>

      <h4 style={{ textAlign: "center", color: "white" }}>Guessing time remains: {guessTime}</h4>


      <Keyboard guess={userGuess}
        setGuess={setUserGuess}
        word={words}
        checkLetter={checkWords}
        count={count}
        guessTime={guessTime}
        startNewGame={startNewGame}
        isGameOver = {isGameOver}
      />
    </div>


  )
}