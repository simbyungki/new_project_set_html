$(function(){
	//scroll 상태 체크
	var didScroll = false;
	$(window).scroll(function(){
		//scroll 상태 체크
        didScroll = true;
		
	});

    //btn top
    $('.btn-top').on('click', function(){
		$('html, document').animate({'scrollTop': 0}, 500, 'easeInQuint');
    });
});

//New Tab UI 2020.08
$.fn.commonTabUI = function(){
    var thisTabModule = $(this);
    $(this).find('.menu li a').on('click', function(){
        var idx = $(this).parent('li').index();
        thisTabModule.find('.menu li').removeClass('active').eq(idx).addClass('active');
        if(thisTabModule.find('.cont').length){
            thisTabModule.find('.cont').removeClass('active').eq(idx).addClass('active');
        }
    });
}

//Layer Content
function layerContShow(thisClass){
	$('.'+thisClass).show();
	scrollDisable();
}
function layerContHide(thisClass){
	$('.'+thisClass).hide();
	scrollAble();
}

//스크롤 막기
function scrollDisable(){
    $('body').addClass('scroll-disable').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
    });
}
function scrollAble(){
    $('body').removeClass('scroll-disable').off('scroll touchmove mousewheel');
}