var clicks = 0;

function increment() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

function decrement() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
  };


