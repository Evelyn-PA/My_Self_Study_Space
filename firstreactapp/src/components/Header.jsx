//create header component  with nav
export default function Header() {
    return (
        <header className="header">
            <img src="\images\tips.png" alt="mylogo" className="logo" />
            <nav>
                <ul className="nav">
                    <li className="list-items">Pricing</li>
                    <li className="list-items">About</li>
                    <li className="list-items">Contact</li>
                </ul>
            </nav>
        </header>
    )
}