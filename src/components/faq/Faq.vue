<script>
import { onMounted } from "vue";
import $ from "jquery";
import "./Faq.css";

export default {
  setup() {
    onMounted(() => {
      // Accordion toggle functionality
      $(".accordion-item .heading").on("click", function (e) {
        e.preventDefault();

        if ($(this).closest(".accordion-item").hasClass("active")) {
          $(".accordion-item").removeClass("active");
        } else {
          $(".accordion-item").removeClass("active");
          $(this).closest(".accordion-item").addClass("active");
        }
        var $content = $(this).next();
        $content.slideToggle(100);
        $(".accordion-item .content").not($content).slideUp("fast");
      });

      // Scroll detection for elements in view
      function inVisible(element) {
        var WindowTop = $(window).scrollTop();
        var WindowBottom = WindowTop + $(window).height();
        var ElementTop = element.offset().top;
        var ElementBottom = ElementTop + element.height();
        if (ElementBottom <= WindowBottom && ElementTop >= WindowTop)
          animate(element);
      }

      // Animation for counter elements
      function animate(element) {
        if (!element.hasClass("ms-animated")) {
          var maxval = element.data("max");
          var html = element.html();
          element.addClass("ms-animated");
          $({
            countNum: element.html(),
          }).animate(
            {
              countNum: maxval,
            },
            {
              duration: 5000,
              easing: "linear",
              step: function () {
                element.html(Math.floor(this.countNum) + html);
              },
              complete: function () {
                element.html(this.countNum + html);
              },
            }
          );
        }
      }

      // Scroll event handler
      $(window).scroll(function () {
        $("h2[data-max]").each(function () {
          inVisible($(this));
        });
      });
    });
  },
};
</script>

<template>
  <section id="faq" class="gap accordion-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="heading two sec-title-animation animation-style2">
            <span class="title-animation">frequently asked questions</span>
            <h2 class="title-animation">Got questions? We’ve got answers.</h2>
          </div>
          <div class="accordion">
            <div class="accordion-item">
              <a href="#" class="heading">
                <div class="icon"></div>
                <div class="title">Apa itu file Gerber?</div>
              </a>

              <div class="content">
                <p>
                  File Gerber adalah format file standar yang digunakan untuk
                  manufaktur PCB. Mereka berisi semua informasi yang diperlukan
                  tentang desain PCB Anda termasuk lapisan tembaga, solder mask,
                  silkscreen, dan lubang bor. Kami menerima format Gerber X2
                  (direkomendasikan) atau file Gerber standar. <br />
                  Kami tidak menerima PDF, gambar, atau file desain asli
                  (seperti .brd atau .sch).
                </p>
              </div>
            </div>
            <div class="accordion-item active">
              <a href="#" class="heading">
                <div class="icon"></div>
                <div class="title">Bagaimana cara menghitung ukuran PCB?</div>
              </a>

              <div class="content" style="display: block">
                <p>
                  Ukuran PCB dihitung dengan mengalikan panjang dan lebar dalam
                  centimeter. Contoh:
                </p>
                <ul style="list-style-type: disc">
                  <li>PCB 10cm x 10cm = 100cm²</li>
                  <li>PCB 5cm x 5cm = 25cm²</li>
                </ul>
                <p>
                  Kalkulator kami secara otomatis menghitung ini ketika Anda
                  memasukkan dimensi dalam milimeter.
                </p>
              </div>
            </div>
            <div class="accordion-item">
              <a href="#" class="heading">
                <div class="icon"></div>
                <div class="title">Berapa jumlah pesanan minimum?</div>
              </a>

              <div class="content">
                <p>
                  Pesanan minimum adalah 5 PCB ukuran 100x100mm (total 500 cm²).
                  Untuk PCB yang lebih kecil, kami tetap mengenakan biaya untuk
                  5 pcs. <br />
                  Misalnya, jika Anda memesan 3 pcs PCB 100x100mm, Anda akan
                  dikenakan biaya untuk 5 pcs. Semua kuantitas harus dalam
                  kelipatan 5.
                </p>
              </div>
            </div>
            <div class="accordion-item">
              <a href="#" class="heading">
                <div class="icon"></div>
                <div class="title">Berapa lama waktu produksinya?</div>
              </a>
              <div class="content">
                <p>
                  Waktu produksi standar adalah 7-10 hari kerja setelah kami
                  mengkonfirmasi pesanan dan menerima pembayaran. <br />
                  Layanan ekspres (3-5 hari) mungkin tersedia dengan biaya
                  tambahan - hubungi kami untuk detail.
                </p>
              </div>
            </div>
            <div class="accordion-item">
              <a href="#" class="heading">
                <div class="icon"></div>
                <div class="title">Apa yang termasuk dalam garasnsi?</div>
              </a>

              <div class="content">
                <p>
                  Garansi ini mencakup cacat produksi yang berasal dari proses
                  fabrikasi kami (misalnya, sirkuit putus, soldermask terkelupas
                  yang tidak sesuai standar, atau lubang bor tidak presisi).
                  Jika PCB yang Anda terima memiliki cacat produksi yang
                  terbukti merupakan kesalahan kami, Anda berhak mendapatkan
                  pengembalian uang penuh atau penggantian produk baru tanpa
                  biaya tambahan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="accordion-contact">
            <h4>Phone No: <a href="callto:+1238717662">+1 23871 7662</a></h4>
            <h4>
              Email Id:
              <a href="mailto:layotic.official@gmail.com"
                >layotic.official@gmail.com</a
              >
            </h4>
            <a href="#" class="button btn"
              ><span><span>Contact Us</span></span></a
            >
          </div>
          <div class="accordion-img">
            <img src="https://placehold.co/416x574" alt="img" />
          </div>
        </div>
      </div>
    </div>
    <ul class="shaps-img">
      <li><img src="@/assets/img/shaps-3.png" alt="img" /></li>
    </ul>
  </section>
</template>
