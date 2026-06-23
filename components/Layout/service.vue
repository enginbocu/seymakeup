<script setup lang="ts">
import { ref, onMounted } from 'vue';

const services = [
  {
    title: "Lazer Epilasyon",
    description: "Son teknoloji cihazlarımızla konforlu ve etkili lazer epilasyon hizmeti sunuyoruz. İstenmeyen tüylerden kalıcı olarak kurtulmanız için cilt tipinize en uygun protokolleri uzman kadromuzla uyguluyoruz.",
    image: "https://picsum.photos/600/800?random=11"
  },
  {
    title: "Medikal Cilt Bakımı",
    description: "Hydrafacial ve medikal cilt bakımı uygulamalarımızla cildinizin ihtiyacı olan nemi, temizliği ve canlılığı geri kazandırıyoruz. Cildinizi derinlemesine temizlerken aynı zamanda besliyoruz.",
    image: "https://picsum.photos/600/800?random=12"
  },
  {
    title: "Tırnak Tasarımı",
    description: "Protez tırnak, kalıcı oje ve kişiye özel nail art tasarımlarıyla ellerinize estetik bir dokunuş yapıyoruz. En kaliteli materyallerle uzun süreli kullanım ve hijyen garantisi veriyoruz.",
    image: "https://picsum.photos/600/800?random=13"
  },
  {
    title: "Profesyonel Makyaj",
    description: "Gelin makyajı, gece makyajı ve özel çekimler için yüz hatlarınızı en doğru şekilde vurgulayan profesyonel makyaj uygulamaları sunuyoruz. En özel günlerinizde kusursuz görünmenizi sağlıyoruz.",
    image: "https://picsum.photos/600/800?random=14"
  }
];

const swiperEl = ref<any>(null);
const isMounted = ref(false); // SSR kontrolü için

onMounted(async () => {
  // 1. Swiper'ı istemci tarafında kaydet
  const { register } = await import('swiper/element/bundle');
  register();

  isMounted.value = true; // Bileşen yüklendi

  // 2. Swiper parametrelerini ayarla
  if (swiperEl.value) {
    const swiperParams = {
      effect: 'fade',
      fadeEffect: { crossFade: true },
      speed: 800,
      loop: true,
      allowTouchMove: false,
    };
    Object.assign(swiperEl.value, swiperParams);
    swiperEl.value.initialize();
  }
});

const goNext = () => swiperEl.value?.swiper.slideNext();
const goPrev = () => swiperEl.value?.swiper.slidePrev();
</script>

<template>
  <section class="services-section py-5">
    <!-- SEO İÇİN GİZLİ AMA KAYNAKTA GÖRÜNEN METİNLER (OPSİYONEL AMA GARANTİ) -->
    <!-- Not: Bunu eklemeseniz bile aşağıdaki yapı SSR ile çalışacaktır -->

    <div class="container py-lg-5">
      <div class="row mb-4">
        <div class="col-lg-12">
          <span class="subtitle">Hizmetlerimiz</span>
        </div>
      </div>

      <!-- ÖNEMLİ: init="false" ve v-for döngüsü -->
      <!-- Nuxt bu swiper-container'ı ve içindeki slide'ları standart div gibi render eder -->
      <swiper-container
        ref="swiperEl"
        init="false"
        class="services-swiper"
      >
        <swiper-slide v-for="(service, index) in services" :key="index">
          <div class="row align-items-center gy-5">
            
            <!-- Sol: Görsel -->
            <div class="col-lg-6">
              <div class="image-stack-wrapper">
                <div class="stack-bg-1"></div>
                <div class="stack-bg-2"></div>
                <div class="main-image-container">
                  <img :src="service.image" :alt="service.title" class="service-image shadow">
                </div>
              </div>
            </div>

            <!-- Sağ: İçerik (Burası artık SSR'da görünecek) -->
            <div class="col-lg-6 ps-lg-5">
              <div class="service-info-box">
                <h2 class="service-title-display">{{ service.title }}</h2>
                <div class="divider"></div>
                <p class="service-text-display">{{ service.description }}</p>
                
                <div class="nav-controls d-flex gap-3 mt-4">
                  <button @click="goPrev" class="custom-nav-btn" aria-label="Geri">
                    <i class="bi bi-arrow-left"></i>
                  </button>
                  <button @click="goNext" class="custom-nav-btn" aria-label="İleri">
                    <i class="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<style scoped>
/* Swiper yüklendiğinde içeriklerin kaybolmaması için ilk slide'ı görünür yapıyoruz */
swiper-container:not(:defined) swiper-slide:first-child {
  display: block;
  opacity: 1;
  visibility: visible;
}

/* Swiper henüz tanımlanmamışken (SSR anı) diğerlerini gizle */
swiper-container:not(:defined) swiper-slide:not(:first-child) {
  display: none;
}

.services-section { background-color: #fff; min-height: 600px; }
.subtitle { color: rgb(211, 187, 140); text-transform: uppercase; font-weight: 700; letter-spacing: 3px; font-size: 0.9rem; }
.image-stack-wrapper { position: relative; width: 100%; max-width: 380px; margin: 0 auto; aspect-ratio: 3 / 4; }
.stack-bg-1, .stack-bg-2 { position: absolute; width: 100%; height: 100%; border-radius: 15px; top: 0; left: 0; }
.stack-bg-1 { background-color: rgba(211, 187, 140, 0.15); transform: rotate(-6deg); z-index: 1; }
.stack-bg-2 { background-color: rgba(211, 187, 140, 0.3); transform: rotate(-3deg); z-index: 2; }
.main-image-container { position: relative; z-index: 3; width: 100%; height: 100%; border-radius: 15px; overflow: hidden; }
.service-image { width: 100%; height: 100%; object-fit: cover; }
.service-title-display { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; color: #1a1a1a; margin-bottom: 15px; }
.divider { width: 60px; height: 4px; background-color: rgb(211, 187, 140); margin-bottom: 25px; }
.service-text-display { font-size: 1.15rem; line-height: 1.8; color: #444; max-width: 500px; }
.custom-nav-btn { width: 55px; height: 55px; border-radius: 50%; border: 1px solid rgb(211, 187, 140); color: rgb(211, 187, 140); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; transition: 0.3s; background: none; cursor: pointer; }
.custom-nav-btn:hover { background-color: rgb(211, 187, 140); color: #fff; }

/* Swiper efektleri için geçiş ayarı */
swiper-slide { opacity: 0; visibility: hidden; transition: opacity 0.8s ease; }
swiper-slide.swiper-slide-active { opacity: 1; visibility: visible; }

@media (max-width: 991px) {
  .service-info-box { text-align: center; display: flex; flex-direction: column; align-items: center; }
  .image-stack-wrapper { max-width: 280px; }
  .nav-controls { justify-content: center; }
}
</style>