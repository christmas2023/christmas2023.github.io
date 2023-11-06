$(document).ready(function() {
  var $clickMe = $('.click-icon'),
      $card = $('.card');
      var $musicFrame = $('#musicFrame');
      $musicFrame.hide();
  const greeting = document.getElementById('greeting');
  $card.on('click', function() {
    greeting.style.display = 'block';
		$(this).toggleClass('is-opened');
    $clickMe.toggleClass('is-hidden');
    if ($musicFrame.is(":hidden")) {
      $musicFrame.show();
    } else {
      $musicFrame.hide();
    }
	});
});
