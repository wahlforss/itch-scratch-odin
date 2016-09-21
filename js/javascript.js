var number = 16
function hover() {
	$("#grid > div").hover(function() {
			// $(this).css("background-color","#ff6161");
			$(this).addClass('clinton');

		}, 
		function() {
			// $(this).css("background-image", "url(' + images/clinton.jpg + ')");
			$(this).css('background-image', 'url("' +  images/clinton.jpg + '")');


		}

		);
}

function create_grid() {
	$('#grid').html('');
	for(i=1;i<= number*number;i++) {
		$('#grid').append('<div></div>');
	};
	var w = 480/number
	$('#grid > div').css({'width':w, 'height':w});
	$('#grid > div').addClass('trump');
	hover();
}

$(document).ready(function() {
	create_grid()

});

function create_grid_button() {
	number = prompt('How many rows and colons?')
	create_grid()

}



