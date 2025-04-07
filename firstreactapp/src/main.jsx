// import { createElement } from "react" //Similar with document.createElement
import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById("root"))
const reactElement = <h1>Hello everyone from React!!!!</h1>
console.log(reactElement)

root.render(reactElement)