<template>
  <div class="nf-tracker-page">
    <Header />
    
    <!-- Hero Section -->
    <section class="hero-nft">
      <div class="container-m2s">
        <div class="hero-content-nft">
          <div class="logo-container">
            <img 
              src="/images/nf_tracker_Logo.png" 
              alt="NF Tracker Logo" 
              class="nft-logo"
            >
          </div>
          <h1 class="hero-title-nft">NF Tracker</h1>
          <p class="hero-subtitle-nft">Gestão Inteligente de Notas Fiscais Eletrônicas</p>
          <p class="hero-description">
            Automatize o processo de download, organização e gestão de suas Notas Fiscais de Serviço Eletrônicas (NFSe). 
            Solução profissional que elimina trabalho manual e aumenta a eficiência operacional.
          </p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container-m2s">
        <h2 class="section-title">Principais Funcionalidades</h2>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
              </svg>
            </div>
            <h3>Download Automático</h3>
            <p>Obtenção automática de NFSe emitidas e recebidas diretamente do Portal do Contribuinte, eliminando processo manual.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.17 3.25Q21.5 3.25 21.76 3.5 22 3.74 22 4.08V19.92Q22 20.26 21.76 20.5 21.5 20.75 21.17 20.75H7.83Q7.5 20.75 7.24 20.5 7 20.26 7 19.92V17H2.83Q2.5 17 2.24 16.76 2 16.5 2 16.17V7.83Q2 7.5 2.24 7.24 2.5 7 2.83 7H7V4.08Q7 3.74 7.24 3.5 7.5 3.25 7.83 3.25M7 13.06L8.18 15.28H9.97L8 12.06L9.93 8.89H8.22L7.13 10.9L7.09 10.96L7.06 11.03Q6.8 10.5 6.5 9.96 6.25 9.43 5.97 8.89H4.16L6.05 12.08L4 15.28H5.78M13.88 19.5V17H8.25V19.5M13.88 15.75V12.63H12V15.75M13.88 11.38V8.25H12V11.38M13.88 7V4.5H8.25V7M20.75 19.5V17H15.13V19.5M20.75 15.75V12.63H15.13V15.75M20.75 11.38V8.25H15.13V11.38M20.75 7V4.5H15.13V7Z"/>
              </svg>
            </div>
            <h3>Conversão para Excel</h3>
            <p>Exportação automática em formato Excel, com dados estruturados prontos para análise contábil e auditoria.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
              </svg>
            </div>
            <h3>Interface Profissional</h3>
            <p>Sistema intuitivo com interface moderna, desenvolvida para facilitar a operação e maximizar produtividade.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Use Section -->
    <section class="how-to-section">
      <div class="container-m2s">
        <h2 class="section-title">Como Utilizar</h2>
        
        <div class="steps-container">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Download e Instalação</h3>
              <p>Realize o download do sistema e faça a instalação em seu computador. Processo rápido e descomplicado.</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Autenticação</h3>
              <p>Acesse utilizando suas credenciais do Portal do Contribuinte ou certificado digital A1/A3.</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Definição de Período</h3>
              <p>Selecione o intervalo de datas desejado para extração das notas fiscais (limite de 30 dias por processamento).</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Processamento</h3>
              <p>Inicie o processo e aguarde. O sistema realiza o download e organização automática de todas as NFSe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section">
      <div class="container-m2s">
        <h2 class="section-title">Benefícios para sua Empresa</h2>
        
        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8Z"/>
              </svg>
            </div>
            <div>
              <h4>Otimização de Tempo</h4>
              <p>Redução significativa do tempo operacional. Tarefas que demandavam horas são concluídas em minutos.</p>
            </div>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z"/>
              </svg>
            </div>
            <div>
              <h4>Aumento de Produtividade</h4>
              <p>Equipe focada em atividades estratégicas, eliminando trabalhos repetitivos e manuais.</p>
            </div>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
              </svg>
            </div>
            <div>
              <h4>Precisão e Confiabilidade</h4>
              <p>Eliminação de erros de digitação e inconsistências. Dados extraídos diretamente da fonte oficial.</p>
            </div>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7M17,11H7V9H17V11M15,15H7V13H15V15Z"/>
              </svg>
            </div>
            <div>
              <h4>Controle Gerencial</h4>
              <p>Todas as notas fiscais organizadas e disponíveis em formato estruturado para análise e gestão.</p>
            </div>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/>
              </svg>
            </div>
            <div>
              <h4>Redução de Custos Operacionais</h4>
              <p>Menor investimento de tempo e recursos em atividades administrativas de baixo valor agregado.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="video-section">
      <div class="container-m2s">
        <h2 class="section-title">Demonstração em Vídeo</h2>
        <p class="video-description">
          Confira o passo a passo completo do processo de extração de notas fiscais 
          diretamente do Portal do Contribuinte.
        </p>
        
        <div class="video-container">
          <a 
            href="https://www.youtube.com/watch?v=akl807ZVnL4" 
            target="_blank" 
            class="video-link"
            rel="noopener noreferrer"
          >
            <img 
              src="https://img.youtube.com/vi/akl807ZVnL4/maxresdefault.jpg" 
              alt="Vídeo demonstrativo NF Tracker"
              class="video-thumbnail"
            >
            <div class="play-button">
              <div class="play-icon"></div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Trial Section -->
    <section class="trial-section">
      <div class="container-m2s">
        <div class="trial-card">
          <h2>Período de Avaliação Gratuito</h2>
          <p>
            Teste todas as funcionalidades do sistema por 7 dias, sem compromisso.
            <br>Não é necessário cadastro de cartão de crédito.
          </p>
          <a 
              href="#file:NF_Tracker.rar" 
            class="download-button"
            download
          >
            Baixar Versão de Avaliação
          </a>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section">
      <div class="container-m2s">
        <h2 class="section-title">Plano de Assinatura</h2>
        
        <div class="pricing-card">
          <div class="pricing-header">
            <div class="plan-name">Plano Mensal</div>
          </div>
          <div class="old-price">De R$ 49,90/mês</div>
          <div class="current-price">
            R$ 20,00<span class="price-period">/mês</span>
          </div>
          <div class="limited-offer">Oferta por Tempo Limitado</div>
          
          <ul class="pricing-benefits">
            <li>Acesso completo a todas as funcionalidades</li>
            <li>Atualizações automáticas incluídas</li>
            <li>Suporte técnico especializado</li>
            <li>Cancelamento a qualquer momento</li>
          </ul>
          
          <a 
            href="https://hotmart.com/pt-br/marketplace/produtos/nf-tracker-assinatura-mensal/S104516347U" 
            class="subscribe-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Assinar Agora
          </a>
        </div>
      </div>
    </section>

    <!-- Demo Section -->
    <section class="demo-section">
      <div class="container-m2s">
        <h2 class="section-title">Solicite uma Demonstração</h2>
        <p class="demo-description">
          Entre em contato para agendar uma apresentação personalizada e esclarecer suas dúvidas sobre o sistema.
        </p>
        
        <div class="demo-buttons">
          <a 
            href="mailto:mauricio@m2stech.com.br?subject=Solicito%20demonstração%20do%20NF%20Tracker" 
            class="demo-button email-button"
          >
            Contato por E-mail
          </a>
          
          <a 
            href="https://wa.me/5531989509929?text=Olá!%20Gostaria%20de%20solicitar%20uma%20demonstração%20do%20NF%20Tracker" 
            class="demo-button whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato por WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Footer -->
    <section class="contact-footer">
      <div class="container-m2s">
        <h3>Informações de Contato</h3>
        <div class="contact-info-grid">
          <div class="contact-item">
            <strong>E-mail:</strong>
            <a href="mailto:mauricio@m2stech.com.br">mauricio@m2stech.com.br</a>
          </div>
          <div class="contact-item">
            <strong>Telefone:</strong>
            <a href="https://wa.me/5531989509929" target="_blank" rel="noopener noreferrer">+55 (31) 98950-9929</a>
          </div>
        </div>
        <div class="company-info">
          <p><strong>M2S Tech Solutions</strong></p>
          <p>Soluções em Automação e Gestão Empresarial</p>
          <p class="copyright">© 2026 M2S Tech Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>

    <WhatsAppFloat />
  </div>
