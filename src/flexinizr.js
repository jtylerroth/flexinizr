if (window.jQuery) {

    //functionality working, but needs cleanup and further testing

    function showSmall(query) {
        if (query.matches) {
            $('[data-class-sm]').each(function (index, element) {
                $(element).addClass($(this).attr('data-class-sm'));
            });
        }
        else {
            $('[data-class-sm]').each(function (index, element) {
                $(element).removeClass($(this).attr('data-class-sm'));
            });
        }
    }

    function showMedium(query) {
        if (query.matches) {
            $('[data-class-md]').each(function (index, element) {
                $(element).addClass($(this).attr('data-class-md'));
            });
        }
        else {
            $('[data-class-md]').each(function (index, element) {
                $(element).removeClass($(this).attr('data-class-md'));
            });
        }
    }

    function showLarge(query) {
        if (query.matches) {
            $('[data-class-lg]').each(function (index, element) {
                $(element).addClass($(this).attr('data-class-lg'));
            });
        }
        else {
            $('[data-class-lg]').each(function (index, element) {
                $(element).removeClass($(this).attr('data-class-lg'));
            });
        }
    }

    //Adaptive Media Classes
    if (matchMedia) {
        var small = window.matchMedia("(max-width: 767px)");
        var medium = window.matchMedia("(min-width: 768px) and (max-width: 1199px)");
        var large = window.matchMedia("(min-width: 1200px)");
        small.addListener(showSmall);
        medium.addListener(showMedium);
        large.addListener(showLarge);
        showSmall(small);
        showMedium(medium);
        showLarge(large);
    }

}

else {
    console.warn("jQuery has not been loaded. Flexinizr requires jQuery to function properly.");
}