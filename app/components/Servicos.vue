<template>
  <section class="servicos-section">
    <div class="container-m2s">
      <h2 class="servicos-title">Soluções</h2>
      
      <div class="servicos-grid">
        <!-- Fare Tracker -->
        <div class="servico-card">
          <a href="https://faretracker.com.br" target="_blank" class="servico-link">
            <div class="servico-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
            <h3 class="servico-titulo">Fare Tracker</h3>
            <p class="servico-descricao">
              Sistema rastreador de tarifas aéreas para reservas ainda não emitidas.
            </p>
          </a>
        </div>

        <!-- Desenvolvimento SaaS -->
        <div class="servico-card" @click="openModal('saas')">
          <div class="servico-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
            </svg>
          </div>
          <h3 class="servico-titulo">Sistemas SaaS</h3>
          <p class="servico-descricao">
            Desenvolvimento de sistemas SaaS e micro SaaS personalizados.
          </p>
        </div>

        <!-- Business Intelligence -->
        <div class="servico-card" @click="openModal('bi')">
          <div class="servico-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21M16,8H18V15H16V8M12,2H14V15H12V2M8,11H10V15H8V11M4,13H6V15H4V13Z"/>
            </svg>
          </div>
          <h3 class="servico-titulo">Business Intelligence</h3>
          <p class="servico-descricao">
            Dashboards, análise de dados e gestão de licenças Power BI.
          </p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="modalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
          </svg>
        </button>
        <h3 class="modal-title">{{ modalData.title }}</h3>
        <div class="modal-body" v-html="modalData.content"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const modalOpen = ref(false)
const modalData = ref({
  title: '',
  content: ''
})

const modalContent = {
  saas: {
    title: 'Sistemas SaaS e Micro SaaS',
    content: `
      <p>Desenvolvemos soluções SaaS personalizadas para o mercado de aviação e turismo.</p>
      <br>
      <h4 style="color: #ff8c00; font-weight: 600; margin-bottom: 0.5rem;">Nossas especialidades:</h4>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 0.5rem;">Sistemas de gestão de reservas</li>
        <li style="margin-bottom: 0.5rem;">Plataformas de análise de tarifas</li>
        <li style="margin-bottom: 0.5rem;">Automação de processos comerciais</li>
        <li style="margin-bottom: 0.5rem;">APIs e integrações customizadas</li>
        <li style="margin-bottom: 0.5rem;">Soluções em nuvem escaláveis</li>
      </ul>
    `
  },
  bi: {
    title: 'Business Intelligence e Power BI',
    content: `
      <p>Transformamos seus dados em insights valiosos para tomada de decisões estratégicas.</p>
      <br>
      <h4 style="color: #ff8c00; font-weight: 600; margin-bottom: 0.5rem;">Nossos serviços:</h4>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 0.5rem;">Criação de dashboards interativos</li>
        <li style="margin-bottom: 0.5rem;">Relatórios de performance de vendas</li>
        <li style="margin-bottom: 0.5rem;">Análise de tendências de mercado</li>
        <li style="margin-bottom: 0.5rem;">Gestão de licenças Power BI</li>
        <li style="margin-bottom: 0.5rem;">KPIs personalizados para aviação</li>
      </ul>
    `
  }
}

const openModal = (service) => {
  modalData.value = modalContent[service]
  modalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  modalOpen.value = false
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.servicos-section {
  padding: 5rem 0;
  background: #545454;
}

.servicos-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: #d6d6d6;
  margin-bottom: 3rem;
  position: relative;
}

.servicos-title::after {
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

.servicos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.servico-card {
  background: #1d1d1c;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.servico-card:hover {
  transform: translateY(-5px);
  border-color: #ff8c00;
  box-shadow: 0 10px 30px rgba(255, 140, 0, 0.2);
}

.servico-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.servico-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  color: #ff8c00;
  display: flex;
  align-items: center;
  justify-content: center;
}

.servico-icon svg {
  width: 100%;
  height: 100%;
}

.servico-titulo {
  font-size: 1.5rem;
  font-weight: 600;
  color: #d6d6d6;
  margin-bottom: 1rem;
}

.servico-descricao {
  color: #d6d6d6;
  line-height: 1.6;
  opacity: 0.9;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: #1d1d1c;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  border: 2px solid #ff8c00;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #d6d6d6;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0;
  transition: color 0.3s ease;
}

.modal-close:hover {
  color: #ff8c00;
}

.modal-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #d6d6d6;
  margin-bottom: 1.5rem;
  padding-right: 2rem;
}

.modal-body {
  color: #d6d6d6;
  line-height: 1.6;
}

/* Responsividade */
@media (max-width: 768px) {
  .servicos-section {
    padding: 3rem 0;
  }
  
  .servicos-title {
    font-size: 2rem;
  }
  
  .servicos-grid {
    grid-template-columns: 1fr;
  }
  
  .servico-card {
    padding: 1.5rem;
  }
  
  .modal-content {
    padding: 1.5rem;
    margin: 1rem;
  }
}
</style>