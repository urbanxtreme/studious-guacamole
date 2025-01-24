const icons = [
  "🌟",
  "🌍",
  "📚",
  "🎵",
  "🔬",
  "🎮",
  "⚡",
  "📝",
  "🔬",
  "📊",
  "🎯",
  "🎨",
  "🔍",
  "💡",
  "🎮",
  "📚",
  "👤",
  "📱",
  "🌱",
  "🌿",
  "🍃",
  "🍀",
  "🌻",
  "🌼",
  "🌸",
  "🌺",
  "🌹",
  "🌷",
  "🍁",
  "🍂",
  "🍄",
  "🌞",
  "🌝",
  "🌛",
  "🌜",
  "🌚",
  "🌎",
  "🌏",
  "🌋",
  "🌊",
  "🌈",
  "☀️",
  "⭐",
  "✨",
  "⚡",
  "🔥",
  "💧",
  "🌪️",
  "❄️",
  "🌨️",
  "🌩️",
  "🌫️",
  "🌬️",
  "🌀",
];
const iconsBg = document.querySelector(".icon-grid");

// Add more emojis to fill the panel
for (let i = 0; i < 90; i++) {
  // Increased number of emojis to 100
  const icon = document.createElement("div");
  icon.className = "icon";
  icon.textContent = icons[Math.floor(Math.random() * icons.length)];
  icon.style.left = Math.random() * 100 + "%";
  icon.style.top = Math.random() * 100 + "%";
  icon.style.animationDuration = `${12 + Math.random() * 12}s`; // Slower animation
  icon.style.animationDelay = `${Math.random() * 5}s`; // Random delay for smoother effect
  iconsBg.appendChild(icon);
}

// Form handling
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");
  // Add your login logic here
  console.log("Login attempted with:", email, password);
});
