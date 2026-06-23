<script setup lang="ts">
</script>

<template>
<section class="working-hours py-5">
    <div class="container text-center">
        <div class="section-header mb-5">
            <h2 class="section-title">Çalışma Saatlerimiz</h2>
            <div class="title-divider">
                <span class="line"></span>
                <span class="star-icon">★</span>
                <span class="line"></span>
            </div>
        </div>

        <div class="row g-3 justify-content-center">
            <div class="col-lg-2 col-md-4 col-6">
                <div class="hour-circle">
                    <span class="day-title">Pazartesi</span>
                    <div class="time-range">09:00 - 20:00</div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <div class="hour-circle">
                    <span class="day-title">Salı</span>
                    <div class="time-range">09:00 - 20:00</div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <div class="hour-circle">
                    <span class="day-title">Çarşamba</span>
                    <div class="time-range">09:00 - 20:00</div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <div class="hour-circle">
                    <span class="day-title">Perşembe</span>
                    <div class="time-range">09:00 - 20:00</div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <div class="hour-circle">
                    <span class="day-title">Cuma</span>
                    <div class="time-range">09:00 - 20:00</div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <div class="hour-circle">
                    <span class="day-title">Cmt - Paz</span>
                    <div class="time-range">10:00 - 18:00</div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<style>
:root {
    --accent-color: #d3bb8c;
    --dark-accent: #b89f6d;
}

/* Başlık Tasarımı */
.section-title {
    color: #444;
    font-weight: 600;
    font-size: 1.5rem; /* Font küçültüldü, daha zarif yapıldı */
    letter-spacing: 2px;
    margin-bottom: 5px;
}

.title-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.title-divider .line {
    width: 60px;
    height: 1px; /* Çizgi inceltildi */
    background: linear-gradient(to right, transparent, var(--accent-color), transparent);
}

.star-icon {
    color: var(--accent-color);
    font-size: 0.8rem;
    vertical-align: middle;
}

/* Daire Tasarımı */
.hour-circle {
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 15px;
    border: 1px solid var(--accent-color);
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    cursor: default;
}

/* Hafta sonu ve normal gün hover efekti eşitlendi */
.hour-circle:hover {
    transform: translateY(-5px);
    background-color: var(--accent-color) !important; /* Arka plan rengini zorunlu kıldık */
    border-color: var(--dark-accent);
}

.day-title {
    font-weight: bold;
    color: var(--accent-color);
    font-size: 0.85rem;
    margin-bottom: 5px;
    transition: color 0.3s;
}

.time-range {
    color: #777;
    font-size: 0.8rem;
    transition: color 0.3s;
}

.hour-circle:hover .day-title,
.hour-circle:hover .time-range {
    color: #fff !important;
}

/* Hafta sonu ilk görünüşü (hover değilken) */
.hour-circle.weekend {
    background-color: #fdfaf5;
}

/* Mobilde Mesafeleri Sıkılaştırma */
@media (max-width: 576px) {
    .section-title {
        font-size: 1.25rem;
    }
    
    .row.g-3 {
        --bs-gutter-x: 0.5rem; /* Yan yana boşluklar azaltıldı */
        --bs-gutter-y: 0.5rem; /* Alt alta boşluklar azaltıldı */
    }
    
    .hour-circle {
        padding: 10px;
        max-width: 150px;
        margin: 0 auto;
    }

    .day-title {
        font-size: 0.75rem;
    }
    
    .time-range {
        font-size: 0.7rem;
    }
}
</style>
