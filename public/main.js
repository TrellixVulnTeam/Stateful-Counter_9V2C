
//var clicks = 0;

function increment() {
  //clicks += 1;
  fetch("/increment").then(response => console.log(response))
  //document.getElementById("clicks").innerHTML = clicks;

};

function decrement() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
  };


