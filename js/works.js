var totalImages = [4, 4, 4, 2, 2, 2];

$(document).ready(function() {
	
	var currentIndex = 0;
		$('#total').text(totalImages[currentIndex]);
	
	$('#worksNavigation a').click(function() { 
			
		if($(this).hasClass('current')) {
			//Do Nothing
		}else{
			removeMarker();
			$(this).text($(this).text() + ' +');
			$(this).addClass('current');
		}
		
		var currentIndex = parseInt(this.attr('id'));
		$('#testarea').text(currentIndex);
		
	});
	
	$('#next a').click(function() {

		if(parseInt($('#current').text()) == totalImages[currentIndex]) {
			$('#current').text('1');
			nextImage(1);
		}else{
			var next = $('#current').text();
				next = parseInt(next);
				next = next + 1;
				$('#current').text(next);
				nextImage(next);
		}
	
	});
	
	$('#previous').click(function() {
		
		if(parseInt($('#current').text()) == 1) {
			$('#current').text(totalImages[currentIndex]);
			prevImage(totalImages[currentIndex]);
		}else{
			var prev = $('#current').text();
				prev = parseInt(prev);
				prev = prev - 1;
				$('#current').text(prev);
				prevImage(prev);
		}
		
	});
	
});

function removeMarker() {
	
	
	var setText = $('a.current').text();
		setText.substring(0, setText.length - 2);
		
		$('a.current').text(setText);
		$('a.current').removeClass('current');

}

function nextImage(var current) {
	
	

}

function prevImage(var current) {
	
	

}