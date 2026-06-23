<script setup lang="ts">
const formData = ref({
  name: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  message: "",
});

// Lottie animasyonu için
const lottieContainer = ref<HTMLElement | null>(null);
let lottieInstance: any = null;

// Lottie-web'i CDN'den yükle
const loadLottie = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if ((window as any).lottie) {
      resolve((window as any).lottie);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js";
    script.onload = () => {
      resolve((window as any).lottie);
    };
    script.onerror = () => {
      reject(new Error("Lottie script yüklenemedi"));
    };
    document.head.appendChild(script);
  });
};

onMounted(async () => {
  if (lottieContainer.value) {
    try {
      // Lottie-web'i CDN'den yükle
      const lottie = await loadLottie();
      const animationData = await $fetch("/CalendarBooking.json");

      lottieInstance = lottie.loadAnimation({
        container: lottieContainer.value,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    } catch (error) {
      console.error("Lottie animasyonu yüklenirken hata:", error);
    }
  }
});

onUnmounted(() => {
  if (lottieInstance) {
    lottieInstance.destroy();
  }
});

// Telefon numarası maskeleme fonksiyonu
const formatPhoneNumber = (value: string) => {
  // Sadece rakamları al
  const numbers = value.replace(/\D/g, "");

  // İlk karakter 0 olmalı, değilse 0 ekle
  let digits = numbers;
  if (digits.length > 0 && digits[0] !== "0") {
    digits = "0" + digits;
  }

  // Maksimum 11 karakter (0 xxx xxx xx xx)
  const limitedNumbers = digits.slice(0, 11);

  // Formatla: 0 xxx xxx xx xx
  if (limitedNumbers.length === 0) {
    return "";
  } else if (limitedNumbers.length === 1) {
    return limitedNumbers;
  } else if (limitedNumbers.length <= 4) {
    return `${limitedNumbers.slice(0, 1)} ${limitedNumbers.slice(1)}`;
  } else if (limitedNumbers.length <= 7) {
    return `${limitedNumbers.slice(0, 1)} ${limitedNumbers.slice(
      1,
      4
    )} ${limitedNumbers.slice(4)}`;
  } else if (limitedNumbers.length <= 9) {
    return `${limitedNumbers.slice(0, 1)} ${limitedNumbers.slice(
      1,
      4
    )} ${limitedNumbers.slice(4, 7)} ${limitedNumbers.slice(7)}`;
  } else {
    return `${limitedNumbers.slice(0, 1)} ${limitedNumbers.slice(
      1,
      4
    )} ${limitedNumbers.slice(4, 7)} ${limitedNumbers.slice(
      7,
      9
    )} ${limitedNumbers.slice(9)}`;
  }
};

// Sadece rakam girişine izin ver
const handlePhoneKeyPress = (event: KeyboardEvent) => {
  const char = String.fromCharCode(event.which || event.keyCode);
  // Sadece rakam (0-9) tuşlarına izin ver
  if (!/[0-9]/.test(char)) {
    event.preventDefault();
  }
};

// Paste işlemlerini kontrol et
const handlePhonePaste = (event: ClipboardEvent) => {
  event.preventDefault();
  const pastedText = event.clipboardData?.getData("text") || "";
  // Sadece rakamları al
  const numbers = pastedText.replace(/\D/g, "");
  if (numbers) {
    const formatted = formatPhoneNumber(numbers);
    formData.value.phone = formatted;
    const target = event.target as HTMLInputElement;

    // Validation kontrolü
    if (validatePhone()) {
      target.setCustomValidity("");
    } else {
      const message = getPhoneValidationMessage();
      target.setCustomValidity(message);
    }
    target.reportValidity();
  }
};

const handlePhoneInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const formatted = formatPhoneNumber(target.value);
  formData.value.phone = formatted;

  // Real-time validation
  if (validatePhone()) {
    target.setCustomValidity("");
  } else {
    const message = getPhoneValidationMessage();
    target.setCustomValidity(message);
  }

  // Validation durumunu kontrol et
  target.reportValidity();
};

// Telefon numarası validasyonu (tam 11 karakter olmalı: 0 + 10 rakam)
const validatePhone = () => {
  const numbers = formData.value.phone.replace(/\D/g, "");
  return numbers.length === 11 && numbers[0] === "0";
};

// Telefon input validasyon mesajı
const getPhoneValidationMessage = () => {
  const numbers = formData.value.phone.replace(/\D/g, "");
  if (numbers.length === 0) {
    return "Telefon numarası zorunludur.";
  } else if (numbers.length < 11) {
    return `Telefon numarası eksik. ${
      11 - numbers.length
    } rakam daha girmelisiniz.`;
  } else if (numbers.length > 11) {
    return "Telefon numarası çok uzun. Lütfen 11 haneli bir numara giriniz.";
  } else if (numbers[0] !== "0") {
    return "Telefon numarası 0 ile başlamalıdır.";
  }
  return "";
};

const services = [
  "Lazer Epilasyon",
  "Cilt Bakımı (Hydrafacial, Medikal)",
  "Tırnak (Protez, Kalıcı Oje, Nail Art)",
  "Makyaj (Profesyonel, Günlük, Eyeliner, Dudak)",
  "Kirpik & Kaş (İpek Kirpik, Laminasyon, Microblading)",
  "Kişisel Bakım",
];

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
];

