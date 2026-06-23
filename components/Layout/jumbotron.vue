<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

const videoRef = ref<HTMLVideoElement | null>(null);
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200);

// Ekran boyutunu takip eden fonksiyon
const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

// Ekran genişliğine göre video kaynağını belirleyen computed
// 768px altı dikey (mobile), üstü yatay (web) kabul edilir
const videoSource = computed(() => {
  return windowWidth.value < 768 
    ? "/seymakayaopening_mobile.webm" 
    : "/seymakayaopening_web.webm";
});

// Typewriter (Daktilo Efekti) Verileri
const messages = [
  "Eskişehir Gelin Makyajı ve Güzellik Hizmetleri",
  "Profesyonel Cilt Bakımı ve Yenileme",
  "Kalıcı Makyaj ve İpek Kirpik Uygulamaları",
  "Güzelliğinizi Profesyonel Dokunuşlarla Keşfedin"
];

const displayText = ref("");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let timeoutId: any = null;

const typeEffect = () => {
  const currentWord = messages[wordIndex];
  
  if (isDeleting) {
    displayText.value = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    displayText.value = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 20 : 60;

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    speed = 2500; 
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % messages.length;
    speed = 500;
  }

  timeoutId = setTimeout(typeEffect, speed);
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  // Video oynatma hızı ayarı
  if (videoRef.value) videoRef.value.playbackRate = 0.55;
  typeEffect();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  clearTimeout(timeoutId);
});
</script>

<template>
  <section class="my-jumbotron">
    
    <!-- Arka Plan Videosu - Key kullanımı video değiştiğinde yeniden yüklenmesini sağlar -->
    <video 
      ref="videoRef"
      :key="videoSource"
      autoplay 
      muted 
      loop 
      playsinline
      class="jumbo-video"
    >
      <source :src="videoSource" type="video/webm">
    </video>

    <!-- Karartma Overlay -->
    <div class="jumbo-overlay"></div>

    <!-- İçerik Alanı -->
    <div class="container jumbo-content">
      <div class="row">
        <div class="col-lg-9 text-white">
          <h1 class="jumbo-title mb-3">
            Şeyma Kaya <br> 
            <span class="brand-color-text">Beauty Makeup Studio</span>
          </h1>
          
          <div class="typewriter-area mb-5">
            <p class="jumbo-description">
              {{ displayText }}<span class="type-cursor">|</span>
            </p>
          </div>

          <div class="d-flex flex-wrap gap-3">
            <button class="btn btn-brand pulse-button">Randevu Al</button>
            <button class="btn btn-outline-light-custom">Hizmetlerimiz</button>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.my-jumbotron {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 550px;
  background-color: #000;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.jumbo-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  filter: grayscale(100%) brightness(0.5);
}

.jumbo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2));
  z-index: 2;
}

.jumbo-content {
  position: relative;
  z-index: 3;
}

.jumbo-title {
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
}

.brand-color-text {
  color: rgb(211, 187, 140);
}

.typewriter-area {
  min-height: 2.5rem;
}

.jumbo-description {
  font-size: clamp(1rem, 2vw, 1.4rem);
  font-weight: 400;
  opacity: 0.9;
}

.type-cursor {
  color: rgb(211, 187, 140);
  animation: blink 0.7s infinite;
  margin-left: 4px;
}

@keyframes blink { 50% { opacity: 0; } }

.btn-brand {
  background-color: rgb(211, 187, 140);
  color: #000;
  border: none;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 4px;
  font-size: 1.1rem;
}

.btn-outline-light-custom {
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: 0.3s;
}

.btn-outline-light-custom:hover {
  background: white;
  color: black;
}

@keyframes pulse-anim {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(211, 187, 140, 0.7); }
  50% { transform: scale(0.96); }
  100% { transform: scale(1); box-shadow: 0 0 0 15px rgba(211, 187, 140, 0); }
}

.pulse-button:active {
  animation: pulse-anim 0.4s ease-out;
}

@media (max-width: 768px) {
  .btn-brand, .btn-outline-light-custom {
    width: 100%;
    margin-bottom: 5px;
  }
  .jumbo-title {
    margin-top: 50px;
  }
}
</style>