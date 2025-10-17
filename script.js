const photo = document.getElementById("user-photo");
const nameEl = document.getElementById("user-name");
const fullName = document.getElementById("full-name");
const birthDate = document.getElementById("birth-date");
const email = document.getElementById("email");
const address = document.getElementById("address");
const country = document.getElementById("country");
const refreshBtn = document.getElementById("refresh");

async function loadUser() {
  try {
    const user = await getRandomUser();

    const fullNameText = `${user.name.first} ${user.name.last}`;
    const dob = new Date(user.dob.date);
    const formattedDate = dob.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    photo.src = user.picture.large;
    nameEl.textContent = fullNameText;
    fullName.textContent = fullNameText;
    birthDate.textContent = formattedDate;
    email.textContent = user.email;
    address.textContent = `${user.location.street.name} No. ${user.location.street.number}, ${user.location.city}`;
    country.textContent = user.location.country;

  } catch (error) {
    nameEl.textContent = "Gagal memuat data.";
  }
}

refreshBtn.addEventListener("click", loadUser);
loadUser();
