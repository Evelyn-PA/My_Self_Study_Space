//import the Header.jsx
import Header from "./components/Header.jsx";
//import the MainContent.jsx
import Main from "./components/MainContent.jsx";
//import the Footer.jsx
import Footer from "./components/Footer.jsx";
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import "./index.css";
const root = createRoot(document.getElementById("root"))
root.render(
  <>
    <Page />
  </>

)
//Component Page
function Page() {
  return (
    <Fragment>
      <Header />
      < Main />
      <Footer />
    </Fragment>
  )
}