
var Doctors = require('./../js/symptoms.js').doctorModule;

var displayList = function(response) {
  console.log(response);
  for(i=0; i<10; i++)
  {
    var specialty = "specialty: " + response.data[i].specialties[0].name;
    var location = "location: " + response.data[i].practices[0].location_slug;
   $('.output').append("<li>" + "<strong>" +  response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</strong>" + "<br>" + "<img class='photo-" + i + "' src='" + response.data[i].profile.image_url + "'></img>" + "<br>" + location + "<br>" + specialty + "</li>");
  }
}


console.log(displayList);

$(document).ready(function() {
  $('.searchButton').click(function() {

    var medicalIssue = $(".symptoms").val();
    var docObject = new Doctors();
    $('.output').empty();
    var searchResult = docObject.getDoctors(medicalIssue);
  });
});
