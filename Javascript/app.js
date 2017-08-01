var characters = ["jedis", "siths", "droids", "leia", "chewbacca", "yoda", "obiwan kenobi", "darth vader", "luke skywalker", "mace windu"]



// displayCharacterInfo function re-create the HTML to display the appropriate content
function displayCharacterInfo() {
 $(".mainDisplay").empty();
 var character = $(this).attr("data-name")
 var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character +"&api_key=f1188e298858494bb7d2b4962e57b2b1"

//Creating an AJAX call for the specific character button being clicked
  $.ajax({
  	url: queryURL + "&limit=10",
  	method: 'GET'
  }).done(function(response) {
  

console.log(response.data);
  for (i=0; i < response.data.length; i++){
   var gif = response.data[i]
   var gifImage = gif.images.fixed_height;
   var gifContainer = $("<div class='item'>");
   gifContainer.append("<p>" + gif.rating + "</p>");
    gifContainer.append("<img src=" + gifImage.url + " height=" + gifImage.height + " width=" + gifImage.width + "/>");

  $(".mainDisplay").append(gifContainer); 


}
   
   

   });
};

    

// Function for displaying character data

function renderButtons(){

// Deleting the characters prior to adding new characters


$(".character-buttons").empty();
// Looping through array of characters

for (var i = 0; i < characters.length; i++) {

// dynamically generating buttons for each charater

     var starWars = $("<button class='btn btn-primary'>");

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

   characters.push(character);

   // calling created buttons which handles the processsing of our charaters array

   renderButtons();




})

$(document).on('click', '.character',displayCharacterInfo);
// on page load
renderButtons();





























