import Main from "./Components/Main"
import Navbar from "./Components/Navbar"

//Let this can be export to index.jsx
export default function App() {
    //import component
    return (
        <>
            <div className="navi"><Navbar /></div>
            <div className="content"><Main /></div>
        </>
    )

}

