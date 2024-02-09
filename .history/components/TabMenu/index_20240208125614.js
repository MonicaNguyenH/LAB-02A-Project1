// Your existing function
function openTab(tab, tabNum) { //function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabNum).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Create the button and trigger the click event
  var button = document.createElement("button");
  button.className = "tablinks";
  button.innerHTML = "Tab1";
  button.onclick = function() {
    openCity(event, 'Tab1');
  };
  
  // Append the button to the body
  document.body.appendChild(button);
  
  // Trigger the click event on the created button
  button.click();
  