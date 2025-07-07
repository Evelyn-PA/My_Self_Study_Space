export default function Header(props) {
    const isLose = props.guessTime === 0
    const statusGame = isLose === 0 ? "lose" : "win"
    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word in under 8 attempts to keep <br/> the programming world safe from Assembly!</p>
            </header>

            <section className={`game-status ${statusGame}`}>
                <h2>
                    {isLose? "You Lose": "You win!"}
                </h2>
                <p>{isLose? "Try again next time!": "Well Done!"}</p>
            </section>
        </main>
    )
}