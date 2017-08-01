var characters = ["jedis", "siths", "droids", "leia", "chewbacca", "yoda", "obiwan kenobi", "darth vader", "luke skywalker"]



// displayCharacterInfo function re-create the HTML to display the appropriate content
function displayCharacterInfo() {
 //var API_KEY = 'f1188e298858494bb7d2b4962e57b2b1'
 var character = $(this).attr("data-name")
 var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character +"&api_key=f1188e298858494bb7d2b4962e57b2b1"

//Creating an AJAX call for the specific character button being clicked
  $.ajax({
  	url: queryURL,
  	method: 'GET'
  }).done(function(response) {
  // Once it grabs the url, do work

    console.log(response);
   // Creating a div to hold the characer
   var characterDiv = $("<div class='character'>");

   //Storing the rating data
   var rating = response.data.rating;

   // Creating an element to have the rating displayed

   var pOne = $("<p>").text("Rating: " + rating);

   //Displaying the rating
   characterDiv.append(pOne);

   // grab the original URL of the image
  var imageURL = response.data.url;
  
    
        
 

  //creating the image element
  var starWarsImage = $("<img>").attr("src", imageURL);

  //Select elemtn with id characters
  $("#characters").prepend(starWarsImage);
   });
  };

    

// Function for displaying character data

function renderButtons(){

// Deleting the characters prior to adding new characters

$("#character-buttons").empty();

// Looping through array of characters

for (var i = 0; i < characters.length; i++) {

// dynamically generating buttons for each charater

     var starWars = $("<button>");

     // adding class of character to our button
     starWars.addClass("character")
     // adding a data-attribute
     starWars.attr("data-name", characters[i]);
     // The intiial button text
     starWars.text(characters[i]);
     // adding the button to the characters div
     $(".character-buttons").append(starWars);

  }
}

// This function handles the events where a character button is clicked

$("#add-character").on("click", function (event){
   event.preventDefault();

   //This line grabs the input from the textbox

   var character = $("#character-input").val().trim();

   // Adding characters from textbox to array

   character.push(character);

   // calling created buttons which handles the processsing of our charaters array

   renderButtons();




})

$(document).on('click', '.character',displayCharacterInfo);
// on page load
renderButtons();



























console.log(characters);
