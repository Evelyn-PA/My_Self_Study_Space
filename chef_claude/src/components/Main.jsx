export default function Main() {
    const ingreadients = ["eggs", "milk", "flour", "sugar", "butter"];
    const ingredientsList = ingreadients.map((ingredient) => {
        return (
            <li key={ingredient}>
                {ingredient}
            </li>
        )
    })

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget); //Web API FormData to get data from the form
        const newIngredient = formData.get("ingredient");
        ingreadients.add(newIngredient); //Add the new ingredient to the list
        console.log(ingreadients);
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your ingredients"
                    name="ingredient"
                    aria-label="Add ingredient"
                />
                <button type="submit">+ Add</button>
            </form>

            <ul>
                {ingredientsList}
            </ul>
        </>
    )
}