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

    setTimeout(function(){
        $("#avance").animate({ width:"75%" }, 900);
    }, 400);
});
