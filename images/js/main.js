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

    // $(".form-block .form-select select").chosen({
    //     disable_search_threshold: 100,
    //     inherit_select_classes: true,
    //     width: '100%',
    //     no_results_text: "Упс, ничего не найдено!",
    //     placeholder_text_single: 'Выберите тип системы',
    // });

    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
            //if ($this.children('option').eq(i).is(':selected')){
            //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
            //}
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });
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


    // Нажатие на клавишу Esc
    $(document).on('keyup.esc_keyup', function(keyUp){
        if (keyUp.keyCode
            == 27) {
                $('.burger-btn').removeClass('active');
                $('.burger-popup').removeClass('active');
                $('html').removeClass('overflowHidden');

            return false;
        };
    });


    $('body').removeClass('onload-styles');
});