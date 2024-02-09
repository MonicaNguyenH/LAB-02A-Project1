// Your existing function
function openTab(tabNum) {
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
    document.getElementById("Tab" + tabNum).style.display = "block";
    document.getElementById("Button" + tabNum).className += " active";
  }
  
  // Create buttons and trigger the click event for default tab (Tab1)
  for (var i = 1; i <= 3; i++) {
    var button = document.createElement("button");
    button.id = "Button" + i;
    button.className = "tablinks";
    button.innerHTML = "Tab" + i;
    button.onclick = (function (num) {
      return function () {
        openTab(num);
      };
    })(i);
  
    // Append the button to the body
    document.body.appendChild(button);
  
    // Trigger the click event on the created button for default tab (Tab1)
    if (i === 1) {
      button.click();
    }
  }
  