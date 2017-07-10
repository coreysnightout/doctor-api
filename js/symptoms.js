var apiKey = require('./../.env').apiKey;

Doctors = function(){
}

Doctors.prototype.getDoctors = function(medicalIssue, displayList) {

  var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey;
  console.log(medicalIssue);

  $.get(resource_url, function (response, displayList) {
    displayList(response);
  });
};


exports.doctorModule = Doctors;




// $.get(resource_url, function (response) {
//    console.log(response);
//    for(i=0; i<10; i++)
//    {
//      var specialty = "specialty: " + response.data[i].specialties[0].name;
//      var location = "location: " + response.data[i].practices[0].location_slug;
//      console.log(specialty);
//     $('.output').append("<li>" + "<strong>" +  response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</strong>" + "<br>" + "<img class='photo-" + i + "' src='" + response.data[i].profile.image_url + "'></img>" + "<br>" + location + "<br>" + specialty + "</li>");
//    }
// });
// };
//







// Doctors.prototype.getDoctors = function(medicalIssue) {
//     $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
//
//   .then(function(result) {
//     console.log(result);
//     })
//    .fail(function(error){
//       console.log("fail");
//     });
// };
// return medicalIssue;
// $('.output').text(test);
