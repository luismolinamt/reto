
function traerInformacion() {

    $.ajax({
        
        url: "https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/prueba/costume/",

        type: "GET",

        dataType: "JSON",

        success: function (respuesta) {
           pintarInformation(respuesta.items);     
            
        }

    });

}

function pintarInformation(items){
    let myTable ="<table>"
    for (i = 0; i <items.length; i++) {
        myTable +="<tr>";
        myTable +="<td>"+ items[i].idCostume +"</td>";
        myTable +="<td>"+ items[i].name +"</td>";
        myTable +="<td>"+ items[i].brand +"</td>";
        myTable +="<td>"+ items[i].year +"</td>";
        myTable +="<tr>";
        }
        myTable +="/<table>"
        $("#Resultado").append(myTable);
}