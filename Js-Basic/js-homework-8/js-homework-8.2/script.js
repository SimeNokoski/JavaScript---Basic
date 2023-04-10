$(document).ready(function () {
    $("button").click(function () {
        let text = $("#text").val();
        let color = $("#color").val();
        let h3 = $("h3");

        h3.text(text).css("color", color);
        let h3Color = h3.css("color");

        if (h3Color === `rgb(0, 0, 0)`) {
            if (color != 'black' && color != 'rgb(0, 0, 0)' && color != '#000000')
                h3.text(text + " - " + "Error message ")
        }
    })
})