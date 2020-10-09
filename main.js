// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById("modal")
function setHidden() {
  modal.classList.add("hidden");
}

function unsetHidden() {
  modal.classList.remove("hidden");
}

function redHeart(e) {
  e.target.classList.add("activated-heart")
  e.target.innerText = FULL_HEART;
}

function greyHeart(e) {
  e.target.classList.remove("activated-heart");
  e.target.innerText = EMPTY_HEART;
}
setHidden();


document.addEventListener("click", e => {
  if(e.target.matches(".like-glyph")){
  mimicServerCall()
    .then(message => {
      console.log(message)
      if(e.target.matches(".activated-heart")) {
        greyHeart(e);
      } else {
        redHeart(e);
      }
    })
    .catch(error => {
      console.log(error)
      modal.classList.remove("hidden");
      modal.innerText = error;
      setTimeout(setHidden, 5000)
    })
  }
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
