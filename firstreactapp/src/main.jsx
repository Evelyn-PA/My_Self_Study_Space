/**
 * Challenge: set up a new React app from scratch!
 * Hints:
 * 1. Need to import the method to create a new root 
 *    from the "react-dom/client" package)
 * 2. Use that root to render some JSX. For now, just render
 *    an h1 element that says anything you want.
 */

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

import { createRoot } from "react-dom/client"
import "./index.css";
const root = createRoot(document.getElementById("root"))
root.render(
  <>
    <TemporaryName />
    <Footer />
  </>

)

//create component
function TemporaryName() {
  return (
    <main>
      <div className="header">
        <img src="\images\tips.png" alt="mylogo" />
      </div>
      <div className="content">
        <h1>Fun Facts about me</h1>
        <ul>
          <li>I don't want to do the handwork.</li>
          <li>I want to become a software developer.</li>
          <li>I want to travel around the world.</li>
          <li>I want to live a peaceful life.</li>
        </ul>

      </div>
    </main>
  )
}

//create a custom "page" component
function Footer() {
  return (
    <footer>
      <p>© 2025 Evelyn Nguyen development. All rights reserved.</p>
    </footer>
  )
}