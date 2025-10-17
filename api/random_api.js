async function getRandomUser() {
  const response = await fetch("https://randomuser.me/api/");
  if (!response.ok) {
    throw new Error("Gagal mengambil data dari API");
  }
  const data = await response.json();
  return data.results[0];
}
