import data from "./data"
import Dice from "./Components/Dice"
export default function App() {
  //use Array.from to map and render the button 10 times eventhough the dice value just has 6
  //Array.from(arrayLike, mapFunction)
 const dieValue = Array.from({ length: 10 }, (_, i) => {
    const usedData = data[i % data.length]; //get 1 of 6 values
    return <Dice key={i} value ={usedData.value}/>;
  });
  return (
    <main>
      {dieValue}
    </main>
  );
}
