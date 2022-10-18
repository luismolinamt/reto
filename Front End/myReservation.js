function leerReservations(){
    $.ajax({
        url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/reservation/reservation',
        type : 'GET',
        dataType : 'json',

        success : function(reservations) {
            let cs=reservations.items;
            $("#listReservations").empty();
            for(i=0;i<cs.length;i++){
                           
                $("#listReservations").append(cs[i].idReservation+" <b>"+cs[i].startDate+"<b> "+cs[i].devolutionDate+"</b> "+cs[i].status+" ");
                $("#listReservations").append(" "+"<button onclick='borrarReservation("+cs[i].idReservation+")'>Borrar</button><br>");
            }
        },
        error : function(xhr, status) {
            alert('Ha sucedido un problema');
        }
    });
}

function guardarReservation() {
    let idReservation=$("#idReservation").val();
    let startDateReservation=$("#startDateReservation").val();
    let devolutionDateReservation=$("#devolutionDateReservation").val();
    let statusReservation=$("#statusReservation").val();
    

    let data={
        idReservation:idReservation,
        startDate:startDateReservation,
        devolutionDate:devolutionDateReservation,
        status:statusReservation
        
    };

    //console.log(data);
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/reservation/reservation',
        type : 'POST',
        dataType : 'json',
        data:dataToSend,
        contentType: 'application/json',
        success : function(reservations) {
            $("#idReservation").val("");
            $("#startDateReservation").val("");
            $("#devolutionDateReservation").val("");
            $("#statusReservation").val("");
          
        },
        error : function(xhr, status) {
        //alert('Debe ingresar algun valor.');
        },
        complete:function(){
            leerReservations();
        }
    });
}

function editarReservation(){
    let idReservation=$("#idReservation").val();
    let startDateReservation=$("#startDateReservation").val();
    let devolutionDateReservation=$("#devolutionDateReservation").val();
    let statusReservation=$("#statusReservation").val();
        

    let data={
        idReservation:idReservation,
        startDate:startDateReservation,
        devolutionDate:devolutionDateReservation,
        status:statusReservation,
        
    };

    //console.log(data);
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/reservation/reservation',
        type : 'PUT',
        //dataType : 'json',
        data:dataToSend,
        contentType: 'application/json',
        success : function(reservations) {
        $("#idReservation").val("");
        $("#startDateReservation").val("");
        $("#devolutionDateReservation").val("");
        $("#statusReservation").val("");
          
        },
        error : function(xhr, status) {
        alert('Debe editar por lo menos un valor en el formulario');
        },
        complete:function(){
            leerReservations();
        }
    });

}

function borrarReservation(idReservation){
   
    let data={
        idReservation:idReservation,
    };

    //console.log(data);
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/reservation/reservation',
        type : 'DELETE',
        //dataType : 'json',
        data:dataToSend,
        contentType: 'application/json',
        success : function(reservations) {
            $("#idReservation").val("");
            $("#startDateReservation").val("");
            $("#devolutionDateReservation").val("");
            $("#statusReservation").val("");
          
        },
        error : function(xhr, status) {
        alert('Debe indicar por lo menos un valor en el formulario');
        },
        complete:function(){
            leerReservations();
        }
    });

}