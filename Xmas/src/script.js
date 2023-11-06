$(document).ready(function() {
  var $clickMe = $('.click-icon'),
      $card = $('.card');
      var $musicFrame = $('#musicFrame');
      $musicFrame.hide();
      
  $card.on('click', function() {
 
		$(this).toggleClass('is-opened');
    $clickMe.toggleClass('is-hidden');
    if ($musicFrame.is(":hidden")) {
      $musicFrame.show();
    } else {
      $musicFrame.hide();
    }
	});
});