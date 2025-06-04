import React from "react";
import Recipe from "./claudeRecipe"
import IngredientList from "./IngredientsList"
export default function Main() {
    const [ingredients, setIngredient] = React.useState(["egg", "meat", "water", "Veggie"]); //Use state
    const ingredientsList = ingredients.map((ingredient) => 
        (
            <li key={ingredient}>
                {ingredient}
            </li>
        )
    )


    function submit(formData) {
        const newIngredient = formData.get("ingredient");
        //Check if the ingredient is typed
        if (newIngredient !== "") {
            setIngredient(preIngredient => [... //Using spread
                preIngredient, newIngredient]) //Add the new ingredient to the list with React State
        }
    }

    //State represent the recipe
    const [recipeShow, setRecipeShow] = React.useState(false);

    //click action show the recipe
    function showRecipe(){
        setRecipeShow(preShow => !preShow )
    }

    console.log(showRecipe)
    return (
        <>
            <form className="form" action={submit}>
                <input
                    type="text"
                    placeholder="Enter your ingredients"
                    name="ingredient"
                    aria-label="Add ingredient"
                />
                <button type="submit">+ Add</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientList listOfIngredient ={ingredientsList} showRecipe ={showRecipe} recipeShow={recipeShow}/>}

            {recipeShow && <Recipe/>}
        </>
    )
}