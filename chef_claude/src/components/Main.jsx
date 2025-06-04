import React from "react";
import Recipe from "./components2/claudeRecipe"
import IngredientList from "./components2/IngredientsList"
export default function Main() {
const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    function submit(formData) {
        const newIngredient = formData.get("ingredient");
        //Check if the ingredient is typed
        if (newIngredient !== "") {
            setIngredients(preIngredient => [... //Using spread
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
                <IngredientList listOfIngredient ={ingredients} showRecipe ={showRecipe} recipeShow={recipeShow}/>}

            {recipeShow && <Recipe/>}
        </>
    )
}