$(document).ready(function () {

    //----------------------<<svg for ie>>----------------------\\
    (function () {
        svg4everybody();
    }());

    //----------------------<<slider>>----------------------\\
    (function () {
        $('.slider').slick();
    }());

    (function () {
        $('.news-slider').slick();
    }());

    //----------------------<<acco>>----------------------\\
    (function () {
        var flag = true;

        $('.acco-item__link').on('click', function (e) {
            e.preventDefault();
            var
                $this = $(this),
                container = $this.closest('.acco-list'),
                item = $this.closest('.acco-item'),
                currentContent = item.find('.acco-item__text'),
                duration = 500;

            if(flag){
                flag = false;
                if(!item.hasClass('active')){
                    item.addClass('active')
                        .siblings()
                        .removeClass('active')
                        .find('.acco-item__text')
                        .slideUp(500);
                    currentContent.slideDown(duration, function () {
                        flag = true;
                    });
                } else{
                    item.removeClass('active');
                    currentContent.slideUp(duration, function () {
                        flag = true;
                    });
                }
            }
        });
    }());

});