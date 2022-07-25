//parse the search from URL,
// make a get request with the ID
// either render the page with data,
// or display an error message

import $ from 'jquery'
$(document).ready(() => {
    let id = window.location.search.split('=')[1];
    console.log(id);

    $.ajax('http://localhost:8081/getRecipe/' + id,
            {
                success: (res) => {
                    let recipehtml = `
                        <div class='recipe'>
                            <div class='title'>
                            <a href='recipe.html?id=${res.id}'>${res.name}</a>
                            </div>
                            <div class='des'>
                            ${res.description}
                            </div>
                        </div>
                        `
                    $('#recipes-container').html(recipehtml)
                }
            })
}