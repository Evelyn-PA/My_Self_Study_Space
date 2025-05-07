export default function Main() {
    return (
        <>
            <form className="form">
                <input
                    type="text"
                    placeholder="Enter your ingredients"
                    aria-label="Add ingredient"
                />
                <button>+ Add</button>
            </form>
        </>
    )
}