import data from "./data"
import Die from "./Components/Die"
export default function App() {
  const dieValue = data.map((dt) => {
    return <Die
      key={dt.id}
      {...dt}
    />
  })
  return (
    <main>
      {dieValue}
    </main>
  );
}

