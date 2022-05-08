
//var clicks = 0;

function increment() {
  //clicks += 1;
  fetch("/increment").then(response => response.json()).then(data => document.getElementById("clicks").innerHTML = data['clicks']);

  //console.log("checking client count", response);
};

function decrement() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
  };


