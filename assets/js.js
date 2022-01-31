
document.getElementById("currentDay")
var currentDate = moment().format("dddd, MMMM Do YYYY")
document.getElementsByClassName("schedule-block")

console.log(currentDate)

// display current time
$("#currentDay").text(currentDate)

//update  schedule when clicked
$(".content").click(function () {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
     $(this).replaceWith(textInput);

})

// save changes

$(".save").click(function () {
  

})


//color time



