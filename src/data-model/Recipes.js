import allRecipes from './data/recipes'
import Users from './Users'

function getActiveUserRecipes() {
    return new Promise((resolve, reject) => {
        const activeUser = Users.getActiveUser();

        let recipes = [];
        allRecipes.forEach(recipe => {
            if (recipe.id === activeUser.id) {
                recipes.push(recipe);
            }
        });

        resolve(recipes);
    });
}

export default {
    getActiveUserRecipes
}