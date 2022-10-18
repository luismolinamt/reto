function leerScores(){
    //funcion GET METODO GET
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/score/score',
            type : 'GET',
            dataType : 'json',
    
            success : function(scores) {
                let cs=scores.items;
                $("#listScores").empty();
                for(i=0;i<cs.length;i++){
                    $("#listScores").append(cs[i].idscore+"<b> "+cs[i].score+"<b> "+cs[i].scoreText+" ");
                    $("#listScores").append(" "+"<button onclick='borrarScore("+cs[i].idscore+")'>Borrar</button><br>");
                }
            },
            error : function(xhr, status) {
                alert('Ha sucedido un problema');
            }
        });
    }
    
    function guardarScore() {
        let idScore=$("#idScore").val();
        let scoreScore=$("#scoreScore").val();
        let scoreTextScore=$("#scoreTextScore").val();
                    
        let data={
            idscore:idScore,
            score:scoreScore,
            scoreText:scoreTextScore,
        };
    
        //console.log(data);
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
    
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/score/score',
            type : 'POST',
            dataType : 'json',
            data:dataToSend,
            contentType: 'application/json',
            success : function(scores) {
                $("#idScore").val("");
                $("#scoreScore").val("");
                $("#scoreTextScore").val("");
            },
            error : function(xhr, status) {
            //alert('Debe ingresar algun valor.');
            },
            complete:function(){
                leerScores();
            }
        });
    }
    
    function editarScore(){
        let idScore=$("#idScore").val();
        let scoreScore=$("#scoreScore").val();
        let scoreTextScore=$("#scoreTextScore").val();
    
        let data={
            idscore:idScore,
            score:scoreScore,
            scoreText:scoreTextScore,
        };
    
        //console.log(data);
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
    
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/score/score',
            type : 'PUT',
            //dataType : 'json',
            data:dataToSend,
            contentType: 'application/json',
            success : function(scores) {
                $("#idScore").val("");
                $("#scoreScore").val("");
                $("#scoreTextScore").val("");
            },
            error : function(xhr, status) {
            alert('Debe editar por lo menos un valor en el formulario');
            },
            complete:function(){
                leerScores();
            }
        });
    
    }
    
    function borrarScore(idScore){
       
        let data={
            idscore:idScore,
        };
    
        //console.log(data);
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
    
        $.ajax({
            url : 'https://gbc5569f3bee535-oc027hi9hd82up8g.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/score/score',
            type : 'DELETE',
            //dataType : 'json',
            data:dataToSend,
            contentType: 'application/json',
            success : function(scores) {
                $("#idScore").val("");
                $("#scoreScore").val("");
                $("#scoreTextScore").val("");
            },
            error : function(xhr, status) {
            alert('Debe indicar por lo menos un valor en el formulario');
            },
            complete:function(){
                leerScores();
            }
        });
    
    }