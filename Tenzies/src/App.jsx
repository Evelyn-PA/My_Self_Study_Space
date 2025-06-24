import { useState } from "react"
import Dice from "./Components/Dice"
export default function App() {
  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice(){
    return new Array(10)
      .fill(0) //Fills 10 slots of array with 0 - just to make them usable
      .map((_,i) => ({
        id: i+1, // Creare ID
        value: Math.ceil(Math.random() *6) //for each slot value, it returns a random number between 1 to 6
      })) 
  }

  const diceElement = dice.map(num => <Dice key = {num.id} value ={num.value}/>)
  return (
    <main>
      <div className="container">
        {diceElement}
      </div>
      <button className="role-button"></button>
    </main>
  );
}
