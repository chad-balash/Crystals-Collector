

$(document).ready(function() {

    

    let targetNumber = Math.floor(Math.random() * 101) + 19; // Generate random number between 19-120
    let crystals = $("#crystals"); //assign values to variables
    let counter = 0; //assign values to variables
    let wins = 0; //assign values to variables
    let loses = 0; //assign values to variables
    let crystal1 = Math.floor(Math.random() * 11) + 1; //assign and generate random number between 1-12
    let crystal2 = Math.floor(Math.random() * 11) + 1; //assign and generate random number between 1-12
    let crystal3 = Math.floor(Math.random() * 11) + 1; //assign and generate random number between 1-12
    let crystal4 = Math.floor(Math.random() * 11) + 1; //assign and generate random number between 1-12
    let numberOptions = [crystal1, crystal2, crystal3, crystal4]; // assign and create array for values
    let crystalImages = ['./assets/images/crystal1.png', './assets/images/crystal2.png', './assets/images/crystal3.png', './assets/images/crystal4.png']; // assign and create array for images


    $("#number-to-guess").text(targetNumber); // displays targetNumber to element with id number-to-guess
    $('#wins-count').text(wins);
    $('#loses-count').text(loses);
    $('#score').text(counter); // displays score
    
    

    for (let i = 0; i < numberOptions.length; i++) { // for loop to create crystals for every numberOption
      let imageCrystal = $("<img>"); // For each iteration, we will create an imageCrystal
      imageCrystal.addClass("crystal-image"); // First each crystal will be given the class ".crystal-image".
      imageCrystal.attr('src', crystalImages[i]); // Each imageCrystal will be given a src link to the crystal image
  
      // Each imageCrystal will be given a data attribute called data-crystalValue.
      // This data attribute will be set equal to the array value.
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);
      //each crystal image (with all it classes and attributes) will get added to the page.
      crystals.append(imageCrystal);
    }
  
 

    // This time, our click event applies to every single crystal on the page. Not just one.
    crystals.on("click", ".crystal-image", function() {
  
      // Determining the crystal's value requires us to extract the value from the data attribute.
      // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
      // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
      // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
  
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      // We then add the crystalValue to the user's "counter" which is a global variable.
      // Every click, from every crystal adds to the global counter.
      counter += crystalValue;
  
      // All of the same game win-lose logic applies. So the rest remains unchanged.
      $('#score').text(counter);


  
      if (counter === targetNumber) {
        wins++;
        alert('You win!');
        $('#wins-count').text(wins);
        console.log('wins: ' + wins);
        resetGame();
      }
  
      else if (counter >= targetNumber) {
        loses++;
        alert('You lose!');
        $('#loses-count').text(loses);
        console.log('loses: ' + loses);
        resetGame();
      }

    });

          //Reset game function
          function resetGame() {
            targetNumber = Math.floor(Math.random() * 101) + 19;
            console.log(targetNumber);
            $("#number-to-guess").text(targetNumber);
            crystal1 = Math.floor(Math.random() * 11) + 1;
            crystal2 = Math.floor(Math.random() * 11) + 1;
            crystal3 = Math.floor(Math.random() * 11) + 1;
            crystal4 = Math.floor(Math.random() * 11) + 1;
            counter = 0;
            $('#score').text(counter);
            
            }







});