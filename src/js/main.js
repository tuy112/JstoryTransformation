import $ from 'jquery';

// 1. FullPage Controller
$(function(){
    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',
		sectionsColor:['#d09aff']
	});
})


// 2. Hamburger Menu
const burger = $('#menuTrigger');
const bar = $('#navBar');

burger.each(function(index){
  const $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-' + (index+1));

    if ($this.hasClass('active-' + (index+1))) {
      bar.css('display', 'block');
    } else {
      bar.css('display', 'none');
    }
  })
});