$(document).ready(function () {
    $("button").click(function () {
        let inp = $("input").val();
        $("h1").text("Hello there" + " " + inp);
    })
})