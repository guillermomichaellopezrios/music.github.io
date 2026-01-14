const btn = document.getElementById("generateBtn");
const display = document.getElementById("genreDisplay");

btn.addEventListener("click", async () => {
  try {
    const res = await fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/");
    const genre = await res.json();
    display.textContent = genre; 
  } catch (err) {
    display.textContent = "Error al cargar 😕";
    console.error(err);
  }
});
