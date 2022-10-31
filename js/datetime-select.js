$().ready(function() {
	$('#date_picker_from').attr('min', new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":")));
	$('#date_picker_to').attr('min', new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":")));
	$('#date_picker_from').attr('value', new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":")));
})

$('.search-btn').on('click', function(e) {
	e.preventDefault();
	document.location.href = '/IDP-Website/success'
})
