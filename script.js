$(document).ready(function() {
    //Fetch email when the document is ready
    getEmail();
});

function getEmail() {
    $.get('/get-email', function(response){
        $('#emailDisplay').text('Email: ' + response.email)
    })
}