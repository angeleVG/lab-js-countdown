const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

let startButton = document.getElementById('start-btn'); //accessing the start button by its id
startButton.onclick = function() {
  startCountDown();
};


// ITERATION 2: Start Countdown
function startCountDown() {
timer = setInterval(function () {
  if (remainingTime > 0) { // if remaining time is more than 0, show the remaining time
    console.log(remainingTime);
    remainingTime--; // time decreasing each second
  } else { 
    clearInterval(timer); //stop counting down at 0
    console.log("startCountDown called!");
  }
}, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
    const toast = document.getElementById('toast'); // Get the toast card element
    const toastMessage = document.getElementById('toast-message');
    toastMessage.innerText = message;
    toast.classList.add('show');
    setTimeout(function() {
      toast.classList.remove('show');
    }, 3000);
  }




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...


