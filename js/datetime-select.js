var date_to_string;

$().ready(function() {
	var date = new Date("October 30, 2022 5:00:00");
	var date_to = new Date("October 30, 2022 6:00:00");
	date_to_string = date_to.toISOString();


	$('#date_picker_from').attr('min', date.toISOString().slice(0,new Date().toISOString().lastIndexOf(":")));
	$('#date_picker_to').attr('min', date.toISOString().slice(0,new Date().toISOString().lastIndexOf(":")));
	$('#date_picker_from').attr('value', date.toISOString().slice(0,new Date().toISOString().lastIndexOf(":")));
	$('#date_picker_to').attr('value', date_to.toISOString().slice(0,new Date().toISOString().lastIndexOf(":")));

	$("#date_picker_to").on("change", function(e) {
		var date = new Date("October 30, 2022 5:00:00");
		var curr = new Date($(this).val());
		curr.setHours(curr.getHours() + 8);
		if (curr < date) {
			alert("You can't time travel!");
			e.preventDefault();

			var prev = new Date(date_to_string);
			$(this).val(prev.toISOString().slice(0,new Date().toISOString().lastIndexOf(":")));
		}
		else {
			date_to_string = curr.toISOString();
		}
	})
})