 
var pendientes_actuales = new Array();
function guardar_pendientes(){
		pendientes_actuales.length = 0;
		
$('#ac_pend').each(function() {
	pendientes_actuales.push($(this).html());
	});
	
var pendientes_guardados = JSON.stringify( pendientes_actuales );

localStorage.setItem('pendientes', pendientes_guardados);


}
 $('form').on('submit',function( ){
	
		var nuevo_pend = $('#tit_pend').val( );
		var det_pendiente = $('#detalles').val( );
		
  		var nueva_entrada = $('<div></div>');
		
  		var contenido = '<h3>' + nuevo_pend + '</h3>' + '<p> ' + det_pendiente + '</p>';
  
  nueva_entrada.html( contenido );
  
  nueva_entrada.collapsible({collapsible:true,collapsed:true});
  
  $('#ac_pend').append( nueva_entrada );
  
  $('#ac_pend').collapsibleset('refresh');
  
  		$.mobile.navigate('#pendientes');
		
		return false;
	}
);








$(document).on( 'ready', function() {
	
	var cosas_guardadas = window.localStorage.getItem("pendientes");
	
	if (cosas_guardadas != "undefined" && 
		cosas_guardadas != null && 
		cosas_guardadas != "") 
	{
		
			var pendientes = JSON.parse(cosas_guardadas); 

	$.each(pendientes, function(indice, valor){
		
		var nuevo_div = $('<div></div>');
		
		var total_divs = $('#ac_pend > div' ).length;
		
		nuevo_div.html( valor );
		
		$('#ac_pend').append( nuevo_div );
});		
}
});

