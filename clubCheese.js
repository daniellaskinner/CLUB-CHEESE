// alert("Welcome to Club Cheese!");
//
// var age= prompt("Please enter your age")
//
// if (age<18) {
//   alert("Sorry, you are not old enough to enter the venue.")
// }
//
// else if (age<21) {
//   alert("You may enter the club, but you won't be allowed any cheesy cocktails!")
//
// }
//
// else {
//   alert("Come on in and join us for a drink!")
// }


// var answer = prompt("are we there yet?");
//
// while (answer.indexOf("yes")=== -1){
//   answer = prompt("are we there yet?");
// }
//   alert("we've arrived");

//create array playlist for multiple tunes to be stored in
var playlist = [];
//here the functions are defined
function listPlaylist(){
  playlist.forEach(function(displaySong, i){
    alert(i + ": " + displaySong);
  });
}

function addSong(){
  //invite them to enter a new song if they type add
  var newSong = prompt("Enter new tune");
  //add the new song typed to the playlist array
  playlist.push(newSong);
  alert("Added song");
}

function removeLast(){
  //ask for command 'remove' to delete last song
  var removeLastSong = prompt("Type 'remove' to delete the last tune from the playlist");
  //delete the last song entered
  playlist.pop();
  alert("Removed last song from playlist");
}

function deleteSong(){
  //ask for index of song to be deleted
  var index = prompt("Enter the index of the song you want to delete")
  //delete that song
  playlist.splice(index,1);
  alert("Deleted song");
}

function choosePlaylistOption(input){
  while (input !== "quit"){
    //if they type list alert the current playlist (each song on a separate alert)
    //print each song with it's index (i) at the start
    if (input=== "list"){
      listPlaylist();
    }
   else if (input=== "add") {
      addSong();
    }
    else if (input === "remove last"){
      removeLast();
    }
    else if (input === "delete"){
      deleteSong();
    }
  //ask again for new input
    input = prompt("What cheesy selection would you like to make");
  }
  //print this if they typed quit
  alert("OK YOU QUIT THE APP");
}

//making sure user can see instructions for cheesy tunes on page
window.setTimeout(function(){
  //ask the user what they want to do
  var input = prompt("What cheesy selection would you like to make");
  choosePlaylistOption(input);
}, 500);
