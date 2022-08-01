$(() => {
    // EJERCICIO 1

    $("#cajaUno").click(function () {
        $("#cajaDos").animate({ height: 400, width: 1270 }).css('background-color', '#2C3333');
    });


    // EJERCICIO 2

    $("#opciones").hide();
    $("button").click(function () {
        $("#opciones").toggle("slow");
    })


    // EJERCICIO 3

    $("#hover").mouseover(function () {
        $("li").filter(":even").css("background-color", "#2C3333");
        $("li").filter(":odd").css("background-color", "green");
    })

    $("#hover").mouseleave(function () {
        $("li").css("background-color", "");
    })

})