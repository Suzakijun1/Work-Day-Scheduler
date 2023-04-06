var dayDate = document.querySelector("#currentDay");

//Displaying day and date
function displayTime() {
  var dayNow = dayjs().format("MMM DD, YYYY");
  dayDate.textContent = dayNow;
}
displayTime();

//save button
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var input = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, input);
    console.log(input);
  });

  function trackTime() {
    //current time in hour
    var currentTime = dayjs().format("h");
    console.log(currentTime);

    //compares the current time to change background color - present, past, future
    $(".time-block").each(function () {
      var timeSlots = parseInt($(this).attr("id").split("hour")[1]);

      if (timeSlots < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (timeSlots < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
    });
  }

  //grabs items from local storage
  for (var i = 8; i <= 17; i++) {
    var id = "#hour" + i + " .description";
    $(id).val(localStorage.getItem("hour" + i));
  }

  trackTime();
});
