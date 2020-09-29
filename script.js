// Screen Resolution
function screenResolution() {
  let screenResolutionText =  screen.width + " x " + screen.height;
  document.getElementById("device").innerHTML = screenResolutionText;
}

function deviceWidth() {
  let deviceWidthText = "Screen Width: " + screen.width + "(px)";
  document.getElementById("device-width-text").innerHTML = deviceWidthText;
}

function deviceHeight() {
  let deviceHeightText = "Screen Height: " + screen.height + "(px)";
  document.getElementById("device-height-text").innerHTML = deviceHeightText;
}



// Viewport Resolution
function viewportResolution() {
  let viewportResolutionText =  document.documentElement.clientWidth + " x " + document.documentElement.clientHeight;
  document.getElementById("viewport").innerHTML = viewportResolutionText;
}

function viewportWidth() {
  let viewportWidthText = "Viewport Width: " + document.documentElement.clientWidth + "(px)";
  document.getElementById("viewport-width-text").innerHTML = viewportWidthText;
}

function viewportHeight() {
  let viewportHeightText = "Viewport Height: " + document.documentElement.clientHeight + "(px)";
  document.getElementById("viewport-height-text").innerHTML = viewportHeightText;
}


// Function calls
screenResolution();
deviceWidth();
deviceHeight();

viewportResolution();
viewportWidth();
viewportHeight();



// Timer for update on resize window
window.setInterval(function () {
  viewportResolution();
  viewportWidth();
  viewportHeight();
}, 10);


