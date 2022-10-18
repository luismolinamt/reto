function leerSalones(){
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/partyroom/partyroom',
            type : 'GET',
            dataType : 'json',
    
            success : function(salones) {
                let cs=salones.items;
                $("#listSalones").empty();
                for(i=0;i<cs.length;i++){
                               
                    $("#listSalones").append(cs[i].id+" <b>"+cs[i].name+" <b>"+cs[i].owner+"</b> "+cs[i].capacity+"</b> "+cs[i].description+" ");
                    
            $("#listSalones").append(" "+"<button onclick='borrarSalon("+cs[i].id+")'>Borrar</button><br>");
                }
            },
            error : function(xhr, status) {
                alert('Ha sucedido un problema');
            }
        });
    }
    
    function guardarSalon() {
        let idSalon=$("#idSalon").val();
        let nameSalon=$("#nameSalon").val();
        let ownerSalon=$("#ownerSalon").val();
        let capacitySalon=$("#capacitySalon").val();
        let descriptionSalon=$("#descriptionSalon").val();
        
    
        let data={
            id:idSalon,
            name:nameSalon,
            owner:ownerSalon,
            capacity:capacitySalon,
            description:descriptionSalon
            
        };
    
        //console.log(data);
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
    
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/partyroom/partyroom',
            type : 'POST',
            dataType : 'json',
            data:dataToSend,
            contentType: 'application/json',
            success : function(salones) {
                $("#idSalon").val("");
                $("#nameSalon").val("");
                $("#ownerSalon").val("");
                $("#capacitySalon").val("");
                $("#descriptionSalon").val("");
              
            },
            error : function(xhr, status) {
            //alert('Debe ingresar algun valor.');
            },
            complete:function(){
                leerSalones();
            }
        });
    }
    
    function editarSalon(){
        let idSalon=$("#idSalon").val();
        let nameSalon=$("#nameSalon").val();
        let ownerSalon=$("#ownerSalon").val();
        let capacitySalon=$("#capacitySalon").val();
        let descriptionSalon=$("#descriptionSalon").val();
            
    
        let data={
            id:idSalon,
            name:nameSalon,
            owner:ownerSalon,
            capacity:capacitySalon,
            description:descriptionSalon,
            
        };
    
        //console.log(data);
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
    
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/partyroom/partyroom',
            type : 'PUT',
            //dataType : 'json',
            data:dataToSend,
            contentType: 'application/json',
            success : function(salones) {
            $("#idSalon").val("");
            $("#nameSalon").val("");
            $("#ownerSalon").val("");
            $("#capacitySalon").val("");
            $("#descriptionSalon").val("");
              
            },
            error : function(xhr, status) {
            alert('Debe editar por lo menos un valor en el formulario');
            },
            complete:function(){
                leerSalones();
            }
        });
    
    }
    
    function borrarSalon(idSalon){
       
        let data={
            id:idSalon,
        };
    
        //console.log(data);
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
    
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/partyroom/partyroom',
            type : 'DELETE',
            //dataType : 'json',
            data:dataToSend,
            contentType: 'application/json',
            success : function(salones) {
                $("#idSalon").val("");
                $("#nameSalon").val("");
                $("#ownerSalon").val("");
                $("#capacitySalon").val("");
                $("#descriptionSalon").val("");
              
            },
            error : function(xhr, status) {
            alert('Debe indicar por lo menos un valor en el formulario');
            },
            complete:function(){
                leerSalones();
            }
        });
    
    }