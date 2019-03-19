
$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDeWa1AWWUwe7nc9GxRJWO2OwDmKlOnAk0",
        authDomain: "music-project-4f3e3.firebaseapp.com",
        databaseURL: "https://music-project-4f3e3.firebaseio.com",
        projectId: "music-project-4f3e3",
        storageBucket: "music-project-4f3e3.appspot.com",
        messagingSenderId: "597499108209"
    };
    firebase.initializeApp(config);

    $("#add-country").on("click", function (event) {
        event.preventDefault();

        var firstName = $("#first_name").val().trim();
        var lastName = $("#last_name").val().trim();
        var countryName = $("#country-name").val().trim();

        var userData = {
            firstname: firstName,
            lastname: lastName,
            country: countryName
        };

        database.ref().push(userData);

        // console.log("first name " + firstName.firstname);
        // console.log("last name " + lastName.lastname);
        // console.log("country " + countryName.name);

    });
    $(document).ready(function(){
        $('select').formSelect();
      });

        var database = firebase.database();
        // Global variable that will hold coordinates pulled by the geoCoder API//
        var coordinates = 'hello';

        // Function that uses AJAX to grab the coordinates of user input and stores it into the coordinates variable
        function ajaxGeoCode() {

            var address = document.getElementById('country-name').value;
            var apiKey = "AIzaSyAO5SI9KDCRq1PxROiKhyHHchLuGHTbj_E";
            var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + " &key=" + apiKey;


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                var lnglat = response.results[0].geometry.location;
                // console.log(lnglat);

                coordinates = lnglat;

                // return lnglat;

            });
        }

        var map;
        var marker;
        //Function that places marker the on the screen. It suppose to take two inputs. But the geo coder input is not used in order to use AJAX//
        function placeMarker(geocoder, resultsMap) {
            var address = document.getElementById('country-name').value;
            console.log(document.getElementById('country-name').value)
            ajaxGeoCode();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (marker) {
                    //if marker already was created change positon
                    resultsMap.setCenter(results[0].geometry.location);
                    marker.setPosition(coordinates);
                } else {
                    //create a marker
                    resultsMap.setCenter(results[0].geometry.location);
                    marker = new google.maps.Marker({
                        position: coordinates,
                        map: map,
                        draggable: true
                    });
                }
            });
        }
        //Creates initial view port of the google maps on the screen. Currently it is centered around the St.Louis area. But we can change that"
        function initialize() {
            var centerPosition = new google.maps.LatLng(38.713107, -90.42984);
            var options = {
                zoom: 4,
                center: centerPosition,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            map = new google.maps.Map($('#map-div')[0], options);

            var geocoder = new google.maps.Geocoder();

            document.getElementById('add-country').addEventListener('click', function () {
                event.preventDefault();
                placeMarker(geocoder, map);
                placeMarker(geocoder, map);
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);




        initialize();

    });