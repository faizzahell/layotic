<script>
import "./Service.css";
</script>

<template>
  <section
    id="services"
    class="gap how-it-works"
    style="background-image: url(@/assets/img/shaps-bg.png)"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="heading two sec-title-animation animation-style2">
            <span class="title-animation">Cara Order </span>
            <h2 class="title-animation">Bagaimana cara memulai?</h2>
            <p>
              Hanya perlu 3 langkah praktis di LAYOTIC untuk mendapatkan PCB
              siap pakai, didukung 4 keunggulan eksklusif yang bikin order Anda
              makin hemat dan aman!
            </p>
          </div>
          <ul class="chek">
            <li>
              <img src="@/assets/img/chek.png" alt="img" /> Kalkulator harga
              untuk estimasi biaya produksi PCB.
            </li>
            <li>
              <img src="@/assets/img/chek.png" alt="img" /> Dukungan pelanggan
              24/7 melalui WhatsApp termasuk hari libur.
            </li>
            <li>
              <img src="@/assets/img/chek.png" alt="img" /> Konsultasi Gerber
              gratis untuk analisis desain.
            </li>
            <li>
              <img src="@/assets/img/chek.png" alt="img" /> Pengiriman cepat &
              terpercaya untuk memastikan tiba tepat waktu.
            </li>
          </ul>
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-md-6">
              <div class="how-do-stap">
                <span>1</span>
                <i class="flaticon-mail"></i>
                <h4>Kirim file Gerber dan dapatkan estimasi harga</h4>
              </div>
              <div class="how-do-stap two">
                <span>2</span>
                <i class="flaticon-team-building"></i>
                <h4>Tentukan ukuran dan warna dengan konsultasi gratis</h4>
              </div>
            </div>
            <div class="col-md-6">
              <div class="how-do-stap three">
                <span>3</span>
                <i class="flaticon-security"></i>
                <h4>Konfirmasi pesanan, bayar, dan terima PCB</h4>
              </div>
              <div class="video">
                <img src="https://placehold.co/300x260" alt="img" />
                <a
                  class="video-pop"
                  data-fancybox=""
                  href="https://www.youtube.com/watch?v=1La4QzGeaaQ"
                  ><i class="fa-solid fa-play"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
