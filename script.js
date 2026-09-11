const checkpoints = [
  {
    number: 1,
    location: "BT 1.4",
    hint: `Kereta tersusun menjadi panduan,
Cari penghujung jangan tersasar;
Bukan di atas, bukan pertengahan,
Berhadapan pedati, disitu menyambar.`,
    code: "sambung lagu"
  },
  {
    number: 2,
    location: "Bangku di hadapan bendahari",
    hint: `Naik dan turun menjadi kebiasaan,
Di sisinya tempat melepas lelah;
Jika hujan dan tempias bertukar-tukaran,
Carilah bangku di kawasan yang basah.`,
    code: "perkataan"
  },
  {
    number: 3,
    location: "Balai santai",
    hint: `Tempat luas menjadi persinggahan,
Mencari ilmu di bangunan seberang;
Jika perpustakaan menjadi pandangan,
Di hadapannya pula checkpoint terbentang.`,
    code: "quiz"
  },
  {
    number: 4,
    location: "Anjung",
    hint: `Dua anjung berdiri berdekatan,
Satu besar mudah ditemui;
Carilah yang kecil sedikit tersimpan,
Di celah bangunan dan kereta menanti.`,
    code: "haa tumpah jawab"
  },
  {
    number: 5,
    location: "Pos pengawal",
    hint: `"Bangku dibawah pokok yang redup, bersebelahan dengan pedati hulubalang bestari"`,
    code: "pantun"
  },
  {
    number: 6,
    location: "—",
    hint: `Jauh berjalan mencari tujuan,
Kolam terbentang menjadi petanda;
Tiada bangunan di kiri dan kanan,
berdiri sendiri disitulah berada`,
    code: "quiz"
  }
];

const grid = document.getElementById("checkpointGrid");

checkpoints.forEach((cp) => {
  const card = document.createElement("article");
  card.className = "checkpoint";

  card.innerHTML = `
    <div class="cp-top">
      <div>
        <div class="cp-number">Checkpoint ${cp.number}</div>
        <div class="cp-title">Jejak Merdeka</div>
      </div>
      <div aria-hidden="true">🇲🇾</div>
    </div>

    <div class="cp-body">
      <div class="location">
        <span>📍</span>
        <span><strong>Tempat:</strong> ${cp.location}</span>
      </div>

      <div class="hint">
        <div class="hint-label">Hint</div>
        <p>${cp.hint}</p>
      </div>

      <div class="code-box">
        <div class="code-label">Code — wajib disebut peserta</div>
        <div class="code">“${cp.code}”</div>
      </div>
    </div>
  `;

  grid.appendChild(card);
});
