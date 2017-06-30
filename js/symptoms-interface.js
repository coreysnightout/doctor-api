
var Doctors = require('./../js/symptoms.js').doctorModule;


$(document).ready(function() {
  $('.searchButton').click(function() {
    var medicalIssue = $(".symptoms").val();
    var docObject = new Doctors();
    var searchResult = docObject.getDoctors(medicalIssue);
    // console.log(searchResult);
    console.log(searchResult);
    $('.output').append(searchResult);
  });
});
