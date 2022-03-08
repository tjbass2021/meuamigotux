$(document).scroll(function(){
    var topWindow = $(window).scrollTop();
    let num = 1;
    console.log(`topWindow é: ${topWindow}, teste é: ${num}`);
    
    if(topWindow > 179){
        $('.menu').addClass('menu-fixed')
        $('main').addClass('fixed')
        if(topWindow > 191){
            $('aside').addClass('fixed-aside')
        } else if (topWindow < 191){
            $('aside').removeClass('fixed-aside')
        }
    } else{
        $('.menu').removeClass('menu-fixed');
        $('main').removeClass('fixed');

    };

})