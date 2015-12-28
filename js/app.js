$(document).ready(function() {

    (function UIModule() {

        function initialize() {
            $('#nav').affix({
                offset: {
                    top: $('header').height()
                }
            });
        }
        //public API
        return {
            init: initialize
        };

    }()).init();

});
