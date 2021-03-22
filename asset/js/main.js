$(document).ready(function(){
    $('.slick-banner').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        pauseOnHover: false,
    });

    $('.slick-opinion').slick({
        infinite: true,
        slidesToShow: 3,    
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    const menu_has_child = $('.sp-has-child');
    const menu_main = $('.menu-main');
    const icon_dropdown = $('.ico-dropdown')
    const menu_item_inner = $('.menu-item-inner')
    const btn_close_menu = $('.btn-close-menu')
    const toggler = $('.toggler')
    var screen_1200 = window.matchMedia("(max-width: 1200px)")
    function removeHoverEvent(x) {
        if (screen_1200.matches)
        {
            $(icon_dropdown).click( 
                function(event) {
                    event.preventDefault();
                    $(this).parents().siblings('.sp-dropdown-inner').toggleClass("hover-show");
                    $(this).parents().siblings('.sp-dropdown-sub').toggleClass("hover-show");
            });
            $(btn_close_menu).click(
                function() {
                    $(menu_main).css("transform","translateX(100%)")
                    $(this).css("display","none")
            });
            $(toggler).click(
                function() {
                    $(menu_main).css("transform","translateX(0)")
                    $(btn_close_menu).css("display","flex")
            });
        }
        else {
            $(menu_has_child).hover(
                function() {
                    $(this).children('.sp-dropdown-inner').toggleClass("hover-show");
            });
            $(menu_item_inner).hover(
                function() {
                    $(this).children('.sp-dropdown-sub').toggleClass("hover-show");
            });
        }
    }   
    removeHoverEvent(screen_1200) ;
    screen_1200.addListener(removeHoverEvent)
 
  });
