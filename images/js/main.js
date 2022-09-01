$(function() {

    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        type: "single",
        min: 0,
        max: 100,
        postfix: "%",
        hide_min_max: true,

        extra_classes: "form-slider-range"
    });

    $(".form-block .form-select select").chosen({
        disable_search_threshold: 100,
        inherit_select_classes: true,
        width: '100%',
        no_results_text: "Упс, ничего не найдено!",
        placeholder_text_single: 'Выберите тип системы',
    });

    $('.burger-btn').on('click', function(){
        let $this = $(this);
        let $burgerPopup = $('.burger-popup');
        if ($this.hasClass('active')) {
            $this.removeClass('active');
            $burgerPopup.removeClass('active');
            $('html').removeClass('overflowHidden');
        } else {
            $this.addClass('active');
            $burgerPopup.addClass('active');
            $('html').addClass('overflowHidden');
        }
    });


    let $headerHeight = $('.header-block').height();
    $('.banner-block').css({'marginTop' : -$headerHeight+'px', 'paddingTop' : $headerHeight+'px'});

});