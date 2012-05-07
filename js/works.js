var totalImages = [4, 4, 4, 2, 2, 2];
var imageTitles = ['cardinia','revolutionary','ambit','simonhomes','gostraight','babylon'];
var currentIndex = 0;
var currentGallery = imageTitles[0];
//$.backstretch('img/' + currentGallery + '/' + currentGallery + currentIndex + '.png');

$(document).ready(function() {

	$('#total').text(totalImages[currentIndex]);
	
	$('#worksNavigation a').click(function() { 
			
		if(!($(this).hasClass('current'))) {
			removeMarker(this);
			$(this).text($(this).text() + ' +');
			$(this).addClass('current');
		}
		currentIndex = parseInt($(this).attr('id'));
		$('#total').text(totalImages[currentIndex]);
		
	});
	
	$('#next > a').click(function() {
		
	
	});
	
});

function removeMarker(currentText) {
	
	var linkText = $('a.current').text();
		linkText = linkText.substring(0, (linkText.length - 2))
	$('a.current').text(linkText);
	$('a.current').removeClass('current');
	
}

function changeImage(nextImageIndex) {

	

}