function comingSoon() {
  alert("Fitur pembayaran segera hadir 🚀");
}

const params = new URLSearchParams(window.location.search);

document.getElementById("title").innerText =
  params.get("title") || "Produk TAKOKA";

document.getElementById("desc").innerText =
  params.get("desc") || "Deskripsi belum tersedia";

document.getElementById("price").innerText =
  params.get("price") || "";
