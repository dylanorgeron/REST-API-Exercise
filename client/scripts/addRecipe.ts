import $ from 'jquery'

$(document).ready(() => {

    $('#submit').on('click', () => {
        const data = {
            name: $('#name').val(),
            description: $('#description').val()
        }

        $.post('http://localhost:8081/addRecipe', {
            data,
            success: (res) => {
                console.log(res)
            }
        })
    })
})