import $ from 'jquery';

// 풀페이지
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


// 햄버거 메뉴
const burger = $('.menuTrigger');

burger.each(function(index){
  const $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-' + (index+1));
  })
});