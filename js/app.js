/*global $ */
$(document).ready(function() {

    (function UIModule() {
        function initialize() {
            $('#nav').affix({
                offset: {
                    top: $("header").outerHeight(true) - 50
                }
            });
        }
        //public API
        return {
            init: initialize
        };

    }()).init();

});

