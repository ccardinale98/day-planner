//hint: make one time block work and do the same thing for each one
//create our document ready function() to make sure nothing runs before we load the page (all js goes inside this function)
$(document).ready(function () {
  var hour9El = document.getElementById("hour-9");
  var hour10El = document.getElementById("hour-10");
  var hour11El = document.getElementById("hour-11");
  var hour12El = document.getElementById("hour-12");
  var hour13El = document.getElementById("hour-13");
  var hour14El = document.getElementById("hour-14");
  var hour15El = document.getElementById("hour-15");
  var hour16El = document.getElementById("hour-16");
  var hour17El = document.getElementById("hour-17");

  //function() to listen for click events on the page
  function handleSave() {
    //grab the save event options
    //create variables to save user input and time
    var userInput;
    var time;
    //save values to local storage
    //create message that says it was saved to local storage
    //create some kind of timeOut value that removes the message after a few seconds
  }

  //create time updater function()
  function timeUpdater() {
    //get current time (moment)
    var today = moment();
    $("#currentDay").text(today.format("MMM Do, YYYY"));

    var hour = moment().format("H");
    console.log(hour);
    
    //create our loop to go over all the time blocks
    var block = [
      { blockName: hour9El, blockTime: 9 },
      { blockName: hour10El, blockTime: 10 },
      { blockName: hour11El, blockTime: 11 },
      { blockName: hour12El, blockTime: 12 },
      { blockName: hour13El, blockTime: 13 },
      { blockName: hour14El, blockTime: 14 },
      { blockName: hour15El, blockTime: 15 },
      { blockName: hour16El, blockTime: 16 },
      { blockName: hour17El, blockTime: 17 },
    ];
    console.log(block);

    //if else if statement to:
    for (var i = 0; i < block.length; i++) {
      if (hour == block[i].blockTime) {
        block[i].blockName.children[1].style.background = "red";
      } else if (hour > block[i].blockTime) {
        block[i].blockName.children[1].style.background = "lightGrey";
      } else {
        block[i].blockName.children[1].style.background = "green";
      }
    }
  }

  //retrieve localStorage and render items to the correct time blocks(copy for all of the time blocks)

  timeUpdater();
});
