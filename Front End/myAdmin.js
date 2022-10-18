function leerAdmins(){
    //funcion GET METODO GET
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/admin/admin',
            type : 'GET',
            dataType : 'json',
    
            success : function(admins) {
                let cs=admins.items;
                $("#listAdmins").empty();
                for(i=0;i<cs.length;i++){
                    $("#listAdmins").append(cs[i].idadmin+"<b> "+cs[i].name+"</b> "+cs[i].email+" ");
                    $("#listAdmins").append(" "+"<button onclick='borrarAdmin("+cs[i].idadmin+")'>Borrar</button><br>");
                }
            },
            error : function(xhr, status) {
                alert('Ha sucedido un problema');
            }
        });
    }
    
    function guardarAdmin() {
        let idAdmin=$("#idAdmin").val();
        let nombreAdmin=$("#nombreAdmin").val();
        let emailAdmin=$("#emailAdmin").val();
        let passwordAdmin=$("#passwordAdmin").val();
            
        let data={
            idadmin:idAdmin,
            name:nombreAdmin,
            email:emailAdmin,
            password:passwordAdmin
        };
    
        //console.log(data);
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
    
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/admin/admin',
            type : 'POST',
            dataType : 'json',
            data:dataToSend,
            contentType: 'application/json',
            success : function(admins) {
                $("#idAdmin").val("");
                $("#nombreAdmin").val("");
                $("#emailAdmin").val("");
                $("#passwordAdmin").val("");
            },
            error : function(xhr, status) {
            //alert('Debe ingresar algun valor.');
            },
            complete:function(){
                leerAdmins();
            }
        });
    }
    
    function editarAdmin(){
        let idAdmin=$("#idAdmin").val();
        let nombreAdmin=$("#nombreAdmin").val();
        let emailAdmin=$("#emailAdmin").val();
        let passwordAdmin=$("#epasswordAdmin").val();
    
        let data={
            idadmin:idAdmin,
            name:nombreAdmin,
            email:emailAdmin,
            password:passwordAdmin
        };
    
        //console.log(data);
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
    
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/admin/admin',
            type : 'PUT',
            //dataType : 'json',
            data:dataToSend,
            contentType: 'application/json',
            success : function(admins) {
                $("#idAdmin").val("");
                $("#nombreAdmin").val("");
                $("#emailAdmin").val("");
                $("#passwordAdmin").val("");
            },
            error : function(xhr, status) {
            alert('Debe editar por lo menos un valor en el formulario');
            },
            complete:function(){
                leerAdmins();
            }
        });
    
    }
    
    function borrarAdmin(idAdmin){
       
        let data={
            idadmin:idAdmin,
        };
    
        //console.log(data);
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
    
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/admin/admin',
            type : 'DELETE',
            //dataType : 'json',
            data:dataToSend,
            contentType: 'application/json',
            success : function(admins) {
                $("#idAdmin").val("");
                $("#nombreAdmin").val("");
                $("#emailAdmin").val("");
                $("#passwordAdmin").val("");
            },
            error : function(xhr, status) {
            alert('Debe indicar por lo menos un valor en el formulario');
            },
            complete:function(){
                leerAdmins();
            }
        });
    
    }