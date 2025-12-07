const animalNames = [
  "Lion", "Tiger", "Cheetah", "Leopard", "Jaguar", "Panther", "Elephant",
  "Giraffe", "Zebra", "Hippopotamus", "Rhinoceros", "Buffalo", "Wolf", "Fox",
  "Hyena", "Bear", "Polar Bear", "Panda", "Red Panda", "Kangaroo", "Koala",
  "Camel", "Llama", "Horse", "Donkey", "Bison", "Chimpanzee", "Gorilla",
  "Orangutan", "Baboon", "Meerkat", "Otter", "Seal", "Walrus", "Dolphin",
  "Whale", "Shark", "Eagle", "Falcon", "Owl", "Penguin", "Turtle",
  "Crocodile", "Alligator", "Snake", "Frog", "Toad", "Peacock", "Flamingo"
];

function getRandomItem(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const descEl = document.getElementById("ddesc");
const picEl = document.getElementById("dailypic");
const nameEl = document.getElementById("danimal-name");

async function fetchDailyPic() {
  const animal = getRandomItem(animalNames);
  const url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(animal);

  console.log("Fetching daily animal:", animal, url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("HTTP error:", response.status);
      nameEl.innerText = animal;
      descEl.innerText = "Could not load details for this animal.";
      picEl.src = "/static/images/fallback.jpg"; // your own fallback image
      return;
    }

    const data = await response.json();
    console.log("API response:", data);

    nameEl.innerText = data.title || animal;
    descEl.innerText = data.extract || "No description available.";

    if (data.thumbnail && data.thumbnail.source) {
      picEl.src = data.thumbnail.source;
    } else {
      picEl.src = "/static/images/fallback.jpg"; 
    }
  } catch (err) {
    console.error("Error fetching daily animal:", err);
    nameEl.innerText = "Error loading animal";
    descEl.innerText = "Something went wrong while fetching the data.";
    picEl.src = "/static/images/fallback.jpg";
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", fetchDailyPic);
} else {
  fetchDailyPic();
}

document.querySelector(".search-bar").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector(".search-bar input");
  const query = input.value.trim();
  if (!query) return;

  const url = "/animalinfo.html?animal=" + encodeURIComponent(query);
  window.location.href = url;
});
