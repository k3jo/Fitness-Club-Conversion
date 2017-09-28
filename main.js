$(function() {
  // $('.photo-trigger').click(function() {
  //   $('.gallery-filter ul li a').slideToggle(500);
  // });//end slide toggle
  
 //  $(window).resize(function() {		
	// 	if (  $(window).width() > 700 ) {			
	// 		$('.responsive-nav-container').removeAttr('style');
	// 	 }
	// });//end resize

 //  $('.menu-trigger').click(function() {
 //    $('.responsive-nav-container').slideToggle(500);

 //  });//end slide toggle

 //  $(window).scroll(function() {
 //    $('.responsive-nav-container').slideToggle(500);
 //  });//end slide toggle

var heightening = function(){
  $('.teambox').each(function(){
    var height = 0;
    $('img', this).each(function(){
      if($(this).height() > height){
        height = $(this).height();
      }
    });
    $('.trainer-hiring').height(height);
  });
}
heightening();

$(window).resize(function(){
  heightening();
});


var modal = {};
// 2. When we click on the x, or close button, we hide the modal box

modal.showModal = function (){
  // when we click on the show button, 
  // we want to show the modal box
  $('.show-button').on('click', function(){
    $('.modal-container').addClass('show');
  });
};
modal.closeModal = function(){
  $('.close-button').on('click', function(){
    $('.modal-container').removeClass('show');
  });
};

modal.init = function(){
  this.showModal();
  this.closeModal();
};
$(function(){
  modal.init();
});


});//end ready