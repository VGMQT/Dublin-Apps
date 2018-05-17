//----------------------<<google map>>----------------------\\
function initMap() {
    var myLatLng = {lat: 53.350283, lng: -6.266257};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 16,
        disableDefaultUI: true,
        zoomControl: true
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Dublin's iPad Apps"
    });
}

//----------------------<<custom code>>----------------------\\
$(document).ready(function () {

    //----------------------<<svg for ie>>----------------------\\
    (function () {
        svg4everybody();
    }());

    //----------------------<<slider>>----------------------\\
    (function () {
        $('.slider-homepage').slick();
    }());

    (function () {
        $('.slider-news').slick();
    }());

    (function () {
        $('.slider-products').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true
        });
    }());

    //----------------------<<acco>>----------------------\\
    (function () {
        var flag = true;

        $('.acco__link').on('click', function (e) {
            e.preventDefault();
            var
                $this = $(this),
                container = $this.closest('.acco'),
                item = $this.closest('.acco__item'),
                currentContent = item.find('.acco__content'),
                duration = 500;

            if(flag){
                flag = false;
                if(!item.hasClass('active')){
                    item.addClass('active')
                        .siblings()
                        .removeClass('active')
                        .find('.acco__content')
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
                container = $this.closest('.container'),
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
                container = $this.closest('.product-demonstration'),
                content = container.find('.product-demonstration__content'),
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

    //----------------------<<modal>>----------------------\\
    (function () {
        $('#modal-order').iziModal({
            width: '42.5rem',
            radius: 5,
            overlayColor: 'rgba(0, 0, 0, 0.8)',
            transitionIn: 'fadeInDown',
            focusInput: false
        });

        $('#modal-proceed').iziModal({
            width: '26.25rem',
            radius: 5,
            overlayColor: 'rgba(0, 0, 0, 0.8)',
            focusInput: false
        });

        $(document).on('click', '.trigger-order', function (event) {
            event.preventDefault();
            $('#modal-order').iziModal('open');
        });

        $(document).on('click', '.trigger-proceed', function (event) {
            event.preventDefault();
            $('#modal-proceed').iziModal('open');
        });
    }());

    //----------------------<<counter>>----------------------\\
    (function () {

        $('.count-arrows__down').click(function () {

            var
                $this = $(this),
                container = $this.closest('.app-preview__item'),
                qty = container.find('.input-digits'),
                count = parseInt(qty.val()) - 1;

            count = count < 1 ? 1 : count;
            qty.val(count);
            qty.change();
            return false;
        });

        $('.count-arrows__up').click(function () {

            var
                $this = $(this),
                container = $this.closest('.app-preview__item'),
                qty = container.find('.input-digits');

            qty.val(parseInt(qty.val()) + 1);
            qty.change();
            return false;
        });
    }());

    //----------------------<<jquery-mask>>----------------------\\
    (function () {
        $('.input-digits').mask('000');
        $('#credit').mask('0000-0000-0000-0000');
    }());

});