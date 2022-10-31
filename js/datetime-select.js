$().ready(function() {
	var date = new Date("October 30, 2022 5:00:00");
	$('#date_picker_from').attr('min', date.toISOString().slice(0,new Date().toISOString().lastIndexOf(":")));
	$('#date_picker_to').attr('min', date.toISOString().slice(0,new Date().toISOString().lastIndexOf(":")));
	$('#date_picker_from').attr('value', date.toISOString().slice(0,new Date().toISOString().lastIndexOf(":")));
	$('#date_picker_to').attr('value', date.toISOString().slice(0,new Date().toISOString().lastIndexOf(":")));
})