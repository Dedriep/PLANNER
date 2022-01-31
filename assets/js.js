
document.getElementById("currentDay")
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")

console.log(currentDate)

// display current time
    $("currentDay").html(currentDate)


