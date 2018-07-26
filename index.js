function toggleVoteContainer(){
  //find the vote container on web page
  var voteContainer = document.getElementById("vote-container");
  console.log(voteContainer.style);
  if(voteContainer.style.display === ""){
    voteContainer.style.display = "block";
  }
}

function increasedLikes(element){
  var likes = element.innerText;
// CONVERT STRING TO INTEGER
  likes = parseInt(likes);

  // INCREASE LIKES VALUE BY 1
  likes += 1;

  // CHANGE VALUE OF LIKES ON PAGE
  element.innerText = likes;
}

// images for cat vote
 var catsImages=["https://www.bluecross.org.uk/sites/default/files/assets/images/118809lpr.jpg", "https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg", "https://www.petmd.com/sites/default/files/cat-lying-on-side_0.jpg"];

// images for dog vote
 var dogsImages=["http://puppytoob.com/wp-content/uploads/2017/08/Saint-Bernard-Puppies-750x563.jpg", "https://free-classifieds-usa.com/oc-content/uploads/889/76086.jpg", "http://images2.fanpop.com/image/photos/13900000/Chow-Chow-Puppy-Wallpaper-puppies-13936770-500-400.jpg"];

function changeImage(element){
  console.log(element.id);

  var  animals= [];

  if(element.id === "cats-carousel"){
    animals = catsImages;

  } else {
      animals = dogsImages;
  }

  var carousel = document.getElementById(element.id);
  var image = carousel.getElementsByTagName("img")[0];
  var imageUrl = image.getAttribute("src");

// get index of image on page in animal array
  var imageIndex = animals.indexOf(imageUrl);

// add 1 to the index; reset to 0 if last element in animals
  if(imageIndex === animals.length - 1){
    imageIndex =0;
  } else {
    imageIndex += 1;
  }


    // reset url to the new url using the new index
  imageUrl =animals[imageIndex];
//  set the src for the img elemrnt on the web page
  image.src = imageUrl;



}
