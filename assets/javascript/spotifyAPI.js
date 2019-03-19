
//  function, takes in string, if string is similar to COUNTRY NAME IN OBJ, return playist ID of that OBJ/Country
var countryName;

var playlistID = "37i9dQZEVXbJPcfkRz0wJ0"  // This is the selected country's Playlist/Top 50 songs tracks.  // initially "Australia"
var token = "BQBDsP8_D1MwBNDBgT5_h5fSLcKgCRqRFM8JvQsD3pa9J522eMLMM8AyA0EM3d1Uy2uaZtliAtTo1i7Nkx46FopZfzPIR7rq5GluoKY0JVTxVjkPiUDCNxlHCTvSVegLcEu3XtepAXPCh_201nTu"


let testObj;


$("#add-country").on("click", function () {

  event.preventDefault();

  countryName = $("#country-name").val().trim();

  var queryURL = "https://api.spotify.com/v1/playlists/" + playlistID;

  $.ajax({
    url: queryURL,
    headers: {
      Authorization: 'Bearer ' + token
    },
    method: "GET"
  })
    .then(function (response) {
      testObj = response;

      
      var playlistVar = testObj.name;
      var listLengthVar = testObj.tracks.items["length"];
      var firstArtist = testObj.tracks.items[16].track.artists[0].name;
      var sndArtist = testObj.tracks.items[16].track.artists[1].name;
      var trackName = testObj.tracks.items[16].track.name;
      var previewURL;

=======
let testObj;
 
 
 
 var queryURL = "https://api.spotify.com/v1/playlists/" + playlistID;

    $.ajax({
      url: queryURL,
      headers: {
        Authorization: 'Bearer ' + token
      },
      method: "GET"
    })
    .then( function(response) {
      testObj = response;


      // Console logs for 'response'
      console.log(testObj);
      console.log("Playlist Name:  " + testObj.name);
      console.log("List Length:  " + testObj.tracks.items["length"]);
      console.log("FIRST Artist's Name:  " + testObj.tracks.items[16].track.artists[0].name);
      console.log("SECOND Artist's Name:  " + testObj.tracks.items[16].track.artists[1].name);
      console.log("Track Name:  " + testObj.tracks.items[16].track.name);

      // Example outputs for variables

      // var playlistVar = testObj.name;
      // var listLengthVar = testObj.tracks.items["length"];
      // var firstArtist = testObj.tracks.items[16].track.artists[0].name;
      // var sndArtist = testObj.tracks.items[16].track.artists[1].name;
      // var trackName = testObj.tracks.items[16].track.name;
      // var previewURL;

      // Displays name of Playlist ie: "Australia's Top 50, length 50"
      // $("#head-div").html("<div class= 'jumbotron' >" + playlistVar + "<br>" + listLengthVar + " </div>");

      var testArry = testObj.tracks.items;
      console.log(testArry);

      var playlistVar = testObj.name;
      var listLengthVar = testObj.tracks.items["length"];
      var firstArtist = testObj.tracks.items[16].track.artists[0].name;
      var sndArtist = testObj.tracks.items[16].track.artists[1].name;
      var trackName = testObj.tracks.items[16].track.name;
      var previewURL;

      // Displays name of Playlist ie: "Australia's Top 50, length 50"
      $("#head-div").html("<div class= 'jumbotron' >" + playlistVar + "<br>" + listLengthVar + " </div>");
      
      
      var testArry = testObj.tracks.items;
        console.log(testArry);


      testArry.forEach(element => {
        console.log(element.track.artists[0].name);
        // console.log(element.track.artists[1].name);
        console.log(element.track.name);

        firstArtist = element.track.artists[0].name;
        trackName = element.track.name;
        previewURL = element.track.preview_url;

        // Outputs to the DOM

        // var p = $("<p>")
        //   .text(firstArtist)
        //   .append("<br>" + trackName)
        //   .append("<br>" + "<a href=" + previewURL + " target= '_blank'>" + "Preview Song: " + "</a>");
        // $("#head-div").append(p);

        // $("#results-table").append("</tr></td>""</td></tr>");

      });
    });
});

        var p = $("<p>")
          .text(firstArtist)
          .append("<br>" + trackName)
          .append("<br>" + "<a href=" + previewURL + " target= '_blank'>" + "Preview Song: " + "</a>" );
          $("#head-div").append(p);
          

      });
    });


