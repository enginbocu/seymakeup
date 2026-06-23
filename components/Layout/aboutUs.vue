<template>
  <section class="about-section py-5" id="hakkimizda">
    <div class="container py-lg-5">
      <div class="row align-items-center gy-5">
        <!-- Sol Taraf: Görsel Alanı -->
        <div class="col-lg-5 text-center position-relative">
          <div class="layered-visual">
            <!-- Organik Arka Plan Şekli -->
            <div class="blob-bg"></div>

            <!-- Dekoratif Çerçeve Çizgisi -->
            <div class="offset-border"></div>

            <!-- Ana Görsel Kutusu -->
            <div class="image-wrapper shadow-lg">
              <img
                src="/seymakaya.webp"
                alt="Şeyma Kaya"
                class="img-fluid main-img"
              />
              <!-- Yüzen Rozet -->
              <div class="experience-badge">
                <div class="badge-inner">
                  <span class="num">2020</span>
                  <span class="txt"
                    >’den beri <br />
                    Eskişehir</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sağ Taraf: Metin Alanı -->
        <div class="col-lg-7 ps-lg-5">
          <div class="about-content">
            <h6 class="text-accent fw-bold mb-2">Hikayemiz</h6>
            <h2 class="display-5 fw-bold mb-4">
              Güzelliğe Açılan Profesyonel Bir Dokunuş
            </h2>

            <p class="lead mb-4">
              Şeyma Kaya Beauty Makeup Studio olarak, Eskişehir'in kalbinde her
              kadının kendini özel ve eşsiz hissetmesi gerektiğine inanıyoruz.
            </p>

            <div class="features-list mb-4">
              <div class="d-flex align-items-start mb-3">
                <div class="icon-box me-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    viewBox="0 0 640 640"
                  >
                    <path
                      d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z"
                    />
                  </svg>
                </div>
                <div>
                  <h5 class="mb-1 fw-bold">Kişiye Özel Yaklaşım</h5>
                  <p class="text-muted">
                    Cilt tipinizden yüz hatlarınıza kadar her detayı analiz
                    ederek size en uygun işlemleri planlıyoruz.
                  </p>
                </div>
              </div>

              <div class="d-flex align-items-start mb-3">
                <div class="icon-box me-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    viewBox="0 0 640 640"
                  >
                    <path
                      d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z"
                    />
                  </svg>
                </div>
                <div>
                  <h5 class="mb-1 fw-bold">Profesyonel Uzmanlık</h5>
                  <p class="text-muted">
                    Gelin makyajından cilt bakımına, ipek kirpikten tırnak
                    sanatına kadar tüm hizmetlerde uzman kadromuzla
                    yanınızdayız.
                  </p>
                </div>
              </div>
            </div>

            <p class="text-muted mb-5">
              İki kız kardeşin tutkusuyla kurulan stüdyomuzda, en kaliteli
              materyalleri ve en yeni teknikleri kullanarak, doğal güzelliğinizi
              ön plana çıkarmayı hedefliyoruz. Bizim için güzellik sadece bir
              işlem değil, bir terapi sürecidir.
            </p>

            <div class="d-flex align-items-center gap-4">
              <NuxtLink to="/" class="btn btn-about"
                >Hizmetlerimizi Keşfedin</NuxtLink
              >
              <div class="experience">
                <span class="d-block fw-bold fs-4 line-height-1">5+</span>
                <span class="text-muted small">Yıllık Deneyim</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <style scoped>
.about-section {
  background-color: #fff;
  overflow: hidden;
}

.text-accent {
  color: rgb(211, 187, 140);
  letter-spacing: 2px;
  font-size: 0.9rem;
}

/* Görsel Çerçeve ve Efektleri */
.image-wrapper {
  display: inline-block;
  position: relative;
  padding: 20px;
}

.about-img {
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-width: 350px; /* Belirttiğin 300px'e yakın, esnek yapı */
  transition: transform 0.5s ease;
}

.image-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 80%;
  border: 8px solid rgb(211, 187, 140);
  border-radius: 10px;
  z-index: 1;
  opacity: 0.3;
}

/* İkon Kutusu */
.icon-box {
  width: 45px;
  height: 45px;
  background-color: rgba(211, 187, 140, 0.1);
  color: rgb(211, 187, 140);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.2rem;
}

/* Buton */
.btn-about {
  background-color: rgb(211, 187, 140);
  color: #000;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 5px;
  transition: 0.3s;
}

.btn-about:hover {
  background-color: rgb(191, 167, 120);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(211, 187, 140, 0.2);
}

.line-height-1 {
  line-height: 1;
}

/* Responsive Düzenlemeler */
@media (max-width: 991px) {
  .about-img {
    max-width: 280px;
  }
  .display-5 {
    font-size: 2.2rem;
  }
  .image-frame {
    width: 90%;
    height: 90%;
  }
}

@media (max-width: 576px) {
  .about-content {
    text-align: center;
  }
  .d-flex {
    justify-content: center;
    text-align: left;
  }
  .gap-4 {
    flex-direction: column;
    gap: 1.5rem !important;
  }
}
/* Sol Görsel Alanı Tasarımı */
.layered-visual {
  position: relative;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 30px;
}

/* Arka plandaki soft amorf şekil */
.blob-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 110%;
  height: 110%;
  transform: translate(-55%, -50%);
  background-color: rgba(211, 187, 140, 0.12);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  z-index: 1;
}

/* Görselin arkasından taşan ince altın çerçeve */
.offset-border {
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  height: 80%;
  border: 1px solid rgb(211, 187, 140);
  border-radius: 20px;
  z-index: 2;
}

.image-wrapper {
  position: relative;
  z-index: 3;
  border-radius: 20px;
  transition: transform 0.4s ease;
}

.main-img {
  border-radius: 20px;
  width: 100%;
  display: block;
  /* Hafif soft bir kontrast ekleyerek fotoğrafı canlandırır */
  filter: brightness(1.02) contrast(1.02);
}

/* Yüzen Rozet Animasyonu */
.experience-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background-color: rgb(211, 187, 140);
  color: #000;
  padding: 15px 20px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(211, 187, 140, 0.4);
  animation: floatAnim 4s ease-in-out infinite;
}

.badge-inner {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.badge-inner .num {
  font-size: 1.4rem;
  font-weight: 800;
}

.badge-inner .txt {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

@keyframes floatAnim {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

/* Mobil Ayarlar */
@media (max-width: 991px) {
  .layered-visual {
    max-width: 300px;
    margin-bottom: 50px;
  }
  .experience-badge {
    right: 0;
    bottom: -10px;
  }
}
</style>