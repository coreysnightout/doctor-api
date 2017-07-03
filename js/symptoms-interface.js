
var Doctors = require('./../js/symptoms.js').doctorModule;

$(document).ready(function() {
  $('.searchButton').click(function() {

    var medicalIssue = $(".symptoms").val();
    var docObject = new Doctors();
    $('.output').empty();
    var searchResult = docObject.getDoctors(medicalIssue);
  });
});
