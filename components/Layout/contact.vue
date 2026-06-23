<script setup lang="ts">
const contactFormData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

// Telefon numarası maskeleme fonksiyonu
const formatPhoneNumber = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  let digits = numbers;
  if (digits.length > 0 && digits[0] !== "0") {
    digits = "0" + digits;
  }
  const limitedNumbers = digits.slice(0, 11);

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

const handlePhoneKeyPress = (event: KeyboardEvent) => {
  const char = String.fromCharCode(event.which || event.keyCode);
  if (!/[0-9]/.test(char)) {
    event.preventDefault();
  }
};

// Telefon numarası validasyonu (tam 11 karakter olmalı: 0 + 10 rakam)
const validatePhone = () => {
  const numbers = contactFormData.value.phone.replace(/\D/g, "");
  return numbers.length === 11 && numbers[0] === "0";
};

// Telefon input validasyon mesajı
const getPhoneValidationMessage = () => {
  const numbers = contactFormData.value.phone.replace(/\D/g, "");
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

const handlePhonePaste = (event: ClipboardEvent) => {
  event.preventDefault();
  const pastedText = event.clipboardData?.getData("text") || "";
  const numbers = pastedText.replace(/\D/g, "");
  if (numbers) {
    const formatted = formatPhoneNumber(numbers);
    contactFormData.value.phone = formatted;
    const target = event.target as HTMLInputElement;

    // Validation kontrolü - Telefon zorunlu ve mutlaka geçerli olmalı
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
  contactFormData.value.phone = formatted;

  // Real-time validation - Telefon zorunlu ve mutlaka geçerli olmalı
  if (validatePhone()) {
    // Telefon geçerliyse
    target.setCustomValidity("");
  } else {
    // Telefon geçersiz veya eksik
    const message = getPhoneValidationMessage();
    target.setCustomValidity(message);
  }

  // Validation durumunu kontrol et
  target.reportValidity();
};

const handleContactSubmit = (event: Event) => {
  event.preventDefault();

  const form = event.target as HTMLFormElement;

  if (!form.checkValidity()) {
    event.stopPropagation();
    form.classList.add("was-validated");
    return;
  }

  // Telefon validasyonu (zorunlu ve mutlaka geçerli olmalı)
  const phoneInput = document.getElementById(
    "contact-phone"
  ) as HTMLInputElement;
  if (!validatePhone()) {
    // Telefon geçersiz veya eksik
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

  console.log("İletişim formu gönderildi:", contactFormData.value);
  alert("Mesajınız alınmıştır! En kısa sürede size dönüş yapacağız.");

  contactFormData.value = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  form.classList.remove("was-validated");
};
</script>

<template>
  <div class="container">
    <div class="contact my-5">
      <h2 class="text-center mb-4">İletişim</h2>
      <div class="row align-items-start">
        <!-- Sol taraf: Google Maps -->
        <div class="col-12 col-lg-6 mb-4 mb-lg-0">
          <div class="map-container">
            <iframe
              class="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.090422871892!2d30.503248110950114!3d39.78252609387734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc15ad0d40d989%3A0x90adf1d486b809e1!2s%C5%9EEYMA%20KAYA%20BEAUTY%20%26%20MAKEUP%20STUDIO!5e0!3m2!1str!2str!4v1768324998649!5m2!1str!2str"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <!-- Sağ taraf: İletişim Formu -->
        <div class="col-12 col-lg-6">
          <h3 class="mb-4">Bize Ulaşın</h3>
          <form
            @submit.prevent="handleContactSubmit"
            class="needs-validation"
            novalidate
          >
            <!-- Ad Soyad -->
            <div class="mb-3">
              <label for="contact-name" class="form-label"
                >Ad Soyad <span class="text-danger">*</span></label
              >
              <input
                type="text"
                class="form-control"
                id="contact-name"
                v-model="contactFormData.name"
                placeholder="Adınız ve soyadınız"
                required
              />
              <div class="invalid-feedback">
                Lütfen adınızı ve soyadınızı giriniz.
              </div>
            </div>

            <!-- E-posta ve Telefon (Yan yana) -->
            <div class="row">
              <div class="col-12 col-md-6 mb-3">
                <label for="contact-email" class="form-label"
                  >E-posta <span class="text-danger">*</span></label
                >
                <input
                  type="email"
                  class="form-control"
                  id="contact-email"
                  v-model="contactFormData.email"
                  placeholder="ornek@email.com"
                  required
                />
                <div class="invalid-feedback">
                  Lütfen geçerli bir e-posta adresi giriniz.
                </div>
              </div>

              <div class="col-12 col-md-6 mb-3">
                <label for="contact-phone" class="form-label"
                  >Telefon <span class="text-danger">*</span></label
                >
                <input
                  type="tel"
                  class="form-control"
                  id="contact-phone"
                  :value="contactFormData.phone"
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
            </div>

            <!-- Mesaj -->
            <div class="mb-3">
              <label for="contact-message" class="form-label"
                >Mesaj <span class="text-danger">*</span></label
              >
              <textarea
                class="form-control"
                id="contact-message"
                v-model="contactFormData.message"
                rows="5"
                placeholder="Mesajınızı buraya yazabilirsiniz..."
                required
              ></textarea>
              <div class="invalid-feedback">Lütfen bir mesaj giriniz.</div>
            </div>

            <!-- Gönder Butonu -->
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary btn-lg">
                Mesaj Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.contact {
  padding: 2rem 0;
}

.contact h2 {
  color: #333;
  font-weight: 600;
}

.contact h3 {
  color: #333;
  font-weight: 600;
  font-size: 1.5rem;
}

.map-container {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  outline: 5px solid #2f2f2f;
  outline-offset: 5px;
  position: relative;
}

.map-iframe {
  border: none;
  width: 100%;
  height: 450px;
  display: block;
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
  background-color: #2f2f2f;
  border-color: #2f2f2f;
  transition: all 0.3s ease;
  font-size: 0.85rem;
}

.btn-primary:hover {
  background-color: #6f6a5f;
  border-color: #6f6a5f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.text-danger {
  color: #dc3545 !important;
}

/* Responsive */
@media (max-width: 991.98px) {
  .map-container {
    margin-bottom: 2rem;
  }

  .map-iframe {
    height: 350px;
  }
}
</style>
