$().ready(function() {
	$('#date_picker_from').attr('min', new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":")));
	$('#date_picker_to').attr('min', new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":")));
	$('#date_picker_from').attr('value', new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":")));
})