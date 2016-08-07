$('#formulario').on('submit',function( ){
	var total_divs = $('#ac_pend > div' ).length;

	
	var tit = $('#tit_pend').val();
	var cont_pend = $('#detalles').val()
	
	window.localStorage.setItem(tit,cont_pend);
	
	var nuevo_pendiente = $('<div data-role="collapsible" data-collapsed="true" id="div'+total_divs+'"></div>')
	
	
	var contenido = '<h3>'+tit+'</h3><p id="parrafo'+total_divs+'">'+cont_pend+
		'<br><button class="ui-btn">Eliminar</button></p>';

	var id = 'div'+total_divs;
	
	nuevo_pendiente.html( contenido );
	$('#ac_pend').append( nuevo_pendiente );
	$('#ac_pend').collapsibleset('refresh');

	$('#ac_pend').delegate('#parrafo'+total_divs+' button','click',
		{variable:tit, div:id},eliminar);

$.mobile.navigate('#perfil');
	
	return false;
});


