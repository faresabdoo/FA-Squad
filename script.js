
   // Smooth scrolling
   document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}
function closeMenu() {
    let menu = document.querySelector('.menu');
    if (window.innerWidth <= 768) {
        menu.style.display = 'none';
    }
}


//button show more
document.getElementById("load-more").addEventListener("click", function() {
  let hiddenProfiles = document.querySelectorAll(".card.hidden");
  
  for (let i = 0; i < 4 && i < hiddenProfiles.length; i++) {
      hiddenProfiles[i].classList.remove("hidden");
  }

  if (document.querySelectorAll(".card.hidden").length === 0) {
      this.style.display = "none";
  }
});
