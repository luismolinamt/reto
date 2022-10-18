function leerMensajes(){
    //funcion GET METODO GET
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
           
            type : 'GET',
            dataType : 'json',
    
            success : function(Mensajes) {
                let cs=Mensajes.items;
                $("#listMensajes").empty();
                for(i=0;i<cs.length;i++){
                 
                    $("#listMensajes").append(cs[i].idmessage+" <b>"+cs[i].messagetext+" ");
                    $("#listMensajes").append(" "+"<button onclick='borrarMensaje("+cs[i].idmessage+")'>Borrar</button><br>");
                }
            },
            error : function(xhr, status) {
                alert('Ha sucedido un problema');
            }
        });
    }
    
    function guardarMensaje() {
        let idMensaje=$("#idMensaje").val();
        let messagetextMensaje=$("#messagetextMensaje").val();
        
    
        let data={
            idmessage:idMensaje,
            messagetext:messagetextMensaje,
        };
    
        //console.log(data);
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
    
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
            type : 'POST',
            dataType : 'json',
            data:dataToSend,
            contentType: 'application/json',
            success : function(Mensajes) {
                $("#idMensaje").val("");
                $("#messagetextMensaje").val("");
            },
            error : function(xhr, status) {
            //alert('Debe ingresar algun valor.');
            },
            complete:function(){
                leerMensajes();
            }
        });
    }
    
    function editarMensaje(){
        let idMensaje=$("#idMensaje").val();
        let messagetextMensaje=$("#messagetextMensaje").val();
    
    
        let data={
            idmessage:idMensaje,
            messagetext:messagetextMensaje,
        };
    
        //console.log(data);
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
    
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
            type : 'PUT',
            //dataType : 'json',
            data:dataToSend,
            contentType: 'application/json',
            success : function(Mensajes) {
                $("#idMensaje").val("");
                $("#messagetextMensaje").val("");
            },
            error : function(xhr, status) {
            alert('Debe editar por lo menos un valor en el formulario');
            },
            complete:function(){
                leerMensajes();
            }
        });
    
    }
    
    function borrarMensaje(idMensaje){
       
        let data={
            idmessage:idMensaje,
        };
    
        //console.log(data);
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
    
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
            type : 'DELETE',
            //dataType : 'json',
            data:dataToSend,
            contentType: 'application/json',
            success : function(Mensajes) {
                $("#idMensaje").val("");
                $("#messagetextMensaje").val("");
    
            },
            error : function(xhr, status) {
            alert('Debe indicar por lo menos un valor en el formulario');
            },
            complete:function(){
                leerMensajes();
            }
        });
    
    }