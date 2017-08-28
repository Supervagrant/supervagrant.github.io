var link = document.querySelector(".popup-button");
      
var popup = document.querySelector(".popup-form");
      
var login = popup.querySelector("[name=date-arrival]");
      
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal-content-show");
});