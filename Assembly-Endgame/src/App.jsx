import Header from "./Components/Header"
import Tag from "./Components/Tags"
import { nanoid } from "nanoid"
import "./App.css"

import { languages } from "./language"
import { useState } from "react"

export default function App() {

  const [words, setWords] = useState("React")
  const LanguageData = languages.map((dt) => {
    return <Tag
      key={nanoid()}
      name={dt.name}
      backgroundColor={dt.backgroundColor}
      color={dt.color}
    />
  })

  const letterElement = words.split("").map((letter, index )=> (
    <span key ={index}>{letter.toUpperCase()}</span>
  ))


  return (

    <div>
      <div>
        <Header />
      </div>

      <div className="tags-container">
        {LanguageData}
      </div>
      <section className="words">
        {letterElement}
      </section>


    </div>

  )
}