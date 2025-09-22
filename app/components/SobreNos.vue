<template>
  <section class="sobre-nos-section">
    <div class="container-m2s">
      <div class="sobre-nos-content">
        <!-- Lado esquerdo - Logo -->
        <div class="sobre-nos-image">
          <img 
            src="/images/logo_m2s.png" 
            alt="M2S Tech Solutions Logo" 
            class="logo-image"
          >
        </div>
        
        <!-- Lado direito - Texto -->
        <div class="sobre-nos-text">
          <h2 class="sobre-nos-title">Sobre Nós</h2>
          <p class="sobre-nos-description">
            Somos uma empresa de <span class="highlight">soluções tecnológicas</span> 
            dedicada ao setor de <span class="highlight">turismo aéreo</span>. 
          </p>
          <p class="sobre-nos-description">
            Nossas especialidades são <span class="highlight">Business Intelligence</span> 
            e <span class="highlight">desenvolvimento de sites e sistemas web</span>, 
            oferecendo ferramentas inteligentes que transformam dados em insights 
            valiosos para impulsionar o crescimento do seu negócio.
          </p>
          <p class="sobre-nos-description">
            Com foco na inovação e excelência, desenvolvemos soluções personalizadas 
            que atendem às necessidades específicas do mercado aeronáutico, 
            proporcionando eficiência, controle e resultados excepcionais.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Componente Sobre Nós
</script>

<style scoped>
.sobre-nos-section {
  padding: 5rem 0;
  background: #1d1d1c;
  position: relative;
}

.sobre-nos-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.sobre-nos-image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.logo-image {
  width: 600px;
  height: 600px;
  object-fit: contain;
}

.sobre-nos-text {
  padding: 2rem;
}

.sobre-nos-title {
  font-size: 3rem;
  font-weight: 700;
  color: #d6d6d6;
  margin-bottom: 2rem;
  position: relative;
}

.sobre-nos-title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ff8c00 0%, #e67c00 100%);
  border-radius: 2px;
}

.sobre-nos-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #d6d6d6;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.highlight {
  color: #ff8c00;
  font-weight: 600;
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #ff8c00 0%, transparent 100%);
  opacity: 0.6;
}

/* Responsividade */
@media (max-width: 1024px) {
  .sobre-nos-content {
    gap: 3rem;
  }
  
  .sobre-nos-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .sobre-nos-section {
    padding: 3rem 0;
  }
  
  .sobre-nos-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .sobre-nos-image {
    order: 1;
    padding: 1rem;
  }
  
  .sobre-nos-text {
    order: 2;
    padding: 1rem;
  }
  
  .sobre-nos-title {
    font-size: 2rem;
    text-align: center;
  }
  
  .sobre-nos-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .logo-image {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .sobre-nos-description {
    font-size: 1rem;
    text-align: left;
  }
  
  .sobre-nos-title {
    font-size: 1.8rem;
  }
}
</style>