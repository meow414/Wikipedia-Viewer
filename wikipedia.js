$(document).ready(function() {

    //when the <submit> button is clicked
    $("button").click(function(e) {
      e.preventDefault();

      var bla = $("#searchitem").val(); //it will store the search query  text
      var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exsentences=2&exlimit=10&exintro=1&gsrsearch=" + bla + "&gsrnamespace=0&callback=?";
      $.getJSON(url, function(API) {
        var pages = API["query"]["pages"];

        $(".message").empty();
        for (var id in pages) {
          if (pages.hasOwnProperty(id)) {

            $(".message").append('<a target="_blank" href="http://en.wikipedia.org/?curid=' + id + '">' +
              '<div id="searchList">' +
              '<p id="title"><h2>' + pages[id]["title"] + "</h2></p>" +
              "<p><h4>" + pages[id]["extract"] + "</h4></p>" +
              "</div></a>")
          }
        }
      });

    });

  });
