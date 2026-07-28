// אפקט קטן בלחיצה על התמונה
const photo = document.getElementById("profilePhoto");

photo.addEventListener("click", () => {
  photo.style.transition = "transform 0.6s ease";
  photo.style.transform = "rotate(360deg)";
  setTimeout(() => {
    photo.style.transform = "rotate(0deg)";
  }, 700);
});
