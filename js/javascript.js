
function hover() {
	$("#grid > div").hover(function() {
			$(this).css("background-color","#ff6161");
		}, 
		function() {
			$(this).css("background-color","#ff9393");

		}

		);
}

$(document).ready(function() {
	for(i=1;i <= 256; i++) {
	$("#grid").append("<div></div>");
};
	hover();

});
function create_grid() {
	var number = prompt('How many rows and colons?')
	$('#grid').html('');
	for(i=1;i<= number*number;i++) {
		$('#grid').append('<div></div>');
	};
	var w = 480/number
	$('#grid > div').css({'width':w, 'height':w});
	hover();
}


