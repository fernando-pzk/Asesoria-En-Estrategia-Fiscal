document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".dropdown-content a");

  links.forEach(link => {
    link.style.setProperty("--random-color", getRandomColor());
  });

  function getRandomColor() {
    const letters = "1234567890ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
