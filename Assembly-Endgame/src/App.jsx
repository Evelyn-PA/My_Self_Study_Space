import Header from "./Components/Header"
import Tags from "./Components/Tags"
import Rows from "./Components/Rows"
import Keyboard from "./Components/KeyBoard"
import "./App.css"

import { useState } from "react"

export default function App() {

  const [words, setWords] = useState("Javascript")

  const [userGuess, setUserGuess] = useState([])

  function showWords() {
    if (userGuess.includes(words)) {
      return "correct"
    }
    else{
      return "wrong"
    }
  }
  return (

    <div>
      <Header />

      <Tags />

      <Rows word={words}
        userGuess={userGuess} />

      <Keyboard guess={userGuess}
        setGuess={setUserGuess}
        word={words}
        checkAnswer={showWords}
      />


    </div>

  )
}