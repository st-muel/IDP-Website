$(function() {
	var date = new Date("October 29, 2022 21:00:00");
	var date_to = new Date("October 30, 2022 21:00:00");

	Number.prototype.padLeft = function(base,chr){
		var len = (String(base || 10).length - String(this).length)+1;
		return len > 0? new Array(len).join(chr || '0')+this : this;
	}

	function date_to_string(d) {
		const month = d.toLocaleString('default', { month: 'short' });

		dformat = d.getDate().padLeft() + " " + month + " " + d.getFullYear() + ' ' +
			  [d.getHours().padLeft(),
			   d.getMinutes().padLeft()].join(':');

		return dformat
	}

	$("#slider-range").slider({
		range: true,
		min: date.getTime() / 1000,
		max: date_to.getTime() / 1000,
		step: 60 * 5,
		values: [date.getTime() / 1000, date_to.getTime() / 1000],
		slide: function (event, ui) {
			$("#amount-from").text("From: " + date_to_string(new Date(ui.values[0] * 1000)));
			$("#amount-to").text("To: " + date_to_string(new Date(ui.values[1] * 1000)));
		}
	});
	
	$("#amount-from").text("From: " + date_to_string(new Date($("#slider-range").slider("values", 0) * 1000)));
	$("#amount-to").text("To: " + date_to_string(new Date($("#slider-range").slider("values", 1) * 1000)));
})