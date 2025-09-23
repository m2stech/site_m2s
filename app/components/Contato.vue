<template>
  <section class="contato-section">
    <div class="container-m2s">
      <h2 class="contato-title">Contato</h2>
      
      <div class="contato-content">
        <div class="contato-info">
          <h3 class="contato-subtitle">Entre em contato conosco</h3>
          <p class="contato-description">
            Estamos prontos para transformar suas ideias em soluções tecnológicas inovadoras. 
            Entre em contato e descubra como podemos impulsionar o seu negócio.
          </p>
        </div>
        
        <div class="contato-social">
          <h4 class="social-title">Nos encontre nas redes sociais</h4>
          
          <div class="social-links">
            <!-- Instagram -->
            <a 
              href="https://www.instagram.com/omauriciononato/" 
              target="_blank" 
              class="social-link"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
              </svg>
              <span>Instagram</span>
            </a>

            <!-- LinkedIn -->
            <a 
              href="https://www.linkedin.com/in/omauriciononato/" 
              target="_blank" 
              class="social-link"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <!-- Telefone -->
            <a 
              href="tel:+5531996369696" 
              class="social-link"
              title="Telefone"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
              </svg>
              <span>(31) 99636-9696</span>
            </a>

            <!-- CNPJ -->
            <div class="cnpj-info">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
              </svg>
              <span>CNPJ: 59.113.343/0001-05</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="copyright-section">
        <p class="copyright-text">
          © {{ currentYear }} M2S Tech Solutions. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

// Ano atual para o copyright
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.contato-section {
  padding: 5rem 0;
  background: #1d1d1c;
}

.contato-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: #d6d6d6;
  margin-bottom: 3rem;
  position: relative;
}

.contato-title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ff8c00 0%, #e67c00 100%);
  border-radius: 2px;
}

.contato-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.contato-info {
  padding: 2rem;
}

.contato-subtitle {
  font-size: 2rem;
  font-weight: 600;
  color: #d6d6d6;
  margin-bottom: 1.5rem;
}

.contato-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #d6d6d6;
  opacity: 0.9;
}

.contato-social {
  padding: 2rem;
  text-align: center;
}

.social-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #d6d6d6;
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #e96912;
  font-weight: 500;
  transition: all 0.3s ease;
  justify-content: flex-start;
}

.social-link:hover {
  color: #ff8c00;
  transform: translateY(-2px);
}

.social-link svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.social-link span {
  font-size: 1.1rem;
}

.cnpj-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #d6d6d6;
  font-weight: 500;
  justify-content: flex-start;
  opacity: 0.9;
}

.cnpj-info svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: #ff8c00;
}

.cnpj-info span {
  font-size: 1.1rem;
}

.copyright-section {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #545454;
  text-align: center;
}

.copyright-text {
  color: #d6d6d6;
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.7;
}

/* Responsividade */
@media (max-width: 1024px) {
  .contato-content {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .contato-section {
    padding: 3rem 0;
  }
  
  .contato-title {
    font-size: 2rem;
  }
  
  .contato-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contato-info {
    text-align: center;
    order: 1;
    padding: 1rem;
  }
  
  .contato-social {
    order: 2;
    padding: 1rem;
  }
  
  .contato-subtitle {
    font-size: 1.5rem;
  }
  
  .social-links {
    gap: 1rem;
  }
  
  .social-link {
    justify-content: center;
  }
  
  .cnpj-info {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .social-link {
    justify-content: center;
  }
  
  .cnpj-info {
    justify-content: center;
  }
  
  .social-link span {
    font-size: 1rem;
  }
  
  .cnpj-info span {
    font-size: 1rem;
  }
  
  .contato-description {
    font-size: 1rem;
  }
  
  .copyright-section {
    margin-top: 2rem;
  }
}
</style>