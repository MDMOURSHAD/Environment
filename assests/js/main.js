

jQuery(document).ready(function($) {

        
        

$('.video').magnificPopup({
            type: 'iframe',
            // other options
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',

                patterns: {
                    youtube: {
                        index: 'youtube.com/',

                        id: 'v=',

                        src: 'https://www.youtube.com/embed/%id%'
                    },
                },

             srcAction: 'iframe_src', 
            }
        });

        /*-- Mobile Menu Show & Hide --*/

        $(".menu-toggle-btn").click(function(){
            $(".main-menu").toggleClass("open-nav");
        });

        /*-- Mobile Menu Show & Hide --*/

        $(".open-search-box").click(function(){
            $(".search-box").toggleClass("search-box-show");
        });

        /*-- Menu Sticky --*/

        var windows = $(window);
        var sticky = $('.header-sticky')
        windows.on('scroll', function() {
            var scroll = windows.scrollTop();
            if (scroll < 250) {
                sticky.removeClass('stick');
            } else {
                sticky.addClass('stick');
            }
        });

        /*-- Counter Up --*/

        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });

            
});