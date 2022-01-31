
document.getElementById("currentDay")
var currentDate = moment().format("dddd, MMMM Do YYYY")


console.log(currentDate)

// display current time
    $("#currentDay").text(currentDate)