</template>

<script setup>
// Meta tags para SEO
useHead({
  title: 'NF Tracker - Gestão Inteligente de Notas Fiscais | M2S Tech Solutions',
  meta: [
    {
      name: 'description',
      content: 'NF Tracker automatiza o download e organização de Notas Fiscais Eletrônicas. Teste grátis por 7 dias! Plano mensal a partir de R$ 20,00.'
    },
    {
      name: 'keywords',
      content: 'NF Tracker, notas fiscais, NFSe, automação, gestão fiscal, contabilidade'
    }
  ]
})
</script>

<style scoped>
/* Cores da Bandeira do Brasil */
:root {
  --brasil-verde: #009B3A;
  --brasil-amarelo: #FFDF00;
  --brasil-azul: #002776;
  --brasil-verde-escuro: #007A2E;
  --brasil-azul-escuro: #001A4D;
}

.nf-tracker-page {
  background: #f5f5f5;
  min-height: 100vh;
}

/* Hero Section */
.hero-nft {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  padding: 6rem 0 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-nft::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(45deg, transparent 30%, rgba(255, 223, 0, 0.1) 50%, transparent 70%),
    radial-gradient(circle at top right, rgba(0, 39, 118, 0.2) 0%, transparent 50%);
  z-index: 1;
}

