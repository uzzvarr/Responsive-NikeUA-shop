
function myMenuFunction() {
    var i = document.getElementById("navDropdownMenu");

      if(i.className === "nav_dropdown_menu") {
           i.className += " responsive";
      } else {
           i.className = "nav_dropdown_menu";
      }
}