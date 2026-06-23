<script setup lang="ts">
// NuxtLink kullanıldığı için ekstra bir import gerekmez.
</script>

<template>
  <!-- Navbar: Absolute pozisyon ile Jumbotron'un üzerine oturur -->
  <nav class="navbar navbar-expand-lg custom-navbar">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/">
        <img src="/test2.svg" alt="Şeyma Kaya Logo" width="220" class="logo-img">
      </NuxtLink>

      <button 
        class="navbar-toggler custom-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menü Linkleri -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Hakkımızda</NuxtLink>
          </li>
          
          <!-- Hizmetler Dropdown -->
          <li class="nav-item dropdown">
            <a 
              class="nav-link dropdown-toggle" 
              href="#" 
              role="button" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              Hizmetler
            </a>
            <ul class="dropdown-menu">
              <li><NuxtLink class="dropdown-item" to="/">Lazer Epilasyon</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/">Cilt Bakımı</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/">Tırnak Tasarımı</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/">Profesyonel Makyaj</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/">Kirpik & Kaş</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/">Kişisel Bakım</NuxtLink></li>
            </ul>
          </li>

          <li class="nav-item">
            <NuxtLink class="nav-link px-lg-3" to="/">Randevu Al</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link btn-contact" to="/">İletişim</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Navbar Genel Stili */
.custom-navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: transparent !important;
  padding-top: 20px;
  padding-bottom: 20px;
}

/* Link Stilleri */
.nav-link {
  color: rgba(255, 255, 255, 0.9) !important;
  font-weight: 500; /* İnce font isteği */
  font-size: 1.05rem;
  transition: all 0.3s ease;
  margin: 0 5px;
}

.nav-link:hover, .nav-link.router-link-active {
  color: rgb(211, 187, 140) !important;
}

/* Dropdown Tasarımı */
.dropdown-menu {
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px solid rgb(211, 187, 140);
  border-radius: 8px;
  padding: 10px;
}

.dropdown-item {
  color: #fff;
  font-weight: 400;
  padding: 8px 20px;
  transition: 0.2s;
}

.dropdown-item:hover {
  background-color: rgb(211, 187, 140);
  color: #000;
}

/* İletişim Butonu (Öne Çıkan) */
.btn-contact {
  border: 1px solid rgb(211, 187, 140);
  border-radius: 50px;
  padding: 8px 25px !important;
}

.btn-contact:hover {
  background-color: rgb(211, 187, 140);
  color: #000 !important;
}

/* Mobil Toggler (Hamburger) */
.custom-toggler {
  border-color: rgb(211, 187, 140);
  filter: invert(1) brightness(0.8) sepia(1) hue-rotate(10deg) saturate(2);
}

.custom-toggler:focus {
  box-shadow: 0 0 0 0.25rem rgba(211, 187, 140, 0.25);
}

/* Animasyonlar */
@keyframes sparkle {
  0%, 100% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.2); opacity: 0.8; }
}

/* Responsive Düzenlemeler */
@media (max-width: 991px) {
  .navbar-collapse {
    background-color: rgba(0, 0, 0, 0.95);
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(211, 187, 140, 0.3);
  }
  
  .logo-img {
    width: 180px;
  }

  .nav-link {
    padding: 10px 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
}
</style>