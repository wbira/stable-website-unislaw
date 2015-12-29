$(document).ready(function() {

    (function UIModule() {

        function initialize() {
            $('#nav').affix({
                offset: {
                    top: $("header").outerHeight(true)
                }
            });
        }
        //public API
        return {
            init: initialize
        };

    }()).init();

});
