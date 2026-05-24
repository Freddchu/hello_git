$(function(){
    $("#anio").text(new Date().getFullYear());

    $("#boton-ia").on("click", function(){
        $("#mensaje-ia").stop().slideToggle(350);
        $(this).text(function(_, texto){
            return texto === "Ver idea clave" ? "Ocultar idea clave" : "Ver idea clave";
        });
    });

    $(".mini-card").on("mouseenter", function(){
        $(".mini-card").removeClass("activa");
        $(this).addClass("activa");
    });

    $(".menu a").on("click", function(){
        $(".menu a").removeClass("activo");
        $(this).addClass("activo");
    });

    $("#formulario-contacto").on("submit", function(evento){
        evento.preventDefault();
        $("#respuesta-formulario").hide().text("Mensaje preparado. Puedes conectar este formulario despues.").fadeIn(250);
        this.reset();
    });

    let porcentaje = 0;
    const final = 82;
    const intervalo = setInterval(function(){
        porcentaje += 2;
        $("#porcentaje").text(porcentaje + "%");
        $("#avance").css("width", porcentaje + "%");

        if(porcentaje >= final){
            clearInterval(intervalo);
            $("#porcentaje").text(final + "%");
            $("#avance").css("width", final + "%");
        }
    }, 22);
});