.hero-nft::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--brasil-amarelo) 0%, var(--brasil-azul) 50%, var(--brasil-amarelo) 100%);
  z-index: 3;
}

.hero-content-nft {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.logo-container {
  margin-bottom: 2rem;
}

.nft-logo {
  max-width: 320px;
  height: auto;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
}

.hero-title-nft {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.hero-subtitle-nft {
  font-size: clamp(1.3rem, 2.5vw, 2rem);
  font-weight: 500;
  color: #2d2d2d;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.1rem;
  color: #333333;
  line-height: 1.7;
  max-width: 750px;
  margin: 0 auto;
}

/* Section Styles */
.section-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 3.5rem;
  position: relative;
  padding-bottom: 1.5rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, var(--brasil-verde) 0%, var(--brasil-amarelo) 50%, var(--brasil-azul) 100%);
  border-radius: 2px;
}

.section-title::before {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, var(--brasil-amarelo) 50%, transparent 100%);
  opacity: 0.5;
}

/* Features Section */
.features-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #f0f7f4 100%);
  position: relative;
}

.features-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--brasil-verde) 0%, var(--brasil-amarelo) 50%, var(--brasil-azul) 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid #e8f5e9;
  box-shadow: 0 4px 12px rgba(0, 155, 58, 0.1);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--brasil-verde) 0%, var(--brasil-amarelo) 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: var(--brasil-verde);
  box-shadow: 0 12px 30px rgba(0, 155, 58, 0.25);
}

.feature-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  padding: 15px;
  background: linear-gradient(135deg, var(--brasil-verde) 0%, var(--brasil-verde-escuro) 100%);
  border-radius: 50%;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 155, 58, 0.3);
  border: 3px solid var(--brasil-amarelo);
}

.feature-icon svg {
  width: 100%;
  height: 100%;
}

.feature-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.feature-card p {
  font-size: 1rem;
  color: #333333;
  line-height: 1.6;
}

/* How to Use Section */
.how-to-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #fff9e6 0%, #ffffff 100%);
  position: relative;
}

.how-to-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--brasil-amarelo) 0%, var(--brasil-verde) 50%, var(--brasil-azul) 100%);
}

.steps-container {
  max-width: 900px;
  margin: 0 auto;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  border-left: 5px solid var(--brasil-amarelo);
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(255, 223, 0, 0.2);
}

.step:hover {
  border-left-color: var(--brasil-verde);
  box-shadow: 0 6px 20px rgba(0, 155, 58, 0.25);
  transform: translateX(8px);
}

.step-number {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--brasil-amarelo) 0%, #ffd700 100%);
  color: var(--brasil-azul);
  font-size: 1.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(255, 223, 0, 0.4);
}

.step-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.step-content p {
  font-size: 1rem;
  color: #333333;
  line-height: 1.6;
}

/* Benefits Section */
.benefits-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #e3f2fd 0%, #f0f7ff 100%);
  position: relative;
}

.benefits-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--brasil-azul) 0%, var(--brasil-verde) 50%, var(--brasil-amarelo) 100%);
}

.benefits-grid {
  display: grid;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  border-left: 4px solid var(--brasil-azul);
  box-shadow: 0 4px 12px rgba(0, 39, 118, 0.15);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.benefit-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 0;
  background: linear-gradient(180deg, var(--brasil-verde) 0%, var(--brasil-amarelo) 100%);
  transition: height 0.3s ease;
}

.benefit-item:hover::before {
  height: 100%;
}

