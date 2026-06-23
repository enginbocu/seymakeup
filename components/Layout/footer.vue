<template>
  <footer class="footer-section">
    <div class="container py-5">
      <div class="row gy-4">
        <!-- Sütun 1: Sayfalar -->
        <div class="col-6 col-md-2">
          <h6 class="footer-title">KURUMSAL</h6>
          <ul class="footer-links">
            <li><NuxtLink to="/">Hakkımızda</NuxtLink></li>
            <li><NuxtLink to="/">İletişim</NuxtLink></li>
          </ul>
        </div>

        <!-- Sütun 2: Hizmetler -->
        <div class="col-6 col-md-3">
          <h6 class="footer-title">HİZMETLERİMİZ</h6>
          <ul class="footer-links">
            <li><NuxtLink to="/">Lazer Epilasyon</NuxtLink></li>
            <li><NuxtLink to="/">Cilt Bakımı</NuxtLink></li>
            <li><NuxtLink to="/">Tırnak Tasarımı</NuxtLink></li>
            <li><NuxtLink to="/">Profesyonel Makyaj</NuxtLink></li>
            <li><NuxtLink to="/">Kirpik & Kaş</NuxtLink></li>
          </ul>
        </div>

        <!-- Sütun 3: İletişim Detay -->
        <div class="col-12 col-md-3">
          <h6 class="footer-title">İLETİŞİM</h6>
          <ul class="footer-links">
            <li><a href="https://wa.me/905342367746" target="_blank">0534 236 77 46</a></li>
            <li><a href="mailto:info@seymakaya.com">info@seymakaya.com</a></li>
            <li><span class="addr">Hoşnudiye, 732. Sk No:12, 26130 Tepebaşı/Eskişehir</span></li>
          </ul>
        </div>

        <!-- Sütun 4: Logo ve Bülten -->
        <div class="col-12 col-md-4 text-md-end">
          <img src="/test2.svg" alt="Şeyma Kaya" width="220" class="mb-3 footer-logo">
          <p class="footer-text">
            Eskişehir'in kalbinde profesyonel güzellik dokunuşları. 
            Güncel duyurular ve kampanyalar için bizi takip edin.
          </p>
          <div class="social-icons-top mt-3">
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </div>

      <!-- Alt Bar -->
      <div class="footer-bottom mt-5 pt-4 border-top">
        <div class="row align-items-center">
          <div class="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <p class="copyright mb-0">© {{ new Date().getFullYear() }} Şeyma Kaya Beauty Makeup Studio. Tüm Hakları Saklıdır.</p>
          </div>
          <div class="col-md-4 text-center mb-3 mb-md-0">
            <div class="social-links-bottom">
              <span>Bizi Takip Edin:</span>
              <a href="#"><i class="bi bi-facebook ms-2"></i></a>
              <a href="https://www.instagram.com/seymakeupstudio/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 640 640">
                  <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" fill="#eee"/></svg>
              </a>
            </div>
          </div>
          <div class="col-md-4 text-center text-md-end">
            <div class="legal-links">
              <NuxtLink to="/">KVKK</NuxtLink>
              <NuxtLink to="/" class="ms-3">Çerez Politikası</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

.footer-section {
  background-color: #111; /* Görseldeki pudra rengi */
  color: #111;
  font-family: 'Inter', sans-serif;
}

.footer-title {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 25px;
  color: #eee;
  text-transform: uppercase;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a, .addr {
  text-decoration: none;
  color: #555;
  font-size: 15px;
  transition: 0.3s;
  font-weight: 400;
}

.footer-links a:hover {
  color: rgb(211, 187, 140);
  padding-left: 5px;
}

.footer-text {
  font-size: 14px;
  line-height: 1.6;
  color: #666;
}

.footer-logo {
  filter: grayscale(0.2);
}

/* Alt Bar Stilleri */
.footer-bottom {
  border-top-color: rgba(0, 0, 0, 0.1) !important;
}

.copyright, .legal-links a, .social-links-bottom span {
  font-size: 13px;
  color: #777;
  text-decoration: none;
}

.legal-links a:hover {
  color: #000;
}

.social-links-bottom a i {
  font-size: 16px;
  color: #444;
  transition: 0.3s;
}

.social-links-bottom a:hover i {
  color: rgb(211, 187, 140);
}

/* Responsive Dokunuşlar */
@media (max-width: 768px) {
  .footer-title {
    margin-bottom: 15px;
    margin-top: 10px;
  }
  
  .footer-text {
    text-align: center;
  }
  
  .text-md-end {
    text-align: center !important;
  }

  .footer-bottom {
    padding-bottom: 40px; /* Mobil cihazlar için alt boşluk */
  }
}
</style>