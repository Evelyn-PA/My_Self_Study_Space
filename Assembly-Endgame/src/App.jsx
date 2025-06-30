import Header from "./Components/Header"
import Tag from "./Components/Tags"
import { languages } from "./language"
export default function App() {
  const LanguageData = languages.map((dt) => {
    return <Tag 
      name ={dt.name}
      backgroundColor ={dt.backgroundColor}
      color = {dt.color}
      />
  })
  return (

    <div>
      <div>
        <Header />
      </div>

      <div>
        {LanguageData}
      </div>
    </div>

  )
}