


function increment() {
  fetch("/increment").then(response => response.json()).then(data => document.getElementById("clicks").innerHTML = data['clicks']);

  //console.log("checking client count", response);
};

function decrement() {
  fetch("/decrement").then(response => response.json()).then(data => document.getElementById("clicks").innerHTML = data['clicks']);
  };


