// $() is a shortcut for $(document).ready()
// $() is not thenable
$(() => {
    $('#name').on("keyup", () => {
        $('#greetings').text(`Hello ${$('#name').val()}`)
    })
});