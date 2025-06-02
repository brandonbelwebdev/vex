document.addEventListener("DOMContentLoaded", () => {
  const wordEl = document.getElementById("rotatingWord");

  if (!wordEl) return;

  const words = ["visa requirements", "job roles", "relocation", "onboarding questions"];
  const gradients = [
    "bg-gradient-to-r from-pink-500 via-blue-400 to-purple-500",
    "bg-gradient-to-r from-yellow-400 via-green-300 to-teal-400",
    "bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-sky-500",
    "bg-gradient-to-r from-red-400 via-orange-300 to-yellow-400"
  ];

  let index = 0;

  setInterval(() => {
    wordEl.classList.remove("translate-y-0", "opacity-100");
    wordEl.classList.add("-translate-y-4", "opacity-0");

    setTimeout(() => {
      index = (index + 1) % words.length;
      wordEl.textContent = words[index];

      // Remove all old gradient classes manually
      wordEl.classList.remove(
        "bg-gradient-to-r",
        "from-pink-500", "via-blue-400", "to-purple-500",
        "from-yellow-400", "via-green-300", "to-teal-400",
        "from-fuchsia-500", "via-indigo-400", "to-sky-500",
        "from-red-400", "via-orange-300", "to-yellow-400"
      );

      // Add new gradient classes manually
      gradients[index].split(" ").forEach(cls => wordEl.classList.add(cls));

      wordEl.classList.remove("-translate-y-4", "opacity-0");
      wordEl.classList.add("translate-y-0", "opacity-100");
    }, 600);
  }, 2400);
});
