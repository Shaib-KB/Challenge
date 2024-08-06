console.clear();
// Query all buttons with the 'data-js' attribute
const bodyElement = document.querySelector('[data-js="body"]');
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleModeButton = document.querySelector('[data-js="toggle-button"]');

// Add event listener to "Switch to dark mode" button
darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

// Add event listener to "Switch to light mode" button
lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

// Add event listener to "Switch to toggle mode" button
toggleModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
