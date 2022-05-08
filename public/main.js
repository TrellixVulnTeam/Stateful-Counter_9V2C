
//var clicks = 0;

function increment() {
  //clicks += 1;
  fetch("/increment").then(response => document.getElementById("clicks").innerHTML = clicks);

  console.log("checking client count", clicks);
};

function decrement() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
  };


