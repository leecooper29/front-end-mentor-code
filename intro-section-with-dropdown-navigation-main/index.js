function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// function to toggle the dropdown menu

function myFunc() {
  document.getElementById("myDropdown").classList.toggle("show");
}
console.log("hello there");

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
// Close the dropdown if the user clicks outside of it
