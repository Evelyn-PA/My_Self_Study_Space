export default function Rows(props) {

    const letterElement = props.word.split("").map((letter, index) => (
        <span key={index}>{letter.toUpperCase()}</span>
    ))

    return (
        <section className="words">
            {letterElement}
        </section>
    )
}