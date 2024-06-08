document.addEventListener("DOMContentLoaded", function() {
    const imageInteractions = document.querySelectorAll(".image-holder");
  
    imageInteractions.forEach(interaction => {
      interaction.addEventListener("mouseenter", function() {
        this.querySelector(".image-overlay").classList.add("active");
        this.querySelector("img").classList.add("active");
      });
  
      interaction.addEventListener("mouseleave", function() {
        this.querySelector(".image-overlay").classList.remove("active");
        this.querySelector("img").classList.remove("active");
      });
    });
  });