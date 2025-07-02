export default function Keyboard() {
    const alphabet = "abcdefghigklmnopqrstuvwxyz"

    const alKey = alphabet.split("").map((word, index) => (
        <button id ="keyb-btn"key={index}>{word.toUpperCase()}</button>
    ))
    return (
        <section className="keyboard">
            {alKey}
        </section>

    )
}