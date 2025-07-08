export default function Keyboard(props) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const alKey = alphabet.split("").map((letter, index) => {
        let className = "keyb-btn";
        if (props.guess.includes(letter)) {
            className += props.checkLetter(letter) ? " correct" : " wrong";
        }



        return (
            <button
                className={className}
                key={index}
                disabled={props.isGameOver}
                onClick={() => {
                    if (!props.guess.includes(letter)) {
                        props.setGuess([...props.guess, letter]);
                        props.count(letter)
                    }
                }}
            >
                {letter.toUpperCase()}
            </button>
        );
    });

    return (
        <section className="keyboard">
            {alKey}

            {props.isGameOver &&(
                <button onClick={props.startNewGame}>New Game</button>
            )}
        </section>


    );
}