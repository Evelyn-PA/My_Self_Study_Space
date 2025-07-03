import Header from "./Components/Header"
import Tags from "./Components/Tags"
import Rows from "./Components/Rows"
import Keyboard from "./Components/KeyBoard"
import "./App.css"

import { useState } from "react"

export default function App() {

  const [words, setWords] = useState("React")

  const [userGuess, setUserGuess] = useState([])


  return (

    <div>
      <Header />

      <Tags />

      <Rows word={words} />

      <Keyboard guess={userGuess}
        setGuess={setUserGuess}
      />


    </div>

  )
}