export default function Header(props) {

    const statusGame = props.guessTime === 0 ? "You Lose" : "You win!"
    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word in under 8 attempts to keep <br/> the programming world safe from Assembly!</p>
            </header>

            <section className={`game-status ${statusGame}`}>
                <h2>
                    You win
                </h2>
                <p>Well Done!</p>
            </section>
        </main>
    )
}