const handleSubmit = (event: Event) => {
  event.preventDefault();

  const form = event.target as HTMLFormElement;

  // Bootstrap validation kontrolü
  if (!form.checkValidity()) {
    event.stopPropagation();
    form.classList.add("was-validated");
    return;
  }

  // Telefon validasyonu
  const phoneInput = document.getElementById("phone") as HTMLInputElement;
  if (!validatePhone()) {
    const message = getPhoneValidationMessage();
    phoneInput.setCustomValidity(
      message ||
        "Lütfen geçerli bir telefon numarası giriniz (11 haneli, 0 ile başlamalı)"
    );
    phoneInput.reportValidity();
    form.classList.add("was-validated");
    return;
  } else {
    phoneInput.setCustomValidity("");
  }

  // Form gönderme işlemi burada yapılacak
  console.log("Form gönderildi:", formData.value);
  // TODO: API çağrısı veya form gönderme işlemi
  alert("Randevu talebiniz alınmıştır! En kısa sürede size dönüş yapacağız.");

  // Formu temizle
  formData.value = {
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  };

  // Validation class'ını kaldır
  form.classList.remove("was-validated");
};

// Bugünden itibaren tarih seçimi için minimum tarih
const getMinDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};
</script>

<template>
  <div class="appointment" style="background-color: rgba(0, 0, 0, 0.01)">
    <div class="appointment container">
      <div class="row align-items-center">
        <!-- Sol taraf: Lottie Animasyonu -->
        <div class="col-12 col-lg-6 mb-4 mb-lg-0">
          <div ref="lottieContainer" class="lottie-container"></div>
        </div>

        <!-- Sağ taraf: Form -->
        <div class="col-12 col-lg-6">
          <h2 class="mb-4"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 640 640">
              <path d="M224 64C206.3 64 192 78.3 192 96L192 128L160 128C124.7 128 96 156.7 96 192L96 240L544 240L544 192C544 156.7 515.3 128 480 128L448 128L448 96C448 78.3 433.7 64 416 64C398.3 64 384 78.3 384 96L384 128L256 128L256 96C256 78.3 241.7 64 224 64zM96 288L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 288L96 288z"/>
            </svg>
            Randevu Al</h2>
          <form
            @submit.prevent="handleSubmit"
            class="needs-validation"
            novalidate
          >
            <!-- İsim Soyisim -->
            <div class="mb-3">
              <label for="name" class="form-label"
                >Ad Soyad <span class="text-danger">*</span></label
              >
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="formData.name"
                placeholder="Adınız ve soyadınız"
                required
              />
              <div class="invalid-feedback">
                Lütfen adınızı ve soyadınızı giriniz.
              </div>
            </div>

            <!-- Telefon -->
            <div class="mb-3">
              <label for="phone" class="form-label"
                >Telefon <span class="text-danger">*</span></label
              >
              <input
                type="tel"
                class="form-control"
                id="phone"
                :value="formData.phone"
                @input="handlePhoneInput"
                @keypress="handlePhoneKeyPress"
                @paste="handlePhonePaste"
                placeholder="0 xxx xxx xx xx"
                maxlength="15"
                required
              />
              <div class="invalid-feedback">
                Lütfen geçerli bir telefon numarası giriniz (11 haneli, 0 ile
                başlamalı).
              </div>
            </div>

            <!-- Hizmet Seçimi -->
            <div class="mb-3">
              <label for="service" class="form-label"
                >Hizmet <span class="text-danger">*</span></label
              >
              <select
                class="form-select"
                id="service"
                v-model="formData.service"
                required
              >
                <option value="" disabled selected>
                  Lütfen bir hizmet seçiniz
                </option>
                <option
                  v-for="service in services"
                  :key="service"
                  :value="service"
                >
                  {{ service }}
                </option>
              </select>
              <div class="invalid-feedback">Lütfen bir hizmet seçiniz.</div>
            </div>

            <!-- Tarih ve Saat -->
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="date" class="form-label"
                  >Tarih <span class="text-danger">*</span></label
                >
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  v-model="formData.date"
                  :min="getMinDate()"
                  required
                />
                <div class="invalid-feedback">Lütfen bir tarih seçiniz.</div>
              </div>

              <div class="col-md-6 mb-3">
                <label for="time" class="form-label"
                  >Saat <span class="text-danger">*</span></label
                >
                <select
                  class="form-select"
                  id="time"
                  v-model="formData.time"
                  required
                >
                  <option value="" disabled selected>Saat seçiniz</option>
                  <option v-for="slot in timeSlots" :key="slot" :value="slot">
                    {{ slot }}
                  </option>
                </select>
                <div class="invalid-feedback">Lütfen bir saat seçiniz.</div>
              </div>
            </div>

            <!-- Mesaj/Not -->
            <div class="mb-3">
              <label for="message" class="form-label"
                >Mesaj / Not <span class="text-danger">*</span></label
              >
              <textarea
                class="form-control"
                id="message"
                v-model="formData.message"
                rows="4"
                placeholder="Eklemek istediğiniz bir not varsa buraya yazabilirsiniz..."
                required
              ></textarea>
              <div class="invalid-feedback">Lütfen bir mesaj giriniz.</div>
            </div>

            <!-- Gönder Butonu -->
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary btn-md">
                Randevu Talebi Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.appointment {
  padding: 2rem 0;
}

.appointment h2 {
  color: #333;
  font-weight: 600;
}

.lottie-container {
  width: 100%;
  height: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lottie-container :deep(svg) {
  width: 100% !important;
  height: auto !important;
  max-width: 100%;
}

.form-label {
  font-weight: 500;
  color: #555;
  margin-bottom: 0.5rem;
}

.form-control:focus,
.form-select:focus {
  border-color: #86b7fe;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.btn-primary {
  background-color: #d63384;
  border-color: #d63384;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #b02a5f;
  border-color: #a52854;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.text-danger {
  color: #dc3545 !important;
}

/* Responsive */
@media (max-width: 991.98px) {
  .lottie-container {
    min-height: 300px;
    margin-bottom: 2rem;
  }
}
</style>