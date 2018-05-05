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

    (function () {
        $('.products-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true
        });
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

    //----------------------<<tab-bar>>----------------------\\
    (function () {
        var flag=true;
        $('.tab-bar__link').on('click', function (e) {
            e.preventDefault();

            var
                $this = $(this),
                item = $this.closest('.tab-bar__item'),
                container = $this.closest('.recentapps'),
                content = container.find('.tab-content__item'),
                ndx = item.index(),
                activeItem = content.filter('.active'),
                reqItem = content.eq(ndx),
                duration = 500;

            if(flag){
                flag=false;
                item.addClass('active')
                    .siblings()
                    .removeClass('active');

                activeItem.fadeOut(duration, function() {
                    reqItem.fadeIn(duration, function() {
                        reqItem.addClass('active')
                            .siblings()
                            .removeClass('active');
                        flag = true;
                    });
                });
            }
        });
    }());

    //----------------------<<product demo tab-bar>>----------------------\\
    (function () {
        var flag=true;
        $('.tab-number').on('click', function (e) {
            e.preventDefault();

            var
                $this = $(this),
                item = $this.closest('.tab-number'),
                container = $this.closest('.demo-mainblock'),
                content = container.find('.demo-mainblock__main'),
                ndx = item.index(),
                activeItem = content.filter('.active'),
                reqItem = content.eq(ndx),
                duration = 500;

            if(flag){
                flag=false;
                item.addClass('active')
                    .siblings()
                    .removeClass('active');

                activeItem.fadeOut(duration, function() {
                    reqItem.fadeIn(duration, function() {
                        reqItem.addClass('active')
                            .siblings()
                            .removeClass('active');
                        flag = true;
                    });
                });
            }
        });
    }());

});