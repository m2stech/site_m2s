<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">
        M2S Tech Solutions
      </h1>
      <p class="hero-subtitle">
        Inteligência para suas vendas aéreas.
      </p>
    </div>
  </section>
</template>

<script setup>
// Props do componente Hero (se necessário no futuro)
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1d1d1c 0%, #545454 50%, #ff8c00 100%);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(29, 29, 28, 0.8) 0%,
    rgba(84, 84, 84, 0.6) 40%,
    rgba(255, 140, 0, 0.3) 70%,
    rgba(255, 140, 0, 0.1) 100%
  );
  z-index: 1;
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 2rem;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #d6d6d6 0%, #ffffff 50%, #ff8c00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 20px rgba(255, 140, 0, 0.3);
  animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 500;
  color: #d6d6d6;
  line-height: 1.4;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  animation: fadeInUp 1s ease-out 0.3s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efeito de partículas sutis */
.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255, 140, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(214, 214, 214, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(84, 84, 84, 0.08) 0%, transparent 50%);
  animation: pulse 8s ease-in-out infinite;
  z-index: 1;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

/* Responsividade adicional */
@media (max-width: 768px) {
  .hero-content {
    padding: 1rem;
  }
  
  .hero-title {
    margin-bottom: 1rem;
  }
}
</style>