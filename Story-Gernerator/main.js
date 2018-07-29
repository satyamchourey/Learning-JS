var customName = document.getElementById('customname');
// var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var us = document.getElementById('us');
var uk = document.getElementById("uk");

var storyData = ["I , Basanti hate Donald Trump",
  "Basanti Loves Baseball",
  "Basanti is either Black or Racist"
];
var ukData = [
  "You know nothing Jon",
  "Jon is pretty lad!",
  "Jon likes Rugby."
]
us.onclick = usCheck();
uk.onclick = ukCheck();
function usCheck() {
  document.getElementById("us").checked = true;
  document.getElementById("uk").checked = false;
}
function ukCheck() {
  document.getElementById("uk").checked = true;
  document.getElementById("us").checked = false;


}

us.addEventListener("click", usCheck);
uk.addEventListener("click", ukCheck);

var btn = document.createElement("button");
var btnText = document.createTextNode("Generate");
btn.appendChild(btnText);
document.getElementById("btn").appendChild(btn);


btn.addEventListener("click", randomize);
function randomize(e) {
  e.preventDefault();
  if (  document.getElementById("uk").checked == true) {
    (function () {
      var name = customName.value;
      var ukStory = ukData.slice(",");
      for (i = 0; i < ukStory.length; i++) {
        ukStory[i] = ukStory[i].replace("Jon", name);
        story.textContent = ukStory[Math.floor(Math.random() * ukStory.length)];

      }
    }
    ) ();
    
  } else if (  document.getElementById("us").checked == true) {
    (function () {
      var name = customName.value;
      var newStory = storyData.slice(",");

      for (i = 0; i < newStory.length; i++) {
        newStory[i] = newStory[i].replace("Basanti", name);
        story.textContent = newStory[Math.floor(Math.random() * newStory.length)];

      }
      }  ) ();
    
} else {
    story.textContent = "Select any Category";
  }
}