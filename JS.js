
(function($){
    $(document).ready(function(){
        $(window).scroll(function() {
            var navbox = jQuery('#Navigation');
            var navboxh = jQuery('#nav-container-mobile');
            var prof = jQuery('#Profile').offset().top - $(window).scrollTop();
            var exper = jQuery('#Experience').offset().top - $(window).scrollTop();
            var skill = jQuery('#Skills').offset().top - $(window).scrollTop();
            var portf = jQuery('#Portfolio').offset().top - $(window).scrollTop();
            var cont = jQuery('#Contact').offset().top - $(window).scrollTop();

            //make the nav bar float along with the page
            if(prof < 40) {
                navbox.addClass('nav-float');
                navbox.removeClass('nav-scroll');
            }

            if(prof < 1) {
                navboxh.addClass('nav-float-mobile');
                navboxh.removeClass('nav-scroll');
            }

            //make the nav bar lock back into position
            if(prof > 39) {
                navbox.addClass('nav-scroll');
                navbox.removeClass('nav-float');
            }

            if(prof > 0) {
                navboxh.addClass('nav-scroll');
                navboxh.removeClass('nav-float-mobile');
            }

            //profile
            if(exper > 0) {
                var element = jQuery('#nav-profile-link');
                var elementh = jQuery('#nav-profile-link-mobile')
                element.siblings('li').removeClass('nav-active inactiveLink');
                elementh.siblings('li').removeClass('nav-active inactiveLink');
                element.siblings('li').children('a').css('color','#aeaeae');
                elementh.siblings('li').children('a').css('color','#aeaeae');
                element.addClass('nav-active inactiveLink');
                elementh.addClass('nav-active inactiveLink');
                element.children('a').css('color','white');
                elementh.children('a').css('color','white');
            }
            //experience
            if(exper < 1 && skill > 0) {
                var element = jQuery('#nav-experience-link');
                var elementh = jQuery('#nav-experience-link-mobile');
                element.siblings('li').removeClass('nav-active inactiveLink');
                elementh.siblings('li').removeClass('nav-active inactiveLink');
                element.siblings('li').children('a').css('color','#aeaeae');
                elementh.siblings('li').children('a').css('color','#aeaeae');
                element.addClass('nav-active inactiveLink');
                elementh.addClass('nav-active inactiveLink');
                element.children('a').css('color','white');
                elementh.children('a').css('color','white');
            }
            //skills
            if(skill < 1 && portf > 0) {
                var element = jQuery('#nav-skills-link');
                var elementh = jQuery('#nav-skills-link-mobile');
                element.siblings('li').removeClass('nav-active inactiveLink');
                elementh.siblings('li').removeClass('nav-active inactiveLink');
                element.siblings('li').children('a').css('color','#aeaeae');
                elementh.siblings('li').children('a').css('color','#aeaeae');
                element.addClass('nav-active inactiveLink');
                elementh.addClass('nav-active inactiveLink');
                element.children('a').css('color','white');
                elementh.children('a').css('color','white');
            }
            //portfolio
            if(portf < 1) {
                var element = jQuery('#nav-portfolio-link');
                var elementh = jQuery('#nav-portfolio-link-mobile');
                element.siblings('li').removeClass('nav-active inactiveLink');
                elementh.siblings('li').removeClass('nav-active inactiveLink');
                element.siblings('li').children('a').css('color','#aeaeae');
                elementh.siblings('li').children('a').css('color','#aeaeae');
                element.addClass('nav-active inactiveLink');
                elementh.addClass('nav-active inactiveLink');
                element.children('a').css('color','white');
                elementh.children('a').css('color','white');
            }

            //contact
            if((cont-jQuery('#Contact').height()) < 1) {
                var element = jQuery('#nav-contact-link');
                var elementh = jQuery('#nav-contact-link-mobile');
                element.siblings('li').removeClass('nav-active inactiveLink');
                elementh.siblings('li').removeClass('nav-active inactiveLink');
                element.siblings('li').children('a').css('color','#aeaeae');
                elementh.siblings('li').children('a').css('color','#aeaeae');
                element.addClass('nav-active inactiveLink');
                elementh.addClass('nav-active inactiveLink');
                element.children('a').css('color','white');
                elementh.children('a').css('color','white');
            }
        });
        //desktop navbar scroll animation
        $('#nav-container ul>li.nav-box>a').on('click', function(){
            var href = $(this).attr('href');
            jQuery('html,body').animate({scrollTop: jQuery(href).offset().top}, 300);
        });

        //mobile navbar scroll animation
        $('#nav-container-mobile ul>li>a').on('click', function(){
            var href = $(this).attr('href');
            jQuery('html,body').animate({scrollTop: jQuery(href).offset().top}, 300);
        });
        $('#nav-indicator-link').on('click', function(){
            var href = $(this).attr('href');
            jQuery('html,body').animate({scrollTop: jQuery(href).offset().top}, 300);
        });
    });
})(jQuery);
        