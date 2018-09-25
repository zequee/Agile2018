function save() {
 
    var database = firebase.database();

    var calle = document.getElementById('calleId').value;   
    var entre1 = document.getElementById('entre1Id').value;
    var entre2 = document.getElementById('entre2Id').value;    
    var altura = document.getElementById('alturaId').value;    
    var asunto = document.getElementById('asuntoId');
    var id_asunto = asunto.options[asunto.selectedIndex].value;
    var contacto = document.getElementById('contactoId').value;    
    var comentario = document.getElementById('comentarioId');
   
    var KeyRec = "";    

    var rtaSaveRec = database.ref('reclamos');
    rtaSaveRec.orderByChild("calle").equalTo(calle).on('child_added', function (ss) {
        var rtaSaveRec = ss.val();
        rtaSaveRec.key = ss.key;
        KeyRec = rtaSaveRec.key;        
    });
    rtaSaveRec.orderByChild("entre1").equalTo(entre1).on('child_added', function (ss) {
        var rtaSaveRec = ss.val();
        rtaSaveRec.key = ss.key;
        KeyRec = rtaSaveRec.key;        
    });
    rtaSaveRec.orderByChild("entre2").equalTo(entre2).on('child_added', function (ss) {
        var rtaSaveRec = ss.val();
        rtaSaveRec.key = ss.key;
        KeyRec = rtaSaveRec.key;        
    });
    rtaSaveRec.orderByChild("altura").equalTo(altura).on('child_added', function (ss) {
        var rtaSaveRec = ss.val();
        rtaSaveRec.key = ss.key;
        KeyRec = rtaSaveRec.key;        
    });
    rtaSaveRec.orderByChild("asunto").equalTo(id_asunto).on('child_added', function (ss) {
        var rtaSaveRec = ss.val();
        rtaSaveRec.key = ss.key;
        KeyRec = rtaSaveRec.key;        
    });
    rtaSaveRec.orderByChild("contacto").equalTo(contacto).on('child_added', function (ss) {
        var rtaSaveRec = ss.val();
        rtaSaveRec.key = ss.key;
        KeyRec = rtaSaveRec.key;        
    });
    rtaSaveRec.orderByChild("comentario").equalTo(comentario).on('child_added', function (ss) {
        var rtaSaveRec = ss.val();
        rtaSaveRec.key = ss.key;
        KeyRec = rtaSaveRec.key;        
    });  
    alert(KeyRec);
    
    /*
	if(KeyPue =  KeyRec)
	{
		alert("ok");
	}
	else 
	{
		alert("NOOOOOO");
	}
	*/

}