.benefit-item:hover {
  box-shadow: 0 8px 25px rgba(0, 39, 118, 0.25);
  transform: translateX(8px);
}

.benefit-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  padding: 10px;
  background: linear-gradient(135deg, #bbdefb 0%, #90caf9 100%);
  border-radius: 10px;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px rgba(0, 39, 118, 0.3);
  border: 2px solid var(--brasil-azul);
}

.benefit-icon svg {
  width: 100%;
  height: 100%;
}

.benefit-item h4 {
  color: #1a1a1a;
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.benefit-item p {
  color: #333333;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

/* Video Section */
.video-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #f0f7f4 0%, #ffffff 100%);
  text-align: center;
  position: relative;
}

.video-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--brasil-verde) 0%, var(--brasil-amarelo) 50%, var(--brasil-azul) 100%);
}

.video-description {
  font-size: 1.05rem;
  color: #2d2d2d;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.7;
}

.video-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.video-link {
  display: block;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 155, 58, 0.2);
  transition: transform 0.3s ease;
  border: 3px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(90deg, var(--brasil-verde) 0%, var(--brasil-amarelo) 50%, var(--brasil-azul) 100%) border-box;
}

.video-link:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 155, 58, 0.35);
}

.video-thumbnail {
  width: 100%;
  display: block;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--brasil-verde) 0%, var(--brasil-verde-escuro) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 0 30px rgba(255, 223, 0, 0.6);
  border: 4px solid var(--brasil-amarelo);
}

.video-link:hover .play-button {
  background: linear-gradient(135deg, var(--brasil-amarelo) 0%, #ffd700 100%);
  transform: translate(-50%, -50%) scale(1.15);
  box-shadow: 0 0 40px rgba(255, 223, 0, 0.9);
}

.play-icon {
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 25px solid #1a1a1a;
  margin-left: 5px;
}

/* Trial Section */
.trial-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.trial-section::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 223, 0, 0.2) 0%, transparent 70%);
  border-radius: 50%;
}

.trial-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 39, 118, 0.2) 0%, transparent 70%);
  border-radius: 50%;
}

.trial-card {
  position: relative;
  z-index: 2;
}

.trial-card h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  text-shadow: none;
}

.trial-card p {
  font-size: 1.15rem;
  color: #2d2d2d;
  margin-bottom: 2.5rem;
  line-height: 1.7;
}

.download-button {
  display: inline-block;
  background: linear-gradient(135deg, var(--brasil-amarelo) 0%, #ffd700 100%);
  color: #1a1a1a;
  padding: 1.2rem 3rem;
  font-size: 1.15rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(255, 223, 0, 0.4);
  border: 3px solid var(--brasil-verde);
}

.download-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 30px rgba(255, 223, 0, 0.6);
  background: var(--brasil-verde);
  color: #1a1a1a;
}

/* Pricing Section */
.pricing-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #fff9e6 0%, #fffef5 100%);
  text-align: center;
  position: relative;
}

.pricing-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--brasil-amarelo) 0%, var(--brasil-verde) 50%, var(--brasil-azul) 100%);
}

.pricing-card {
  max-width: 520px;
  margin: 0 auto;
  background: #ffffff;
  padding: 3rem 2.5rem;
  border-radius: 16px;
  border: 3px solid var(--brasil-amarelo);
  box-shadow: 0 10px 40px rgba(255, 223, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.pricing-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--brasil-verde) 0%, var(--brasil-amarelo) 50%, var(--brasil-azul) 100%);
}

.pricing-header {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: linear-gradient(135deg, var(--brasil-amarelo) 0%, #ffd700 100%);
  border-radius: 8px;
  margin: -3rem -2.5rem 2rem;
  padding: 2rem;
  border: 3px solid var(--brasil-verde);
}

.plan-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
}

.old-price {
  font-size: 1.2rem;
  color: #545454;
  text-decoration: line-through;
  margin-bottom: 0.5rem;
}

.current-price {
  font-size: 4rem;
  font-weight: 800;
  color: var(--brasil-verde);
  margin: 1.5rem 0;
  text-shadow: 0 2px 10px rgba(0, 155, 58, 0.2);
}

.price-period {
  font-size: 1.5rem;
  font-weight: normal;
  color: #2d2d2d;
}

