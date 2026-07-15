// =====================================
// KALENDER ISLAMI ASSUNNIYYAH SULTRA
// =====================================

// JAM DIGITAL

function updateClock() {
  const now = new Date();

  let jam = now.getHours();
  let menit = now.getMinutes();
  let detik = now.getSeconds();

  jam = jam < 10 ? "0" + jam : jam;
  menit = menit < 10 ? "0" + menit : menit;
  detik = detik < 10 ? "0" + detik : detik;

  const clock = document.getElementById("clock");

  if (clock) {
    clock.innerHTML = jam + ":" + menit + ":" + detik;
  }
}

setInterval(updateClock, 1000);

updateClock();

// =============================
// Tanggal Masehi & Hijriyah
// =============================

async function loadDate() {

    const todayElement = document.getElementById("today");
    const hijriElement = document.getElementById("hijri");

    const now = new Date();

    // Tanggal Masehi Indonesia
    todayElement.textContent = now.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    try {

        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();

        const response = await fetch(
            `https://api.aladhan.com/v1/gToH/${day}-${month}-${year}`
        );

        const data = await response.json();

        const hijri = data.data.hijri;

        hijriElement.textContent =
            `${hijri.day} ${hijri.month.en} ${hijri.year} H`;

    } catch (err) {

        hijriElement.textContent = "Tanggal Hijriyah tidak tersedia";

        console.error(err);

    }

}

loadDate();
// =====================================
// WAKTU SHOLAT
// =====================================

const latitude = "-3.9985";

const longitude = "122.5129";

fetch(
  `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=11`,
)
  .then((response) => response.json())

  .then((data) => {
    const waktu = data.data.timings;

    const sholatBox = document.getElementById("nextPrayer");

    if (sholatBox) {
      sholatBox.innerHTML = `

<table>

<tr>
<td>Subuh</td>
<td>${waktu.Fajr}</td>
</tr>


<tr>
<td>Dzuhur</td>
<td>${waktu.Dhuhr}</td>
</tr>


<tr>
<td>Ashar</td>
<td>${waktu.Asr}</td>
</tr>


<tr>
<td>Maghrib</td>
<td>${waktu.Maghrib}</td>
</tr>


<tr>
<td>Isya</td>
<td>${waktu.Isha}</td>
</tr>


</table>

`;
    }
  })

  .catch((error) => {
    console.log("Error waktu sholat:", error);

    const box = document.getElementById("nextPrayer");

    if (box) {
      box.innerHTML = "Gagal mengambil jadwal sholat";
    }
  });
