
document.getElementById("currentDay")
var currentDate = moment().format("dddd, MMMM Do YYYY")
document.getElementsByClassName("schedule-block")
var noteid = 0
var saveBTN = document.querySelectorAll('.save')

console.log(currentDate)

// display current time
$("#currentDay").text(currentDate)


//update  schedule when clicked
var updatecontent = $(".content").click(function updateText() {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("textarea")
        .val(text);
     $(this).replaceWith(textInput);

    //  noteid += 1

})

console.log(update)



// save changes


// var scheduleData = {
// noteid,
// notecontent
// }


// $('save').click(function (){

// init ()
// })



// function init (){

// updatecontent

//     Storage.setItem('note-info', scheduleData)

// }


// Storage.setItem('note-info', scheduleData)
    //color time\



