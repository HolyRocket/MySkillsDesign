	if(window.localStorage.length > 0)
{
	for(var i = 0; i < window.localStorage.length; i++)
	{
		var tit = window.localStorage.key(i);
		
		var  cont_pend = window.localStorage.getItem(tit);
		
		
		var contenido = '<h3>'+tit+'</h3><p id="parrafo'+i+'">'+cont_pend+
			'<br><button>Eliminar</button></p>';
		
		
		var nuevo_pendiente = $('<div data-role="collapsible" data-collapsed="true" id="div'+i+'"></div>')
		
		
		var id = 'div'+i;
		
	
		nuevo_pendiente.html( contenido );
		$('#ac_pend').append( nuevo_pendiente );
		
		
	
		$('#ac_pend').delegate('#parrafo'+i+' button','click',
			{variable:tit, div:id},eliminar);
	}
}

function eliminar(argumento){
	
	if(confirm('¿Está Seguro?'))
	{
		
		window.localStorage.removeItem(argumento.data.variable);
		
		$('#ac_pend div').remove('#'+argumento.data.div);
	}
} 

	