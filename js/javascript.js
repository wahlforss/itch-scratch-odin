$(document).ready(function() {
	for(i=1;i <= 256; i++) {
	$("#grid").append("<div></div>");
};

});
$(document).ready(function() {
	$("#grid > div").hover(function() {
			$(this).css("background-color","#ff6161");
		}, 
		function() {
			$(this).css("background-color","#ff9393");

		}

		);
});

