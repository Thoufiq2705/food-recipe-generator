const apiKey = "30e62135f4f546b4ad600b901d2b2cb3";



function displayRecipes(recipes) {
    recipes.forEach((recipe)=> {
        
        const recipeList = document.getElementById("recipe-list");

        const recipeItem = document.createElement("li");
        recipeItem.classList.add("recipe-item");

        const recipeImg = document.createElement("img");
        recipeImg.src = recipe.image;
        recipeItem.alt = "Recipe Image";

        const recipeTitle = document.createElement("h2");
        recipeTitle.textContent = recipe.title;

        const recipeIngredient = document.createElement("p");
        recipeIngredient.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}`

        const recipeLink = document.createElement("a");
        recipeLink.href = recipe.sourceUrl;
        recipeLink.textContent = "VIEW RECIPE"

        recipeList.appendChild(recipeItem);
        recipeItem.appendChild(recipeImg);
        recipeItem.appendChild(recipeTitle);
        recipeItem.appendChild(recipeIngredient);
        recipeItem.appendChild(recipeLink);
    });
}



async function getRecipes() {
    const apiUrl = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`;
    const result = await fetch(apiUrl);
    const data = await result.json();

    console.log(data.recipes);
    return data.recipes;
}


async function init() {
    const response = await getRecipes();  
    displayRecipes(response);
}


init();