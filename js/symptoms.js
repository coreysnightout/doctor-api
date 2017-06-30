var apiKey = require('./../.env').apiKey;
Doctors = function(){
}

Doctors.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
      return result.data[0];
      $('.output').text(test);
      console.log(test);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctors;






















// //business logic stuff for a particular module
// var ExampleModule = function(args) {
//   this.args = args; //to be replaced with constructor arguments
// };
//
// ExampleModule.prototype.examplePrototype = function() {
//   return `this is an example prototype method`;
// };
//
// exports.exampleModule = ExampleModule;
