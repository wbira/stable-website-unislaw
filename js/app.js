/*global $ */
$(document).ready(function() {

    (function UIModule() {
        function initialize() {
        	//todo: refactoring
            $('#nav').affix({
                offset: {
                    top: $("header").outerHeight(true) - 50
                }
            });

            //apply google listener
            google.maps.event.addDomListener(window, 'load', mapInitializer);
        }

        function mapInitializer() {
            var mapCanvas = document.getElementById('map'),
            	coords = new google.maps.LatLng(50.7135,16.2406),
            	mapOptions = {
            		center: coords,
            		zoom: 11,
            		mapTypeId: google.maps.MapTypeId.ROADMAP,
            	},
            	markerOptions = {
            		position: coords,
            		title: 'Stajnia u Kalinów'
            	}
                map;

            map = new google.maps.Map(mapCanvas, mapOptions);
            markerOptions.map = map;
            new google.maps.Marker(markerOptions);
        }

        //public API
        return {
            init: initialize
        };

    }()).init();

});
