// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // * Date stamp at top of page
  var currentDay = dayjs();
  $("#currentDay").text(currentDay.format("MMM D, YYYY"));

  var currentTime = dayjs().hour();

  // * for loop to change the class on each box depending on the hour of the day
  function colorChange() {
    $(".time-block").each(function () {
      var sectionId = $(this).attr("id");
      if (sectionId == currentTime) {
        $(this).addClass("present");
      }
      if (sectionId < currentTime) {
        $(this).addClass("past");
      }
      if (sectionId > currentTime) {
        $(this).addClass("future");
      }
    });
  }
  colorChange();

  //* Check for any local saved data and loads it
  for (let i = 0; i < $(".btn").length; i++) {
    $("textarea")
      .eq(i)
      .text(localStorage.getItem([i]));
  }

  //* Track when someone saves input in one of the blocks
  $(function () {
    function userInput() {
      $(".btn").on("click", function userInput(event) {
        event.preventDefault();
        localStorage.setItem([i], $("textarea").eq.val());
      });
    }
  });
  //* Run through each block and save input
  for (let i = 0; i < $(".btn").length; i++) {
    $(".btn")
      .eq(i)
      .on("click", function (event) {
        event.preventDefault();
        localStorage.setItem([i], $("textarea").eq(i).val());
      });
  }
});
