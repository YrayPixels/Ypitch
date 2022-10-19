$(document).ready(function () {

    $("#uiux").click(function () {
        $("#uidiv").toggle(500, function () {
            console.log('opened')
        });
    });
    $("#frontend").click(function () {
        $("#frontenddiv").toggle(500, function () {
            console.log('opened')
        });
    });
    $("#backend").click(function () {
        $("#backenddiv").toggle(500, function () {
            console.log('opened')
        });
    });
});