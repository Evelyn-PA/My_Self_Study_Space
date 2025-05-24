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


    function submit(formData) {
        const newIngredient = formData.get("ingredient");
        //Check if the ingredient is typed
        if (newIngredient !== "") {
            setIngredient(preIngredient => [... //Using spread
                preIngredient, newIngredient]) //Add the new ingredient to the list with React State
        }
    }
        return (
        <>
            <form className="form" form action={submit}>
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