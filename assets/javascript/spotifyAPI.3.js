
$(document).ready(function () {
    // Country Object Above


    var client_id = '475cfa7b9c8740bdab335681de129825'; // Your client id
    var client_secret = '498f1817fa8448bdbc09ddec03f2522f'; // Your secret

    // var authOptions = {
    //   url: "https://accounts.spotify.com/api/token",
    //   headers: {
    //     Authorization: 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    //   },
    //   form: {
    //     grant_type: 'client_credentials'
    //   },
    //   json: true
    // };


    //  function, takes in string, if string is similar to COUNTRY NAME IN OBJ, return playist ID of that OBJ/Country
    testFunc = function () {
        console.log("MY JS MADE IT!")
    };
    testFunc();

    var countryInput;
    var countryName;

    $("#add-country").on("click", function (event) {
        event.preventDefault();
        console.log("FIRST STOP:");
        countryInput = $("#country-name").val().trim();
        console.log("This is input:  " + countryInput);


        countryName = countryObj.find(function (element) {
            if (element.country == countryInput) {  // search string to find country 
                return element
            }
        });



        console.log("This is STILL input:  " + countryInput);

        console.log("This is it:  " + countryName.p_id);
        let countryP_id = countryName.p_id;



        const playlistID = countryP_id;  // This is the selected country's Playlist/Top 50 songs tracks.  // initially "Australia"
        // const token = "BQAzvf-WxxK8xO2VQN-hd3znIpS_3-mXhYTG4oTjKWMeZuoxwrZOhivNgFoYhw3LgXgLZJ7g_ZVO857ejl74wylakw57NGDFpZ0u6RSpAgMhcXbdgtEq3zgyxv2HHux86dOxm2uAwxD0wMe52oEH";
        const token = "BQDNtPReVP1uOJcyfpyUOkq1ja4_VJRv00jviZ-x0c0QvVitUsDnGg17yIEbSDJCcIn6meytjUNtYuPZJbezNyvUh0f5KQ60GgmmEqxwH2jL3xMqou97dwr-FuxQbQBZgEe43dRTwmrg5cQfFDWO";
        let testObj;



        var queryURL = "https://api.spotify.com/v1/playlists/" + playlistID;
        //  var queryURL = "https://api.spotify.com/v1/browse/categories/viral/playlists"

        $.ajax({
            url: queryURL,
            headers: {
                Authorization: 'Bearer ' + token
            },
            method: "GET"
        })
            .then(function (response) {
                testObj = response;

                // Console logs for 'response'
                console.log(testObj);
                console.log("Playlist Name:  " + testObj.description);
                console.log("List Length:  " + testObj.tracks.items["length"]);
                console.log("FIRST Artist's Name:  " + testObj.tracks.items[8].track.artists[0].name);
                // console.log("SECOND Artist's Name:  " + testObj.tracks.items[16].track.artists[1].name);
                console.log("Track Name:  " + testObj.tracks.items[8].track.name);

                // Example outputs for variables
                var playlistVar = testObj.description;
                var listLengthVar = testObj.tracks.items["length"];
                var firstArtist = testObj.tracks.items[8].track.artists[0].name;
                // var sndArtist = testObj.tracks.items[8].track.artists[1].name;
                var trackName = testObj.tracks.items[8].track.name;
                var ctyName = testObj.name;
                var previewURL;

                // Displays name of Playlist ie: "Australia's Top 50, length 50"
                // This was for my standalone HTML -> $("#head-div").html("<div class= 'jumbotron' >" + playlistVar + "<br>" + "Top 10" + " </div>");


                var testArry = testObj.tracks.items;
                console.log(testArry);
                console.log(testArry.length);

                testArry.length = 10;
                console.log(testArry.length);

                testArry.forEach(element => {
                    console.log(element.track.artists[0].name);
                    // console.log(element.track.artists[1].name);
                    console.log(element.track.name);

                    firstArtist = element.track.artists[0].name;
                    trackName = element.track.name;
                    previewURL = element.track.preview_url;

                    // Below was for my standalone HTML 
                    // // Outputs to the DOM
                    // var p = $("<p>")
                    //   .text(firstArtist)
                    //   .append("<br>" + trackName)
                    //   .append("<br>" + "<a href=" + previewURL + " target= '_blank'>" + "Preview Song: " + "</a>" );
                    //   $("#head-div").append(p);

                    // Find a way to incorporate the imbedded player with the tracks.  Uses the track's ID
                    /* <iframe src="https://open.spotify.com/embed/track/4y3OI86AEP6PQoDE6olYhO" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */

                    var outputTracks = $("<tr>")
                        .append("<td>" + firstArtist + "</td>")
                        .append("<td>" + trackName + "</td>")
                        .append("<td>" + ctyName + "</td>");
                    $("#results-table").append(outputTracks);

                });
            });

    });

=======

$(document).ready(function(){
// Country Object Above


var client_id = '475cfa7b9c8740bdab335681de129825'; // Your client id
var client_secret = '498f1817fa8448bdbc09ddec03f2522f'; // Your secret

// var authOptions = {
//   url: "https://accounts.spotify.com/api/token",
//   headers: {
//     Authorization: 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// };


//  function, takes in string, if string is similar to COUNTRY NAME IN OBJ, return playist ID of that OBJ/Country
testFunc = function() {
  console.log("MY JS MADE IT!")
};
testFunc();

var countryInput;
var countryName;

$(document).on("click", "#country-city", function (event){
    event.preventDefault();
    console.log("FIRST STOP:");
    countryInput = $("#country-city").val().trim();
    console.log("This is input:  " + countryInput);

    
  countryName = countryObj.find(function (element) { 
  if (element.country == countryInput) {  // search string to find country 
    return element} 
});



console.log("This is STILL input:  " + countryInput);

console.log("This is it:  " + countryName.p_id);
let countryP_id = countryName.p_id;



const playlistID = countryP_id;  // This is the selected country's Playlist/Top 50 songs tracks.  // initially "Australia"
// const token = "BQAzvf-WxxK8xO2VQN-hd3znIpS_3-mXhYTG4oTjKWMeZuoxwrZOhivNgFoYhw3LgXgLZJ7g_ZVO857ejl74wylakw57NGDFpZ0u6RSpAgMhcXbdgtEq3zgyxv2HHux86dOxm2uAwxD0wMe52oEH";
const token = "BQD_6wYmLgOEU4KlRWy2oLiJjJ3YYm7x6iwoiVxwRQafW3SJKTvTdeXpqHSq12VbbFw9rrnRv1UjaoT0r1nySQiHmHEGa4QOgQjxjZGo1D0hZ6tWiJqs6nhfgztXUIM7jWLlVXAZ9CHyny_uA9NZ";
let testObj;
 
 
 
 var queryURL = "https://api.spotify.com/v1/playlists/" + playlistID;
//  var queryURL = "https://api.spotify.com/v1/browse/categories/viral/playlists"

    $.ajax({
      url: queryURL,
      headers: {
        Authorization: 'Bearer ' + token
      },
      method: "GET"
    })
    .then(function(response) {
      testObj = response;

      // Console logs for 'response'
      console.log(testObj);
      console.log("Playlist Name:  " + testObj.description);
      console.log("List Length:  " + testObj.tracks.items["length"]);
      console.log("FIRST Artist's Name:  " + testObj.tracks.items[8].track.artists[0].name);
      // console.log("SECOND Artist's Name:  " + testObj.tracks.items[16].track.artists[1].name);
      console.log("Track Name:  " + testObj.tracks.items[8].track.name);

      // Example outputs for variables
      var playlistVar = testObj.description;
      var listLengthVar = testObj.tracks.items["length"];
      var firstArtist = testObj.tracks.items[8].track.artists[0].name;
      // var sndArtist = testObj.tracks.items[8].track.artists[1].name;
      var trackName = testObj.tracks.items[8].track.name;
      var ctyName = testObj.name;
      var previewURL;

      // Displays name of Playlist ie: "Australia's Top 50, length 50"
      // This was for my standalone HTML -> $("#head-div").html("<div class= 'jumbotron' >" + playlistVar + "<br>" + "Top 10" + " </div>");
      
      
      var testArry = testObj.tracks.items;
        console.log(testArry);
        console.log(testArry.length);

        testArry.length = 10;
        console.log(testArry.length);

      testArry.forEach(element => {
        console.log(element.track.artists[0].name);
        // console.log(element.track.artists[1].name);
        console.log(element.track.name);

        firstArtist = element.track.artists[0].name;
        trackName = element.track.name;
        previewURL = element.track.preview_url;

        // Below was for my standalone HTML 
        // // Outputs to the DOM
        // var p = $("<p>")
        //   .text(firstArtist)
        //   .append("<br>" + trackName)
        //   .append("<br>" + "<a href=" + previewURL + " target= '_blank'>" + "Preview Song: " + "</a>" );
        //   $("#head-div").append(p);
          
          // Find a way to incorporate the imbedded player with the tracks.  Uses the track's ID
          /* <iframe src="https://open.spotify.com/embed/track/4y3OI86AEP6PQoDE6olYhO" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */
      
        var outputTracks = $("<tr>")
            .append("<td>" + firstArtist + "</td>")
            .append("<td>" + trackName + "</td>")
            .append("<td>" + ctyName + "</td>");
            $("#results-table").append(outputTracks);
            

            

      });
    });

  });



})