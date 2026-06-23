<script setup lang="ts">
import { ref } from 'vue';

// Galeri görselleri (n tane eklenebilir)
const photos = ref([
  { id: 1, src: 'https://picsum.photos/800/800?random=21', category: 'Makyaj', size: 'large' },
  { id: 2, src: 'https://picsum.photos/800/600?random=22', category: 'Tırnak', size: 'small' },
  { id: 3, src: 'https://picsum.photos/600/800?random=23', category: 'Cilt Bakımı', size: 'small' },
  { id: 4, src: 'https://picsum.photos/800/1000?random=24', category: 'Lazer', size: 'medium' },
  { id: 5, src: 'https://picsum.photos/800/800?random=25', category: 'Gelin Makyajı', size: 'small' },
  { id: 6, src: 'https://picsum.photos/700/700?random=26', category: 'Kirpik', size: 'medium' },
  { id: 6, src: 'https://picsum.photos/700/700?random=26', category: 'Kirpik', size: 'medium' },
  { id: 6, src: 'https://picsum.photos/700/700?random=26', category: 'Kirpik', size: 'medium' },
  { id: 6, src: 'https://picsum.photos/700/700?random=26', category: 'Kirpik', size: 'medium' },
  { id: 6, src: 'https://picsum.photos/700/700?random=26', category: 'Kirpiks', size: 'medium' },
  { id: 6, src: 'https://picsum.photos/700/700?random=26', category: 'Kirpik', size: 'medium' },
]);

// Fotoğrafa tıklayınca büyütme (LightBox) için basit bir kontrol
const selectedImg = ref<string | null>(null);
const openLightbox = (src: string) => selectedImg.value = src;
const closeLightbox = () => selectedImg.value = null;
</script>

<template>
  <section class="gallery-section py-5">
    <div class="container py-lg-5">
      
      <!-- Başlık -->
      <div class="text-center mb-5">
        <span class="subtitle">Güzellik Kareleri</span>
        <h2 class="display-6 fw-bold mt-2">Stüdyomuzdan <span class="brand-color">Yansımalar</span></h2>
        <div class="title-line mx-auto"></div>
      </div>

      <!-- Galeri Izgarası (Bento Grid Stilinde) -->
      <div class="gallery-grid">
        <div 
          v-for="photo in photos" 
          :key="photo.id" 
          class="gallery-item"
          :class="photo.size"
          @click="openLightbox(photo.src)"
        >
          <img :src="photo.src" :alt="photo.category" class="gallery-img">
          <div class="gallery-overlay">
            <span class="category-tag">{{ photo.category }}</span>
            <i class="bi bi-plus-lg zoom-icon"></i>
          </div>
        </div>
      </div>

      <!-- Instagram Yönlendirme (Opsiyonel) -->
      <div class="text-center mt-5">
        <p class="mb-3 text-muted">Daha fazlası için bizi takip edin</p>
        <a href="#" class="btn btn-instagram">
          <i class="bi bi-instagram me-2"></i> @seymakayabeauty
        </a>
      </div>
    </div>

    <!-- Basit Lightbox Modal -->
    <Transition name="fade">
      <div v-if="selectedImg" class="custom-lightbox" @click="closeLightbox">
        <button class="close-btn">&times;</button>
        <img :src="selectedImg" class="lightbox-img" @click.stop>
      </div>
    </Transition>

  </section>
</template>

<style scoped>
.gallery-section {
  background-color: #fdfdfd;
}

.subtitle {
  color: rgb(211, 187, 140);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 0.85rem;
}

.brand-color {
  color: rgb(211, 187, 140);
}

.title-line {
  width: 50px;
  height: 3px;
  background-color: rgb(211, 187, 140);
  margin-top: 15px;
}

/* --- MASONRY / BENTO GRID YAPISI --- */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px; /* Her hücrenin temel yüksekliği */
  gap: 15px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
}

/* Hücre Boyutlandırmaları */
.gallery-item.small { grid-row: span 1; grid-column: span 1; }
.gallery-item.medium { grid-row: span 2; grid-column: span 1; }
.gallery-item.large { grid-row: span 2; grid-column: span 2; }

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Overlay Efekti */
.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  padding: 20px;
}

.category-tag {
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  transform: translateY(20px);
  transition: transform 0.4s ease;
  border-bottom: 1px solid rgb(211, 187, 140);
  padding-bottom: 5px;
}

.zoom-icon {
  color: rgb(211, 187, 140);
  font-size: 2rem;
  margin-top: 10px;
  transform: scale(0.5);
  transition: transform 0.4s ease;
}

/* Hover Durumları */
.gallery-item:hover .gallery-img {
  transform: scale(1.1);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover .category-tag,
.gallery-item:hover .zoom-icon {
  transform: translateY(0) scale(1);
}

/* Instagram Buton */
.btn-instagram {
  border: 1px solid rgb(211, 187, 140);
  color: rgb(211, 187, 140);
  font-weight: 600;
  padding: 10px 25px;
  border-radius: 50px;
  transition: 0.3s;
}

.btn-instagram:hover {
  background-color: rgb(211, 187, 140);
  color: #fff;
}

/* --- LIGHTBOX (MODAL) --- */
.custom-lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.lightbox-img {
  max-width: 90%;
  max-height: 90vh;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0,0,0,0.5);
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #fff;
  font-size: 3rem;
  background: none;
  border: none;
  cursor: pointer;
}

/* Animasyonlar */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Responsive */
@media (max-width: 991px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
  }
  .gallery-item.large {
    grid-column: span 2;
  }
}

@media (max-width: 576px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 250px;
  }
  .gallery-item.large, .gallery-item.medium, .gallery-item.small {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>