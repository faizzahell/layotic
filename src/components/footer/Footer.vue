<script>
import "./Footer.css";
</script>

<template>
  <footer class="gap no-bottom">
    <div class="container">
      <!-- <div class="footer-try">
        <div>
          <h2>Wujudkan Inovasi Anda</h2>
          <p>Dapatkan PCB Impian Lebih Cepat & Berkualitas Hanya di Layotic.</p>
        </div>
        <a href="#" class="button btn"
          ><span><span>Try 14 Days for Free</span></span></a
        >
      </div> -->
      <div class="row">
        <div class="col-lg-4">
          <div class="footer-logo">
            <img src="@/assets/img/logo.png" alt="img" />
            <p>
              Optimalkan produksi Anda dengan PCB custom LAYOTIC – kualitas
              terjamin, proses efisien
            </p>
            <ul class="social-media">
              <li>
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i class="flaticon-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="flaticon-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="widget-title">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <i class="fa-solid fa-angles-right"></i
                ><a href="#about">About Us</a>
              </li>
              <li>
                <i class="fa-solid fa-angles-right"></i
                ><a href="#services">Cara Order </a>
              </li>
              <li>
                <i class="fa-solid fa-angles-right"></i
                ><a href="#team">Spesifikasi </a>
              </li>
              <li>
                <i class="fa-solid fa-angles-right"></i><a href="#faq">FAQ</a>
              </li>
              <li>
                <i class="fa-solid fa-angles-right"></i
                ><a href="#pricing">Harga</a>
              </li>
              <li>
                <i class="fa-solid fa-angles-right"></i
                ><a target="blank" href="https://www.tokopedia.com/"
                  >Tokopedia</a
                >
              </li>
              <li>
                <i class="fa-solid fa-angles-right"></i
                ><a target="blank" href="https://shopee.co.id/">Shopee</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="widget-title">
            <h3>Contact Us</h3>
            <div class="get-in-touch">
              <div><i class="flaticon-map-location"></i></div>
              <div>
                <span>Phone No:</span>
                <h6>
                  <a target="_blank" href="https://wa.me/6281234567890"
                    >6281234567890</a
                  >
                </h6>
              </div>
            </div>
            <div class="get-in-touch">
              <div><i class="flaticon-iphone"></i></div>
              <div>
                <span>Email Address:</span>
                <h6>
                  <a href="mailto:layotic.official@gmail.com"
                    >layotic.official@gmail.com</a
                  >
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="all-rights">
        <p>© {{ currentYear }} websole by Layotic. All Rights Reserved.</p>
      </div>
    </div>
    <ul class="shaps-img">
      <li><img src="@/assets/img/shaps-4.png" alt="img" /></li>
      <li><img src="@/assets/img/shaps-1.png" alt="img" /></li>
      <li><img src="@/assets/img/shaps-2.png" alt="img" /></li>
    </ul>
  </footer>
</template>
