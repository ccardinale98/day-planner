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

  //this is an object to store the data of each block into a variable
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
  
  //each of these functions reads the user input of each text block and saves it to local storage
  function save9() {
    var input = block[0].blockName.children[1];
    var output = block[0].blockName.children[1];
    var save = block[0].blockName.children[2];

    output.textContent = localStorage.getItem('userInput9')
    input.value = localStorage.getItem('userInput9')
    
    save.addEventListener('click', locStorSave9);
    function locStorSave9() {
      localStorage.setItem('userInput9', input.value)
      output.textContent = input.value
    }
  }
  save9()

  function save10() {
    var input = block[1].blockName.children[1];
    var output = block[1].blockName.children[1];
    var save = block[1].blockName.children[2];

    output.textContent = localStorage.getItem('userInput10')
    input.value = localStorage.getItem('userInput10')
    
    save.addEventListener('click', locStorSave10);
    function locStorSave10() {
      localStorage.setItem('userInput10', input.value)
      output.textContent = input.value
    }
  }
  save10()

  function save11() {
    var input = block[2].blockName.children[1];
    var output = block[2].blockName.children[1];
    var save = block[2].blockName.children[2];

    output.textContent = localStorage.getItem('userInput11')
    input.value = localStorage.getItem('userInput11')
    
    save.addEventListener('click', locStorSave11);
    function locStorSave11() {
      localStorage.setItem('userInput11', input.value)
      output.textContent = input.value
    }
  }
  save11()

  function save12() {
    var input = block[3].blockName.children[1];
    var output = block[3].blockName.children[1];
    var save = block[3].blockName.children[2];

    output.textContent = localStorage.getItem('userInput12')
    input.value = localStorage.getItem('userInput12')
    
    save.addEventListener('click', locStorSave12);
    function locStorSave12() {
      localStorage.setItem('userInput12', input.value)
      output.textContent = input.value
    }
  }
  save12()

  function save13() {
    var input = block[4].blockName.children[1];
    var output = block[4].blockName.children[1];
    var save = block[4].blockName.children[2];

    output.textContent = localStorage.getItem('userInput13')
    input.value = localStorage.getItem('userInput13')
    
    save.addEventListener('click', locStorSave13);
    function locStorSave13() {
      localStorage.setItem('userInput13', input.value)
      output.textContent = input.value
    }
  }
  save13()

  function save14() {
    var input = block[5].blockName.children[1];
    var output = block[5].blockName.children[1];
    var save = block[5].blockName.children[2];

    output.textContent = localStorage.getItem('userInput14')
    input.value = localStorage.getItem('userInput14')
    
    save.addEventListener('click', locStorSave14);
    function locStorSave14() {
      localStorage.setItem('userInput14', input.value)
      output.textContent = input.value
    }
  }
  save14()

  function save15() {
    var input = block[6].blockName.children[1];
    var output = block[6].blockName.children[1];
    var save = block[6].blockName.children[2];

    output.textContent = localStorage.getItem('userInput15')
    input.value = localStorage.getItem('userInput15')
    
    save.addEventListener('click', locStorSave15);
    function locStorSave15() {
      localStorage.setItem('userInput15', input.value)
      output.textContent = input.value
    }
  }
  save15()

  function save16() {
    var input = block[7].blockName.children[1];
    var output = block[7].blockName.children[1];
    var save = block[7].blockName.children[2];

    output.textContent = localStorage.getItem('userInput16')
    input.value = localStorage.getItem('userInput16')
    
    save.addEventListener('click', locStorSave16);
    function locStorSave16() {
      localStorage.setItem('userInput16', input.value)
      output.textContent = input.value
    }
  }
  save16()

  function save17() {
    var input = block[8].blockName.children[1];
    var output = block[8].blockName.children[1];
    var save = block[8].blockName.children[2];

    output.textContent = localStorage.getItem('userInput17')
    input.value = localStorage.getItem('userInput17')
    
    save.addEventListener('click', locStorSave17);
    function locStorSave17() {
      localStorage.setItem('userInput17', input.value)
      output.textContent = input.value
    }
  }
  save17()

  //this is the function to update the time and date
  function timeUpdater() {
    var today = moment();
    $("#currentDay").text(today.format("MMM Do, YYYY"));

    var hour = moment().format("H");
    console.log(hour);
    
    //here i ran a for loop to change the color of the box dependant on if it is in the past, present, or future
    for (var i = 0; i < block.length; i++) {
      if (hour == block[i].blockTime) {
        block[i].blockName.children[1].style.background = "#ff6961";
      } else if (hour > block[i].blockTime) {
        block[i].blockName.children[1].style.background = "#d3d3d3";
      } else {
        block[i].blockName.children[1].style.background = "#77dd77";
      }
    }
  }
  timeUpdater();
});
