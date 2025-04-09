/**
 * Challenge: set up a new React app from scratch!
 * Hints:
 * 1. Need to import the method to create a new root 
 *    from the "react-dom/client" package)
 * 2. Use that root to render some JSX. For now, just render
 *    an h1 element that says anything you want.
 */

import { createRoot } from "react-dom/client"
import "./index.css";
const root = createRoot(document.getElementById("root"))
root.render(
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