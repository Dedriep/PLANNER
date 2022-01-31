
document.getElementById("currentDay")
var currentDate = moment().format("dddd, MMMM Do YYYY")
document.getElementsByClassName("schedule-block")

console.log(currentDate)

// display current time
$("#currentDay").text(currentDate)

//update  schedule when clicked
$(".content").click(function updateText() {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("textarea")
        .val(text);
     $(this).replaceWith(textInput);

})

// save changes


//color time



