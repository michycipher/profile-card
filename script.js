
const time = document.querySelector('[data-testid="test-user-time"]');
function updateTime() {
  if (time) time.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);

// --- To handle avatar upload ---
const avatarInput = document.getElementById("avatar-input");
const avatarImg = document.getElementById("user-avatar");

avatarInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    avatarImg.src = imageURL;
  }
});
