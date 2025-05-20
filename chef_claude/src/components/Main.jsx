import React from "react";
export default function Main() {
    const [ingredients, setIngredient] = React.useState([]); //Use state
    const ingredientsList = ingredients.map((ingredient) => {
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
        //Check if the ingredient is typed
        if (newIngredient !== "") {

            setIngredient(preIngredient => [...
                preIngredient, newIngredient]) //Add the new ingredient to the list
        }

        event.target.reset();
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