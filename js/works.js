var totalImages = [4, 4, 4, 2, 2, 2];
var imageTitles = ['cardinia','revolutionary','ambit','simonhomes','gostraight','babylon'];

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
		
		currentIndex = parseInt((this).attr('id'));
	});
	
	$('#next > a').click(function() {

		if(parseInt($('#current').text()) == totalImages[currentIndex]) {
			$('#current').text('1');
			//changeImage(1);
		}else{
			var next = $('#current').text();
				next = parseInt(next);
				next = next + 1;
			$('#current').text(next);
			changeImage(next);
		}
	
	});
	
	$('#previous > a').click(function() {
		
		if(parseInt($('#current').text()) == 1) {
			$('#current').text(totalImages[currentIndex]);
			//changeImage(totalImages[currentIndex]);
		}else{
			var prev = $('#current').text();
				prev = parseInt(prev);
				prev = prev - 1;
			$('#current').text(prev);
			//changeImage(prev);
		}
		
	});
	
});

function removeMarker() {
	
	
	var setText = $('a.current').text();
		setText.substring(0, setText.length - 2);
		
	$('a.current').text(setText);
	$('a.current').removeClass('current');

}

function changeImage(nextImageIndex) {
	var currentWork = parseInt($('a.current').attr('id'));
	var imageUrl = '\"#000 url(\'../img/' + imageTitles[currentWork];
		imageUrl = imageUrl + '/' + imageTitles[currentWork] + '-';
		imageUrl = imageUrl + nextImageIndex + '.png\')\"';
		
		
	$('#balls').text(imageUrl);
	$('#img.curwork').css('background', imageUrl);

}