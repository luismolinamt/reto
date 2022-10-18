function leerCategory(){
    $.ajax({
        url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/category/category',
        type : 'GET',
        dataType : 'json',

        success : function(category) {
            let cs=category.items;
            $("#listCategory").empty();
            for(i=0;i<cs.length;i++){
                           
                $("#listCategory").append(cs[i].id+" <b>"+cs[i].name+"</b> "+cs[i].description+" ");
                $("#listCategory").append(" "+"<button onclick='borrarcategory("+cs[i].id+")'>Borrar</button><br>");
            }
        },
        error : function(xhr, status) {
            alert('Ha sucedido un problema');
        }
    });
}

function guardarCategory() {
    let idCategory=$("#idCategory").val();
    let nameCategory=$("#nameCategory").val();
    let descriptionCategory=$("#descriptionCategory").val();
    

    let data={
        id:idCategory,
        name:nameCategory,
        description:descriptionCategory
        
    };

    //console.log(data);
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/category/category',
        type : 'POST',
        dataType : 'json',
        data:dataToSend,
        contentType: 'application/json',
        success : function(category) {
            $("#idCategory").val("");
            $("#nameCategory").val("");
            $("#descriptionCategory").val("");
          
        },
        error : function(xhr, status) {
        //alert('Debe ingresar algun valor.');
        },
        complete:function(){
            leerCategory();
        }
    });
}

function editarCategory(){
    let idCategory=$("#idCategory").val();
    let nameCategory=$("#nameCategory").val();
    let descriptionCategory=$("#descriptionCategory").val();
        

    let data={
        id:idCategory,
        name:nameCategory,
        description:descriptionCategory,
        
    };

    //console.log(data);
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/category/category',
        type : 'PUT',
        //dataType : 'json',
        data:dataToSend,
        contentType: 'application/json',
       
        success : function(category) {
            $("#idCategory").val("");
            $("#nameCategory").val("");
            $("#descriptionCategory").val("");
              
            },
            error : function(xhr, status) {
            alert('Debe editar por lo menos un valor en el formulario');
            },
            complete:function(){
                leerCategory();
            }
        });
    
    }
    
    function borrarCategory(idCategory){
       
        let data={
            id:idCategory,
        };

    //console.log(data);
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/category/category',
        type : 'DELETE',
        //dataType : 'json',
        data:dataToSend,
        contentType: 'application/json',
        success : function(category) {
            $("#idCategory").val("");
            $("#nameCategory").val("");
            $("#descriptionCategory").val("");
          
        },
        error : function(xhr, status) {
        alert('Debe indicar por lo menos un valor en el formulario');
        },
        complete:function(){
            leerCategory();
        }
    });

}