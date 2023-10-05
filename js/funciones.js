var contadorFilas = 0;

$(document).ready(function() {
    //alert('Documento Listo');
    $("#btnAddFila").click(function(){

        var fila = $("<tr></tr>");
        var celda = $("<td></td>");
        var caja = $("<input></input>");
        $(caja).attr("type", "text");
        $(caja).attr("id", "nombre"+contadorFilas);
        $(caja).attr("placeholder","Nombre del Producto");
        $(celda).append(caja);
        $(fila).append(celda);

        celda = $("<td></td>");
        caja = $("<input></input>");
        $(caja).attr("type", "number");
        $(caja).attr("placeholder","Cantidad del Producto");
        $(caja).attr("id", "cantidad"+contadorFilas);
        //$(caja).
        $(caja).focusout(function(){
            var valor = $(this).val();
            if ($(this).val().length==0) {
                $(this).removeClass("negativo");
                $(this).removeClass("positivo");
                return;
            }
            if (Number(valor)>=0) {
                $(this).addClass("positivo");
                $(this).removeClass("negativo");
            } else {
                $(this).addClass("negativo");
                $(this).removeClass("positivo");
            }
        });

        $(celda).append(caja);
        $(fila).append(celda);

        celda = $("<td></td>");
        caja = $("<input></input>");
        $(caja).attr("type", "number");
        $(caja).attr("placeholder","Precio del Producto");
        $(caja).attr("id", "precio"+contadorFilas);

        $(celda).append(caja);
        $(fila).append(celda);

        celda = $("<td></td>");
        caja = $("<input></input>");
        $(caja).attr("type", "number");
        $(caja).attr("placeholder","Subtotal del Producto");
        $(caja).attr("readonly", "readonly"); 
        $(caja).attr("id", "subtotal"+contadorFilas);
        $(celda).append(caja);
        $(fila).append(celda);

        celda = $("<td></td>");
        var boton = $("<button></button>");
        $(boton).attr("type", "button");
        $(boton).text("Eliminar");
        
        $(boton).click(function(){

            var padre = $(this).parent();
            var abuelo = $(padre).parent();
            $(abuelo).remove();
            contadorFilas--;

        });

        $(celda).append(boton);
        $(fila).append(celda);

        $("#cuerpo-tabla-1").append(fila);
        contadorFilas=contadorFilas+1;
    });


    $("#btnTotal").click(function(){
        var total=0;
        var totalCantidad=0;
        var totalUnitarios=0;

        for(i=0;i<=contadorFilas;i++){
            

            var val=$("#precio"+i).val();
            var val2=$("#cantidad"+i).val();
            

            if(val!=null && val2!=null){
                var Precioval=Number(val);
                var cantidadVal=Number(val2)

               
                $("#subtotal"+i).val(""+(cantidadVal*Precioval));
                
                total=total+(Precioval*cantidadVal);
                totalCantidad=totalCantidad+cantidadVal;
                totalUnitarios=totalUnitarios+Precioval;
            }
           

        }

            $("#Total").val(""+(total));
            $("#totalCantidad").val(""+(totalCantidad));
            $("#totalUnitarios").val(""+(totalUnitarios));
        })

});