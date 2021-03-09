/**
 * Author:    Ethan Lepe
 * Created:   4 March 2021
 * (c) Public Domain
 **/
// Using the core $.ajax() method
//apiEndpoint = "https://api.chucknorris.io/jokes/random";
apiEndpoint = "https://xkcd.com/info.0.json"

$("#api-button").click(doAPIStuff);

function putTextOnPage(text){
  $("#output").html(text);
}

  function doAPIStuff() {
    console.log("Doing API Stuff") {
      $.ajax({
        //
        url: apiEndpoint,
        //
        data: { },
        //
        type: "GET"
        //
        //
})
//
.done(function(data) {
  // var textData = JSON.stringify(data);
  var str = "";
  var imgURL = data.img;
  var title = data.title;
  str = "<h2>" + tutle + "</h2>"
  str = "<img src='" + imageURL + "'>"
  console.log("Success:", textData);
  putTextOnPage(str);
})
  // If the request fails
.fail(function( xhr, status, errorThrown ) {
  console.log("Failure.");
  putTextOnPage(errorThrown + "Status:" + status);
  //console.log(errorThrown + "Status:" + status);
})
console.log("Asynchronously doing the next thing.");

}
