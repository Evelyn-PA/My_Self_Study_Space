export default function Keyboard(props) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const alKey = alphabet.split("").map((letter, index) => (
        <button id="keyb-btn"
            key={index}
            onClick={() => {
                if (!props.guess.includes(letter)) {
                    props.setGuess([...props.guess, letter])
                }
            }
            }>{letter.toUpperCase()}</button>
    ))

    return (
        <section className="keyboard">
            {alKey}
        </section>

    )
}