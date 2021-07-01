// timetable is from 0900 to 1700
// display current time at top of page
// left portion of table is timeframe
// main portion of table is a type field
// middle changes color based on time of day, passed hour blocks are gray, current hour block is red, upcoming hourblocks are green
// right portion of table has a save button to save input to system memory

// set #currentDay to current time with momentjs
var currentTime = function () {
  $("#currentDay").text(moment().format("dddd MMMM do, YYYY HHmm:ss"));
};
// updates time text every minute
setInterval(currentTime, 1000);
// TODO: change block colors based on current time (if/elseif/else)
function blockColor() {
  $(".time-block").each(function () {
    var block = $(".time-block").attr("id");
    var timeStamp = parseInt(moment().format("HH"));
    if (block < timeStamp) {
      $(this).addClass("past");
    } else if ((block = timeStamp)) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
blockColor();
// runs function to update colors every minute
setInterval(blockColor, 60000);
// TODO: save input to local storage
function save() {
  var hour = $(this).parent().attr("id");
  console.log(hour);
  localStorage.setItem(hour, $("#" + hour + " textarea").val())
}
// TODO: set blocks from local storage
function storedText(){
    $(".time-block").each(function(){
        var thisId = $(this).attr("id")
        $("#" + thisId + " textarea").text(localStorage.getItem(thisId))
    })
}
storedText()
// TODO: click event listener for save btn
$(".saveBtn").on("click", save);

console.log($(".time-block").attr("id"));
console.log(parseInt(moment().format("HH")));
