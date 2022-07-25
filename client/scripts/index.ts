import $ from 'jquery'
$(document).ready(() => {
    $("#time-btn").on('click', () => {
        $.ajax('http://localhost:8081/getTime',
            {
                success: (res) => {
                    $('#time-container').html(res)
                }
            })
    })

    $("#recipe-btn").on('click', () => {
        $.ajax('http://localhost:8081/getRecipes',
            {
                success: (res: any []) => {
                    let recipehtml = ""
                    res.forEach((recipe)=>{
                        let r = `
                        <div class='recipe'>
                            <div class='title'>
                            <a href='recipe.html?id=${recipe.id}'>${recipe.name}</a>
                            </div>
                            <div class='des'>
                            ${recipe.description}
                            </div>
                        </div>
                        `
                        recipehtml += r
                    })
                    $('#recipes-container').html(recipehtml)
                }
            })
    })


}
)