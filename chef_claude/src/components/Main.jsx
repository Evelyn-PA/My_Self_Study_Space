export default function Main() {

    function handleClick(event) {
        event.preventDefault();
        console.log("Button clicked");
    }

    return (
        <>
            <form className="form" onSubmit={handleClick}>
                <input
                    type="text"
                    placeholder="Enter your ingredients"
                    aria-label="Add ingredient"
                />
                <button onClick={handleClick}>+ Add</button>
            </form>
        </>
    )
}