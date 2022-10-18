

function leerClientes(){
//funcion GET METODO GET
    $.ajax({
        url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        //data : { id : 123 }, ESTE METODO GET NO NECESITA INFORMACION
        type : 'GET',
        dataType : 'json',

        success : function(clientes) {
            let cs=clientes.items;
            $("#listClientes").empty();
            for(i=0;i<cs.length;i++){
                //$("#listClientes").append("<b>"+cs[i].name+"</b> "+cs[i].email+"<br>");
                $("#listClientes").append(cs[i].idclient+" <b>"+cs[i].name+"</b> "+cs[i].email+"</b> "+cs[i].password+"</b> "+cs[i].age+" ");
                $("#listClientes").append(" "+"<button onclick='borrarCliente("+cs[i].idclient+")'>Borrar</button><br>");
            }
        },
        error : function(xhr, status) {
            alert('Ha sucedido un problema');
        }
    });
}

function guardarCliente() {
    let idCliente=$("#idCliente").val();
    let nombreCliente=$("#nombreCliente").val();
    let emailCliente=$("#emailCliente").val();
    let passwordCliente=$("#passwordCliente").val();
    let edadCliente=$("#edadCliente").val();

    let data={
        idclient:idCliente,
        name:nombreCliente,
        email:emailCliente,
        password:passwordCliente,
        age:edadCliente
    };

    //console.log(data);
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'POST',
        dataType : 'json',
        data:dataToSend,
        contentType: 'application/json',
        success : function(clientes) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#passwordCliente").val("");
            $("#edadCliente").val("");
        },
        error : function(xhr, status) {
        //alert('Debe ingresar algun valor.');
        },
        complete:function(){
            leerClientes();
        }
    });
}

function editarCliente(){
    let idCliente=$("#idCliente").val();
    let nombreCliente=$("#nombreCliente").val();
    let emailCliente=$("#emailCliente").val();
    let passwordCliente=$("#epasswordCliente").val();
    let edadCliente=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombreCliente,
        email:emailCliente,
        password:passwordCliente,
        age:edadCliente
    };

    //console.log(data);
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'PUT',
        //dataType : 'json',
        data:dataToSend,
        contentType: 'application/json',
        success : function(clientes) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#passwordCliente").val("");
            $("#edadCliente").val("");
        },
        error : function(xhr, status) {
        alert('Debe editar por lo menos un valor en el formulario');
        },
        complete:function(){
            leerClientes();
        }
    });

}

function borrarCliente(idCliente){
   
    let data={
        idclient:idCliente,
    };

    //console.log(data);
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'DELETE',
        //dataType : 'json',
        data:dataToSend,
        contentType: 'application/json',
        success : function(clientes) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#passwordCliente").val("");
            $("#edadCliente").val("");
        },
        error : function(xhr, status) {
        alert('Debe indicar por lo menos un valor en el formulario');
        },
        complete:function(){
            leerClientes();
        }
    });

}