.limited-offer {
  display: inline-block;
  background: linear-gradient(135deg, var(--brasil-amarelo) 0%, #ffd700 100%);
  color: var(--brasil-azul);
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(255, 223, 0, 0.4);
  border: 2px solid var(--brasil-verde);
}

.pricing-benefits {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  text-align: left;
}

.pricing-benefits li {
  font-size: 1rem;
  color: #2d2d2d;
  padding: 1.2rem;
  border-bottom: 2px solid #f0f0f0;
  position: relative;
  padding-left: 2.5rem;
  transition: all 0.3s ease;
}

.pricing-benefits li:hover {
  background: #f9f9f9;
  padding-left: 3rem;
}

.pricing-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0.8rem;
  color: var(--brasil-verde);
  font-weight: bold;
  font-size: 1.3rem;
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, rgba(0, 155, 58, 0.1) 0%, rgba(0, 155, 58, 0.2) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pricing-benefits li:last-child {
  border-bottom: none;
}

.subscribe-button {
  display: inline-block;
  background: linear-gradient(135deg, var(--brasil-amarelo) 0%, #ffd700 100%);
  color: #1a1a1a;
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
  box-shadow: 0 6px 20px rgba(255, 223, 0, 0.4);
  border: 3px solid var(--brasil-verde);
}

.subscribe-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 155, 58, 0.5);
  background: linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%);
  color: #1a1a1a;
}

/* Demo Section */
.demo-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #e3f2fd 0%, #ffffff 100%);
  text-align: center;
  position: relative;
}

.demo-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--brasil-azul) 0%, var(--brasil-verde) 50%, var(--brasil-amarelo) 100%);
}

.demo-description {
  font-size: 1.05rem;
  color: #2d2d2d;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.7;
}

.demo-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.demo-button {
  display: inline-block;
  padding: 1.2rem 2.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  min-width: 260px;
  border: 3px solid;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.email-button {
  background: linear-gradient(135deg, #bbdefb 0%, #90caf9 100%);
  color: #1a1a1a;
  border-color: var(--brasil-azul);
}

.email-button:hover {
  background: linear-gradient(135deg, #90caf9 0%, #64b5f6 100%);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 39, 118, 0.4);
  color: #1a1a1a;
}

.whatsapp-button {
  background: linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%);
  color: #1a1a1a;
  border-color: var(--brasil-verde);
}

.whatsapp-button:hover {
  background: linear-gradient(135deg, #a5d6a7 0%, #81c784 100%);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 155, 58, 0.4);
  color: #1a1a1a;
}

/* Contact Footer */
.contact-footer {
  padding: 4rem 0;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  text-align: center;
  color: #2d2d2d;
  position: relative;
  overflow: hidden;
}

.contact-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--brasil-verde) 0%, var(--brasil-amarelo) 50%, var(--brasil-azul) 100%);
  z-index: 3;
}

.contact-footer::after {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 223, 0, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.contact-footer h3 {
  color: #1a1a1a;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;
}

.contact-footer h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--brasil-verde) 0%, var(--brasil-amarelo) 100%);
  border-radius: 2px;
}

.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
}

.contact-item {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border: 2px solid var(--brasil-azul);
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-5px);
  border-color: var(--brasil-verde);
  box-shadow: 0 8px 20px rgba(0, 155, 58, 0.3);
}

.contact-item strong {
  display: block;
  color: var(--brasil-azul);
  font-size: 0.95rem;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
}

.contact-item a {
  color: #1a1a1a;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1.1rem;
  font-weight: 500;
}

.contact-item a:hover {
  color: var(--brasil-verde);
}

.company-info {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid var(--brasil-azul);
  position: relative;
}

.company-info::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, var(--brasil-verde) 50%, transparent 100%);
}

.company-info p {
  margin: 0.5rem 0;
  color: #2d2d2d;
  font-weight: 500;
}

.copyright {
  font-size: 0.9rem;
  color: #333333;
  margin-top: 1.5rem;
  font-weight: 400;
}

/* Responsive */
@media (max-width: 768px) {
  .nft-logo {
    max-width: 220px;
  }

  .hero-title-nft {
    font-size: 2rem;
  }

  .hero-subtitle-nft {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .step {
    flex-direction: column;
    text-align: center;
  }

  .step-number {
    margin: 0 auto;
  }

  .demo-buttons {
    flex-direction: column;
    align-items: center;
  }

  .current-price {
    font-size: 2.8rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .benefit-item {
    flex-direction: column;
    text-align: center;
  }

  .benefit-icon {
    margin: 0 auto;
  }

  .contact-info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
