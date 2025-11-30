$(".encabezado-pregunta").click(function () {
    var t = $(this);
    var tp = t.next(".texto-respuesta");

    if (tp.is(":visible")) {
        tp.slideUp();
        t.removeClass("activo");
        t.find(".caja-icono i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
    } else {

        $(".texto-respuesta:visible").slideUp();
        $(".encabezado-pregunta").removeClass("activo");
        $(".caja-icono i")
            .removeClass("fa-minus")
            .addClass("fa-plus");

        tp.slideDown();
        t.addClass("activo");
        t.find(".caja-icono i")
            .removeClass("fa-plus")
            .addClass("fa-minus");
    }
});

