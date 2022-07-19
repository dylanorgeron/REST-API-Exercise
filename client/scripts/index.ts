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
}
)