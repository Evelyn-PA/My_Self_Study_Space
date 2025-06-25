import { useState } from "react"
import {nanoid} from "nanoid"
import Dice from "./Components/Dice"
export default function App() {
  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice() {
    return new Array(10)
      .fill(0) //Fills 10 slots of array with 0 - just to make them usable
      .map(() => ({
        id: nanoid(), // Creare ID
        value: Math.ceil(Math.random() * 6),//for each slot value, it returns a random number between 1 to 6
        isHeld: false 
      }))
  }

  function getRoll() {
    setDice(generateAllNewDice().map(dice => ({ ...dice, isHeld: true })))
    
  }

  const diceElement = dice.map(diceObj => <Dice key={diceObj.id } value={diceObj.value} />)
  console.log(diceElement)
  return (
    <main>
      <div className="container">
        {diceElement}
      </div>
      <button className="roll-button" onClick={getRoll}>Roll Dice</button>
    </main>
  );
}
