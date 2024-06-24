const profiles = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];
const containerProfile = document.querySelector(".profiles");
const displayProfiles = function (profiles) {
  containerProfile.innerHTML = "";
  profiles.forEach(function (prof) {
    const html = `<div class="profile">${prof}</div>`;
    containerProfile.insertAdjacentHTML("afterbegin", html);
  });
};
displayProfiles(profiles);
