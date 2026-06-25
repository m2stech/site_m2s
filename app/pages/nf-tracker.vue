<template>
  <div class="nf-tracker-page">
    <!-- Hero Section -->
    <section class="hero-nft">
      <div class="container-m2s">
        <div class="hero-content-nft">
          <div class="logo-title-container">
            <img 
              src="/images/nf_tracker_Logo.png" 
              alt="NF Tracker - Sistema de automação de Notas Fiscais de Serviço" 
              class="nft-logo"
            >
            <h1 class="hero-title-nft">NF Tracker</h1>
          </div>
          <h2 class="hero-main-headline">Economize horas todo mês baixando centenas de NFSe automaticamente</h2>
          <p class="hero-subtitle">Download automático de XML, eventos e planilhas Excel diretamente da plataforma oficial do Governo Federal.</p>
          
          <a 
            href="/downloads/NF_Tracker.rar" 
            class="hero-cta-button"
            download
            @click="handleDownloadClick"
          >
            Baixar Teste Grátis Agora
          </a>
          
          <!-- Trust Badges -->
          <div class="trust-badges">
            <div class="trust-item">
              <span class="trust-icon">✓</span>
              <span>Teste grátis por 7 dias</span>
            </div>
            <div class="trust-item">
              <span class="trust-icon">✓</span>
              <span>Sem cartão de crédito</span>
            </div>
            <div class="trust-item">
              <span class="trust-icon">✓</span>
              <span>Cancelamento quando quiser</span>
            </div>
            <div class="trust-item">
              <span class="trust-icon">✓</span>
              <span>Atualizações incluídas</span>
            </div>
          </div>
          
          <div class="hero-pricing-highlight">
            <div class="pricing-tag">
              <span class="trial-badge">🎁 Teste Grátis por 7 Dias</span>
              <p class="old-launch-price">De <span style="text-decoration: line-through;">R$ 49,90/mês</span> por apenas:</p>
              <div class="price-hero">
                <span class="amount">R$ 20</span>
                <span class="period">/mês</span>
              </div>
              <p class="launch-promo">Promoção de lançamento • Sem fidelidade</p>
            </div>
          </div>
          
          <p class="hero-contact">
            Dúvidas? E-mail: <a href="mailto:suporte@m2stech.com.br" @click="trackEmailClick">suporte@m2stech.com.br</a> • WhatsApp: <a href="https://wa.me/5531989509929" target="_blank" @click="trackWhatsAppClick">+55 (31) 98950-9929</a>
          </p>
        </div>
      </div>
    </section>

    <!-- Social Proof Section -->
    <section class="social-proof-section" ref="socialProofSection">
      <div class="container-m2s">
        <div class="proof-grid">
          <div class="proof-card">
            <div class="proof-number">+30</div>
            <div class="proof-label">anos de experiência em tecnologia</div>
          </div>
          <div class="proof-card">
            <div class="proof-number">+100.000</div>
            <div class="proof-label">notas processadas com sucesso</div>
          </div>
          <div class="proof-card">
            <div class="proof-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
              </svg>
            </div>
            <div class="proof-label">Desenvolvido por especialistas em automação fiscal</div>
          </div>
          <div class="proof-card">
            <div class="proof-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/>
              </svg>
            </div>
            <div class="proof-label">Atualizações constantes conforme a Plataforma Nacional da NFS-e</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Veja o Sistema Section -->
    <section class="interface-section" ref="interfaceSection">
      <div class="container-m2s">
        <h2 class="section-title">Veja exatamente o que você irá utilizar</h2>
        <p class="section-description">
          Sem telas complicadas. Em poucos cliques você baixa, organiza e converte centenas de NFSe.
        </p>
        
        <div class="interface-mockup">
          <div class="notebook-frame">
            <img 
              src="/images/interface.png" 
              alt="Interface do NF Tracker mostrando seleção de certificado, download automático e conversão para Excel"
              class="interface-image"
              loading="lazy"
            >
            <div class="interface-marker marker-1">
              <span>Seleção do certificado</span>
            </div>
            <div class="interface-marker marker-2">
              <span>Download automático</span>
            </div>
            <div class="interface-marker marker-3">
              <span>Conversão para Excel</span>
            </div>
            <div class="interface-marker marker-4">
              <span>Interface simples</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Before & After Section -->
    <section class="before-after-section" ref="beforeAfterSection">
      <div class="container-m2s">
        <h2 class="section-title">Transforme XML em informações úteis</h2>
        <p class="section-description">
          Planilhas prontas para auditoria, contabilidade e conferência.
        </p>
        
        <div class="comparison-container">
          <div class="comparison-side">
            <div class="comparison-label">Antes</div>
            <div class="comparison-card">
              <div class="comparison-title">XML Complexo</div>
              <div class="xml-preview">
                <code>
&lt;?xml version="1.0"?&gt;<br>
&lt;NFe xmlns="..."&gt;<br>
  &lt;infNFe Id="NFe..."&gt;<br>
    &lt;ide&gt;<br>
      &lt;cUF&gt;31&lt;/cUF&gt;<br>
      &lt;natOp&gt;Serviços&lt;/natOp&gt;<br>
      &lt;mod&gt;55&lt;/mod&gt;<br>
      ...
                </code>
              </div>
              <div class="comparison-problem">❌ Difícil de analisar</div>
            </div>
          </div>
          
          <div class="comparison-arrow">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
            </svg>
          </div>
          
          <div class="comparison-side">
            <div class="comparison-label">Depois</div>
            <div class="comparison-card">
              <div class="comparison-title">Excel Organizado</div>
              <div class="excel-preview">
                <table>
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Número</th>
                      <th>Cliente</th>
                      <th>Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>15/06/2026</td>
                      <td>001234</td>
                      <td>Empresa ABC</td>
                      <td>R$ 1.500,00</td>
                    </tr>
                    <tr>
                      <td>16/06/2026</td>
                      <td>001235</td>
                      <td>Empresa XYZ</td>
                      <td>R$ 2.300,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="comparison-success">✓ Pronto para usar</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="video-section">
      <div class="container-m2s">
        <h2 class="section-title">Ainda tem dúvidas?</h2>
        <p class="video-description">
          Veja funcionando em menos de 3 minutos.
        </p>
        
        <div class="video-container">
          <a 
            href="https://www.youtube.com/watch?v=MrjpU0BxrCM" 
            target="_blank" 
            class="video-link"
            rel="noopener noreferrer"
            @click="handleVideoClick"
          >
            <img 
              src="https://img.youtube.com/vi/MrjpU0BxrCM/maxresdefault.jpg" 
              alt="Vídeo demonstrativo NF Tracker mostrando download de XML e geração de Excel"
              class="video-thumbnail"
              loading="lazy"
            >
            <div class="play-button">
              <div class="play-icon"></div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Middle Section -->
    <section class="cta-middle-section">
      <div class="container-m2s">
        <div class="trial-card">
          <h2>Assistiu? Baixe agora e teste gratuitamente</h2>
          <p>
            Teste todas as funcionalidades do sistema por 7 dias, completamente grátis.
            <br><strong>Sem cartão de crédito. Sem compromisso. Cancele quando quiser.</strong>
          </p>
          <a 
            href="/downloads/NF_Tracker.rar" 
            class="download-button"
            download
            @click="handleDownloadClickMiddle"
          >
            🚀 Baixar Versão de Avaliação
          </a>
          <p class="money-guarantee">💰 Apenas R$ 20/mês após o teste grátis</p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container-m2s">
        <h2 class="section-title">Por que usar o NF Tracker?</h2>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8Z"/>
              </svg>
            </div>
            <h3>Economize horas de trabalho</h3>
            <p>Baixe centenas de NFSe em minutos, não em horas</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.17 3.25Q21.5 3.25 21.76 3.5 22 3.74 22 4.08V19.92Q22 20.26 21.76 20.5 21.5 20.75 21.17 20.75H7.83Q7.5 20.75 7.24 20.5 7 20.26 7 19.92V17H2.83Q2.5 17 2.24 16.76 2 16.5 2 16.17V7.83Q2 7.5 2.24 7.24 2.5 7 2.83 7H7V4.08Q7 3.74 7.24 3.5 7.5 3.25 7.83 3.25M7 13.06L8.18 15.28H9.97L8 12.06L9.93 8.89H8.22L7.13 10.9L7.09 10.96L7.06 11.03Q6.8 10.5 6.5 9.96 6.25 9.43 5.97 8.89H4.16L6.05 12.08L4 15.28H5.78M13.88 19.5V17H8.25V19.5M13.88 15.75V12.63H12V15.75M13.88 11.38V8.25H12V11.38M13.88 7V4.5H8.25V7M20.75 19.5V17H15.13V19.5M20.75 15.75V12.63H15.13V15.75M20.75 11.38V8.25H15.13V11.38M20.75 7V4.5H15.13V7Z"/>
              </svg>
            </div>
            <h3>Planilhas prontas</h3>
            <p>Excel organizado para contabilidade e auditoria</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
              </svg>
            </div>
            <h3>Menos erros</h3>
            <p>Dados extraídos direto da fonte oficial</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7M17,11H7V9H17V11M15,15H7V13H15V15Z"/>
              </svg>
            </div>
            <h3>Dados organizados</h3>
            <p>Tudo em um só lugar, fácil de encontrar</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11.03L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11.03L19.5,12L19.43,12.97L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"/>
              </svg>
            </div>
            <h3>Sem abrir dezenas de páginas</h3>
            <p>Automação completa em uma única interface</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,12C17,14.42 15.28,16.44 13,16.9V21H11V16.9C8.72,16.44 7,14.42 7,12C7,9.58 8.72,7.56 11,7.1V3H13V7.1C15.28,7.56 17,9.58 17,12M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
              </svg>
            </div>
            <h3>Interface simples</h3>
            <p>Qualquer pessoa usa sem treinamento</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it Works Section -->
    <section class="how-to-section">
      <div class="container-m2s">
        <h2 class="section-title">Como Funciona</h2>
        
        <div class="timeline-container">
          <div class="timeline-step">
            <div class="timeline-number">1</div>
            <div class="timeline-content">
              <div class="timeline-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z"/>
                </svg>
              </div>
              <h3>Escolha o período</h3>
              <p>Selecione as datas</p>
            </div>
            <div class="timeline-arrow">→</div>
          </div>
          
          <div class="timeline-step">
            <div class="timeline-number">2</div>
            <div class="timeline-content">
              <div class="timeline-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
                </svg>
              </div>
              <h3>Selecione o certificado</h3>
              <p>A1 ou A3</p>
            </div>
            <div class="timeline-arrow">→</div>
          </div>
          
          <div class="timeline-step">
            <div class="timeline-number">3</div>
            <div class="timeline-content">
              <div class="timeline-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
                </svg>
              </div>
              <h3>Baixe XML</h3>
              <p>Download automático</p>
            </div>
            <div class="timeline-arrow">→</div>
          </div>
          
          <div class="timeline-step">
            <div class="timeline-number">4</div>
            <div class="timeline-content">
              <div class="timeline-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.17 3.25Q21.5 3.25 21.76 3.5 22 3.74 22 4.08V19.92Q22 20.26 21.76 20.5 21.5 20.75 21.17 20.75H7.83Q7.5 20.75 7.24 20.5 7 20.26 7 19.92V17H2.83Q2.5 17 2.24 16.76 2 16.5 2 16.17V7.83Q2 7.5 2.24 7.24 2.5 7 2.83 7H7V4.08Q7 3.74 7.24 3.5 7.5 3.25 7.83 3.25M7 13.06L8.18 15.28H9.97L8 12.06L9.93 8.89H8.22L7.13 10.9L7.09 10.96L7.06 11.03Q6.8 10.5 6.5 9.96 6.25 9.43 5.97 8.89H4.16L6.05 12.08L4 15.28H5.78M13.88 19.5V17H8.25V19.5M13.88 15.75V12.63H12V15.75M13.88 11.38V8.25H12V11.38M13.88 7V4.5H8.25V7M20.75 19.5V17H15.13V19.5M20.75 15.75V12.63H15.13V15.75M20.75 11.38V8.25H15.13V11.38M20.75 7V4.5H15.13V7Z"/>
                </svg>
              </div>
              <h3>Receba Excel automaticamente</h3>
              <p>Pronto para usar</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section">
      <div class="container-m2s">
        <h2 class="section-title">Resultados Reais</h2>
        
        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8Z"/>
              </svg>
            </div>
            <div>
              <h4>80% de economia de tempo</h4>
              <p>Tarefas que levavam 4 horas agora levam menos de 1 hora</p>
            </div>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
              </svg>
            </div>
            <div>
              <h4>Zero erros de digitação</h4>
              <p>Dados 100% precisos extraídos direto da plataforma oficial</p>
            </div>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.5,4A5.5,5.5 0 0,0 2,9.5C2,10 2.09,10.5 2.22,11H6.3L7.57,7.63C7.87,6.83 9.05,6.75 9.43,7.63L11.5,13L12.09,11.58C12.22,11.25 12.57,11 13,11H21.78C21.91,10.5 22,10 22,9.5A5.5,5.5 0 0,0 16.5,4C14.64,4 13,4.93 12,6.34C11,4.93 9.36,4 7.5,4V4M3,12.5A1,1 0 0,0 2,13.5A1,1 0 0,0 3,14.5H5.44L11,20C12,20.9 12,20.9 13,20L18.56,14.5H21A1,1 0 0,0 22,13.5A1,1 0 0,0 21,12.5H13.4L12.47,14.8C12.07,15.81 10.92,15.67 10.55,14.83L8.5,9.5L7.54,11.83C7.39,12.21 7.05,12.5 6.6,12.5H3Z"/>
              </svg>
            </div>
            <div>
              <h4>Sem abrir dezenas de abas</h4>
              <p>Uma única interface para tudo, sem navegação complexa</p>
            </div>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.17 3.25Q21.5 3.25 21.76 3.5 22 3.74 22 4.08V19.92Q22 20.26 21.76 20.5 21.5 20.75 21.17 20.75H7.83Q7.5 20.75 7.24 20.5 7 20.26 7 19.92V17H2.83Q2.5 17 2.24 16.76 2 16.5 2 16.17V7.83Q2 7.5 2.24 7.24 2.5 7 2.83 7H7V4.08Q7 3.74 7.24 3.5 7.5 3.25 7.83 3.25M7 13.06L8.18 15.28H9.97L8 12.06L9.93 8.89H8.22L7.13 10.9L7.09 10.96L7.06 11.03Q6.8 10.5 6.5 9.96 6.25 9.43 5.97 8.89H4.16L6.05 12.08L4 15.28H5.78M13.88 19.5V17H8.25V19.5M13.88 15.75V12.63H12V15.75M13.88 11.38V8.25H12V11.38M13.88 7V4.5H8.25V7M20.75 19.5V17H15.13V19.5M20.75 15.75V12.63H15.13V15.75M20.75 11.38V8.25H15.13V11.38M20.75 7V4.5H15.13V7Z"/>
              </svg>
            </div>
            <div>
              <h4>Planilhas prontas automaticamente</h4>
              <p>Excel organizado sem trabalho manual, direto para análise</p>
            </div>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7M17,11H7V9H17V11M15,15H7V13H15V15Z"/>
              </svg>
            </div>
            <div>
              <h4>Todos os dados em um só lugar</h4>
              <p>Organização completa, fácil busca e acesso rápido</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container-m2s">
        <h2 class="section-title">Perguntas Frequentes</h2>
        
        <div class="faq-container">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="faq-item"
            :class="{ 'active': activeFaq === index }"
            @click="toggleFaq(index)"
          >
            <div class="faq-question">
              <h3>{{ faq.question }}</h3>
              <div class="faq-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                </svg>
              </div>
            </div>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
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
            @click="handleSubscribeClick"
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
            href="mailto:suporte@m2stech.com.br?subject=Solicito%20demonstração%20do%20NF%20Tracker" 
            class="demo-button email-button"
            @click="trackEmailClickDemo"
          >
            Contato por E-mail
          </a>
          
          <a 
            href="https://wa.me/5531989509929" 
            class="demo-button whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
            @click="trackWhatsAppClickDemo"
          >
            Contato por WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="final-cta-section">
      <div class="container-m2s">
        <div class="final-cta-content">
          <h2>Comece hoje mesmo</h2>
          <p>Teste grátis por 7 dias. Sem compromisso. Sem cartão de crédito.</p>
          <a 
            href="/downloads/NF_Tracker.rar" 
            class="final-cta-button"
            download
            @click="handleDownloadClickBottom"
          >
            🚀 Baixar Teste Grátis
          </a>
          <div class="final-cta-price">Apenas R$ 20/mês após o período de teste</div>
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
            <a href="mailto:suporte@m2stech.com.br">suporte@m2stech.com.br</a>
          </div>
          <div class="contact-item">
            <strong>Telefone:</strong>
            <a href="https://wa.me/5531989509929" target="_blank" rel="noopener noreferrer">+55 (31) 98950-9929</a>
          </div>
        </div>
        <div class="company-info">
          <p><strong>M2S Tech Ltda</strong></p>
          <p>59.113.343/0001-05</p>
          <p class="copyright">© 2026 M2S Tech Ltda. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>

    <WhatsAppFloat />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Meta tags e SEO otimizado
useHead({
  title: 'NF Tracker - Automação de NFSe | Download Automático de Notas Fiscais',
  meta: [
    {
      name: 'description',
      content: 'Economize horas baixando centenas de NFSe automaticamente. Download de XML, eventos e Excel direto da plataforma oficial. Teste grátis 7 dias. R$ 20/mês.'
    },
    {
      name: 'keywords',
      content: 'NF Tracker, NFSe, notas fiscais eletrônicas, automação fiscal, download XML, planilha Excel, certificado digital A1 A3, contabilidade'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'NF Tracker - Automação de NFSe | Download Automático'
    },
    {
      property: 'og:description',
      content: 'Economize horas baixando centenas de NFSe automaticamente. Teste grátis 7 dias.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://www.m2stech.tur.br/nf-tracker'
    },
    {
      property: 'og:image',
      content: 'https://www.m2stech.tur.br/images/nf_tracker_Logo.png'
    },
    // Twitter Cards
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'NF Tracker - Automação de NFSe'
    },
    {
      name: 'twitter:description',
      content: 'Economize horas baixando centenas de NFSe automaticamente.'
    },
    {
      name: 'twitter:image',
      content: 'https://www.m2stech.tur.br/images/nf_tracker_Logo.png'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.m2stech.tur.br/nf-tracker'
    }
  ],
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-4TBXK1FW1H',
      async: true
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4TBXK1FW1H');
        gtag('config', 'AW-11533926606');
      `,
      type: 'text/javascript'
    },
    // Schema.org SoftwareApplication
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "NF Tracker",
        "operatingSystem": "Windows",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "Offer",
          "price": "20.00",
          "priceCurrency": "BRL",
          "priceValidUntil": "2027-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "50"
        }
      })
    },
    // FAQ Schema
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Como funciona?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O NF Tracker automatiza o download de Notas Fiscais de Serviço diretamente da Plataforma Nacional da NFS-e. Você seleciona o período, escolhe o certificado digital e o sistema baixa todos os XML e gera planilhas Excel automaticamente."
            }
          },
          {
            "@type": "Question",
            "name": "Preciso instalar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não, é um sistema portátil, basta baixar e executar."
            }
          },
          {
            "@type": "Question",
            "name": "Funciona com certificado A1?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim! O NF Tracker funciona perfeitamente com certificados digitais A1."
            }
          },
          {
            "@type": "Question",
            "name": "Funciona com A3?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim! Também é totalmente compatível com certificados digitais A3 em token ou cartão."
            }
          },
          {
            "@type": "Question",
            "name": "Preciso acessar o Portal do Contribuinte?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não! O NF Tracker acessa automaticamente para você. Você só precisa configurar o certificado digital uma vez."
            }
          },
          {
            "@type": "Question",
            "name": "Os Excel ficam na minha máquina?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim! Todos os arquivos XML e planilhas Excel ficam salvos no seu computador, garantindo total segurança e controle dos seus dados."
            }
          },
          {
            "@type": "Question",
            "name": "Existe suporte?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim! Oferecemos suporte técnico por e-mail (suporte@m2stech.com.br) e WhatsApp (+55 31 98950-9929)."
            }
          }
        ]
      })
    }
  ]
})

// FAQ Data
const faqs = ref([
  {
    question: 'Como funciona?',
    answer: 'O NF Tracker automatiza o download de Notas Fiscais de Serviço diretamente da Plataforma Nacional da NFS-e. Você seleciona o período, escolhe o certificado digital e o sistema baixa todos os XML e gera planilhas Excel automaticamente.'
  },
  {
    question: 'Preciso instalar?',
    answer: 'Não, é um sistema portátil, basta baixar e executar.'
  },
  {
    question: 'Funciona com certificado A1?',
    answer: 'Sim! O NF Tracker funciona perfeitamente com certificados digitais A1.'
  },

  {
    question: 'Preciso acessar o Portal do Contribuinte?',
    answer: 'Não! O NF Tracker acessa automaticamente usando o certificado digital presente em sua máquina.'
  },
  {
    question: 'Os Excel ficam na minha máquina?',
    answer: 'Sim! Todos os arquivos XML e planilhas Excel ficam salvos no seu computador, garantindo total segurança e controle dos seus dados.'
  },
  {
    question: 'Existe suporte?',
    answer: 'Sim! Oferecemos suporte técnico por e-mail (suporte@m2stech.com.br) e WhatsApp (+55 31 98950-9929).'
  }
])

const activeFaq = ref(null)

const toggleFaq = (index) => {
  // Track FAQ expand event
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'faq_expand', {
      'event_category': 'engagement',
      'event_label': faqs.value[index].question
    })
  }
  
  activeFaq.value = activeFaq.value === index ? null : index
}

// Refs for sections
const socialProofSection = ref(null)
const interfaceSection = ref(null)
const beforeAfterSection = ref(null)

// Função de conversão do Google Ads (preservada)
const gtag_report_conversion = (url, conversionLabel = '') => {
  const callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url
    }
  }
  
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-11533926606/EQhhCIKti4EaEM6B5_sq',
      'event_callback': callback,
      'event_label': conversionLabel
    })
  } else {
    callback()
  }
  
  return false
}

// Rastreamento de clique no vídeo (preservado)
const handleVideoClick = (event) => {
  event.preventDefault()
  const url = event.currentTarget.href
  
  gtag_report_conversion(url, 'video_youtube_click')
  
  setTimeout(() => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }, 300)
}

// Rastreamento de download (preservado + novos eventos)
const handleDownloadClick = (event) => {
  event.preventDefault()
  const url = event.currentTarget.href
  
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-11533926606/EQhhCIKti4EaEM6B5_sq',
      'event_label': 'download_avaliacao_hero',
      'event_callback': () => {
        window.location = url
      }
    })
  } else {
    window.location = url
  }
  
  return false
}

// Novo: Rastreamento download CTA middle
const handleDownloadClickMiddle = (event) => {
  event.preventDefault()
  const url = event.currentTarget.href
  
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-11533926606/EQhhCIKti4EaEM6B5_sq',
      'event_label': 'download_avaliacao_middle',
      'event_callback': () => {
        window.location = url
      }
    })
    
    window.gtag('event', 'cta_middle', {
      'event_category': 'conversion',
      'event_label': 'download_middle'
    })
  } else {
    window.location = url
  }
  
  return false
}

// Novo: Rastreamento download CTA bottom
const handleDownloadClickBottom = (event) => {
  event.preventDefault()
  const url = event.currentTarget.href
  
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-11533926606/EQhhCIKti4EaEM6B5_sq',
      'event_label': 'download_avaliacao_bottom',
      'event_callback': () => {
        window.location = url
      }
    })
    
    window.gtag('event', 'cta_bottom', {
      'event_category': 'conversion',
      'event_label': 'download_bottom'
    })
  } else {
    window.location = url
  }
  
  return false
}

// Rastreamento de assinatura (preservado)
const handleSubscribeClick = (event) => {
  event.preventDefault()
  const url = event.currentTarget.href
  
  gtag_report_conversion(url, 'assinar_hotmart')
  
  setTimeout(() => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }, 300)
}

// Novos: Rastreamento de cliques em contatos
const trackEmailClick = () => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'email_click', {
      'event_category': 'contact',
      'event_label': 'hero_email'
    })
  }
}

const trackWhatsAppClick = () => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'whatsapp_click', {
      'event_category': 'contact',
      'event_label': 'hero_whatsapp'
    })
  }
}

const trackEmailClickDemo = () => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'email_click', {
      'event_category': 'contact',
      'event_label': 'demo_email'
    })
  }
}

const trackWhatsAppClickDemo = () => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'whatsapp_click', {
      'event_category': 'contact',
      'event_label': 'demo_whatsapp'
    })
  }
}

// Scroll tracking
let scrollTracked = {
  scroll_25: false,
  scroll_50: false,
  scroll_75: false,
  scroll_100: false
}

const trackScroll = () => {
  if (typeof window === 'undefined') return
  
  const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
  
  if (scrollPercent >= 25 && !scrollTracked.scroll_25) {
    scrollTracked.scroll_25 = true
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'scroll_25', {
        'event_category': 'engagement',
        'event_label': 'page_scroll'
      })
    }
  }
  
  if (scrollPercent >= 50 && !scrollTracked.scroll_50) {
    scrollTracked.scroll_50 = true
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'scroll_50', {
        'event_category': 'engagement',
        'event_label': 'page_scroll'
      })
    }
  }
  
  if (scrollPercent >= 75 && !scrollTracked.scroll_75) {
    scrollTracked.scroll_75 = true
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'scroll_75', {
        'event_category': 'engagement',
        'event_label': 'page_scroll'
      })
    }
  }
  
  if (scrollPercent >= 99 && !scrollTracked.scroll_100) {
    scrollTracked.scroll_100 = true
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'scroll_100', {
        'event_category': 'engagement',
        'event_label': 'page_scroll'
      })
    }
  }
}

// Time on page tracking
let timeTracked = {
  time_30: false,
  time_60: false
}

const trackTime = () => {
  setTimeout(() => {
    if (!timeTracked.time_30) {
      timeTracked.time_30 = true
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'time_on_page_30', {
          'event_category': 'engagement',
          'event_label': '30_seconds'
        })
      }
    }
  }, 30000)
  
  setTimeout(() => {
    if (!timeTracked.time_60) {
      timeTracked.time_60 = true
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'time_on_page_60', {
          'event_category': 'engagement',
          'event_label': '60_seconds'
        })
      }
    }
  }, 60000)
}

// Intersection Observer for view events
const setupIntersectionObserver = () => {
  if (typeof window === 'undefined') return
  
  const options = {
    threshold: 0.5
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target
        
        if (target === interfaceSection.value) {
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'view_interface', {
              'event_category': 'engagement',
              'event_label': 'interface_section_viewed'
            })
          }
          observer.unobserve(target)
        }
        
        if (target === beforeAfterSection.value) {
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'view_excel', {
              'event_category': 'engagement',
              'event_label': 'excel_comparison_viewed'
            })
          }
          observer.unobserve(target)
        }
      }
    })
  }, options)
  
  if (interfaceSection.value) observer.observe(interfaceSection.value)
  if (beforeAfterSection.value) observer.observe(beforeAfterSection.value)
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', trackScroll)
    trackTime()
    setupIntersectionObserver()
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', trackScroll)
  }
})
</script>

<style>
/* Estilos globais para remover tarja preta do topo */
body {
  margin: 0 !important;
  padding: 0 !important;
  background: #f5f5f5 !important;
}

html {
  margin: 0 !important;
  padding: 0 !important;
}
</style>

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
  padding-top: 0;
  margin-top: 0;
  position: relative;
  top: 0;
}

/* Hero Section - Melhorado */
.hero-nft {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  padding: 5rem 0 4rem;
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
  padding: 0 2rem;
}

.logo-title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.nft-logo {
  max-width: 100px;
  height: auto;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
  animation: fadeInUp 0.6s ease-out;
}

.hero-title-nft {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0;
  letter-spacing: -0.5px;
  animation: fadeInUp 0.6s ease-out 0.1s both;
}

.hero-main-headline {
  font-size: clamp(1.5rem, 3.5vw, 2.5rem);
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 auto 1rem;
  max-width: 900px;
  line-height: 1.3;
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: #2d2d2d;
  margin: 0 auto 2rem;
  max-width: 800px;
  line-height: 1.6;
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.hero-contact {
  font-size: 1rem;
  color: #333;
  margin-top: 2rem;
  animation: fadeInUp 0.6s ease-out 0.6s both;
}

.hero-contact a {
  color: var(--brasil-verde);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.hero-contact a:hover {
  color: var(--brasil-verde-escuro);
  text-decoration: underline;
}

/* Trust Badges */
.trust-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin: 2.5rem 0;
  padding: 0 1rem;
  animation: fadeInUp 0.6s ease-out 0.5s both;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #2d2d2d;
  font-weight: 500;
}

.trust-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--brasil-verde);
  color: white;
  border-radius: 50%;
  font-weight: bold;
  font-size: 0.85rem;
}

/* Social Proof Section */
.social-proof-section {
  padding: 4rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #f0f7f4 100%);
}

.proof-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.proof-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  border: 2px solid #e8f5e9;
  box-shadow: 0 4px 15px rgba(0, 155, 58, 0.1);
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease-out both;
}

.proof-card:nth-child(1) { animation-delay: 0.1s; }
.proof-card:nth-child(2) { animation-delay: 0.2s; }
.proof-card:nth-child(3) { animation-delay: 0.3s; }
.proof-card:nth-child(4) { animation-delay: 0.4s; }

.proof-card:hover {
  transform: translateY(-5px);
  border-color: var(--brasil-verde);
  box-shadow: 0 8px 25px rgba(0, 155, 58, 0.2);
}

.proof-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--brasil-verde);
  margin-bottom: 0.5rem;
}

.proof-label {
  font-size: 0.95rem;
  color: #333;
  line-height: 1.4;
}

.proof-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  color: var(--brasil-verde);
}

.proof-icon svg {
  width: 100%;
  height: 100%;
}

/* Interface Section */
.interface-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #f0f7f4 0%, #ffffff 100%);
}

.section-description {
  text-align: center;
  font-size: 1.1rem;
  color: #333;
  max-width: 700px;
  margin: -2rem auto 3rem;
  line-height: 1.6;
}

.interface-mockup {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  padding: 0 2rem;
}

.notebook-frame {
  position: relative;
  background: #2d2d2d;
  padding: 2rem 2rem 0;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.notebook-frame::before {
  content: '';
  position: absolute;
  top: 0.8rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 6px;
  background: #555;
  border-radius: 3px;
}

.interface-image {
  width: 100%;
  border-radius: 8px 8px 0 0;
  display: block;
}

.interface-marker {
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  color: #1a1a1a;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  z-index: 10;
  pointer-events: none;
  animation: markerPulse 2s ease-in-out infinite;
  border: 2px solid var(--brasil-amarelo);
  backdrop-filter: blur(5px);
}

.marker-1 { top: 25%; right: -5%; }
.marker-2 { top: 45%; left: -5%; }
.marker-3 { bottom: 30%; right: -5%; }
.marker-4 { bottom: 10%; left: -5%; }

@keyframes markerPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Before & After Section */
.before-after-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #f0f7f4 100%);
}

.comparison-container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  align-items: center;
}

.comparison-side {
  text-align: center;
}

.comparison-label {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.comparison-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #e0e0e0;
  transition: all 0.3s ease;
}

.comparison-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.comparison-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
}

.xml-preview {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #666;
  overflow-x: auto;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
}

.excel-preview {
  overflow-x: auto;
  margin-bottom: 1rem;
}

.excel-preview table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.excel-preview th,
.excel-preview td {
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #ddd;
}

.excel-preview th {
  background: var(--brasil-verde);
  color: white;
  font-weight: 600;
}

.excel-preview tr:nth-child(even) {
  background: #f9f9f9;
}

.comparison-problem {
  color: #d32f2f;
  font-weight: 600;
  font-size: 0.95rem;
}

.comparison-success {
  color: var(--brasil-verde);
  font-weight: 600;
  font-size: 0.95rem;
}

.comparison-arrow {
  width: 50px;
  height: 50px;
  color: var(--brasil-verde);
  animation: slideRight 1.5s ease-in-out infinite;
}

.comparison-arrow svg {
  width: 100%;
  height: 100%;
}

@keyframes slideRight {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}

/* Animations */
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

/* Hero Pricing e CTA */
.hero-pricing-highlight {
  margin: 2.5rem auto;
  max-width: 500px;
  animation: fadeInUp 0.6s ease-out 0.4s both;
}

.pricing-tag {
  background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 155, 58, 0.25);
  border: 3px solid var(--brasil-verde);
  position: relative;
  overflow: hidden;
}

.pricing-tag::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--brasil-verde) 0%, var(--brasil-amarelo) 50%, var(--brasil-azul) 100%);
}

.trial-badge {
  display: inline-block;
  background: linear-gradient(135deg, var(--brasil-amarelo) 0%, #ffd700 100%);
  color: #000000;
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 15px rgba(255, 223, 0, 0.4);
  border: 2px solid var(--brasil-verde);
}

.price-hero {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
}

.price-hero .amount {
  font-size: 3.5rem;
  font-weight: 900;
  color: #000000;
}

.price-hero .period {
  font-size: 1.5rem;
  color: #000000;
  font-weight: 600;
}

.old-launch-price {
  font-size: 1.05rem;
  color: #3a3a3a;
  font-weight: 600;
  margin: 0.25rem 0 0.75rem;
}

.launch-promo {
  font-size: 0.98rem;
  color: #3a3a3a;
  font-weight: 600;
  margin: 0.75rem 0 0;
}

.hero-cta-button {
  display: inline-block;
  background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
  color: #ffffff;
  padding: 1.5rem 4rem;
  font-size: 1.3rem;
  font-weight: 800;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(255, 0, 0, 0.5);
  border: 3px solid #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  animation: pulse-cta 2s ease-in-out infinite;
}

.hero-cta-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.hero-cta-button:hover::before {
  width: 400px;
  height: 400px;
}

.hero-cta-button:hover {
  transform: translateY(-5px) scale(1.08);
  box-shadow: 0 15px 45px rgba(255, 0, 0, 0.7);
  background: linear-gradient(135deg, #ff3333 0%, #ff0000 100%);
  border-color: var(--brasil-amarelo);
}

@keyframes pulse-cta {
  0%, 100% {
    box-shadow: 0 10px 30px rgba(255, 0, 0, 0.5);
  }
  50% {
    box-shadow: 0 10px 40px rgba(255, 0, 0, 0.8);
  }
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

/* How to Use Section - Timeline */
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

.timeline-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.timeline-step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.timeline-number {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--brasil-amarelo) 0%, #ffd700 100%);
  color: var(--brasil-azul);
  font-size: 1.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(255, 223, 0, 0.4);
  margin-bottom: 1.5rem;
  z-index: 2;
  transition: all 0.3s ease;
}

.timeline-step:hover .timeline-number {
  transform: scale(1.15);
  box-shadow: 0 6px 20px rgba(255, 223, 0, 0.6);
}

.timeline-content {
  text-align: center;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border: 2px solid #f0f0f0;
  transition: all 0.3s ease;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.timeline-step:hover .timeline-content {
  border-color: var(--brasil-verde);
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 155, 58, 0.15);
}

.timeline-icon {
  width: 50px;
  height: 50px;
  margin: 0 auto 1rem;
  color: var(--brasil-verde);
}

.timeline-icon svg {
  width: 100%;
  height: 100%;
}

.timeline-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.timeline-content p {
  font-size: 0.95rem;
  color: #666;
  margin: 0;
}

.timeline-arrow {
  position: absolute;
  top: 30px;
  right: -1rem;
  font-size: 2rem;
  color: var(--brasil-verde);
  font-weight: bold;
  z-index: 1;
  animation: arrowPulse 1.5s ease-in-out infinite;
}

.timeline-step:last-child .timeline-arrow {
  display: none;
}

@keyframes arrowPulse {
  0%, 100% { opacity: 0.5; transform: translateX(0); }
  50% { opacity: 1; transform: translateX(5px); }
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

/* CTA Middle Section (após vídeo) */
.cta-middle-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-middle-section::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 223, 0, 0.2) 0%, transparent 70%);
  border-radius: 50%;
}

.cta-middle-section::after {
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
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.trial-card h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.trial-card p {
  font-size: 1.15rem;
  color: #2d2d2d;
  margin-bottom: 2.5rem;
  line-height: 1.7;
}

.money-guarantee {
  font-size: 1.2rem;
  color: var(--brasil-verde);
  font-weight: 700;
  margin-top: 1.5rem !important;
  margin-bottom: 0 !important;
}

.download-button {
  display: inline-block;
  background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
  color: #ffffff;
  padding: 1.4rem 3.5rem;
  font-size: 1.25rem;
  font-weight: 800;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255, 0, 0, 0.5);
  border: 3px solid #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  animation: pulse 2s ease-in-out infinite;
}

.download-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.download-button:hover::before {
  width: 300px;
  height: 300px;
}

.download-button:hover {
  transform: translateY(-5px) scale(1.08);
  box-shadow: 0 12px 40px rgba(255, 0, 0, 0.7);
  background: linear-gradient(135deg, #ff3333 0%, #ff0000 100%);
  color: #ffffff;
  border-color: #ffdd00;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 8px 25px rgba(255, 0, 0, 0.5);
  }
  50% {
    box-shadow: 0 8px 35px rgba(255, 0, 0, 0.8);
  }
}

/* FAQ Section */
.faq-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #f0f7f4 0%, #ffffff 100%);
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.faq-item {
  background: white;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border: 2px solid #e0e0e0;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.faq-item:hover {
  border-color: var(--brasil-verde);
  box-shadow: 0 4px 15px rgba(0, 155, 58, 0.15);
}

.faq-item.active {
  border-color: var(--brasil-verde);
  box-shadow: 0 6px 20px rgba(0, 155, 58, 0.2);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
}

.faq-item.active .faq-question {
  background: linear-gradient(135deg, #e8f5e9 0%, #f5f5f5 100%);
}

.faq-question h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  flex: 1;
}

.faq-icon {
  width: 24px;
  height: 24px;
  color: var(--brasil-verde);
  transition: transform 0.3s ease;
}

.faq-item.active .faq-icon {
  transform: rotate(180deg);
}

.faq-icon svg {
  width: 100%;
  height: 100%;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-item.active .faq-answer {
  max-height: 500px;
  padding: 1.5rem 2rem;
}

.faq-answer p {
  margin: 0;
  color: #333;
  line-height: 1.7;
  font-size: 1rem;
}

/* Final CTA Section */
.final-cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #e8f5e9 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.final-cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 223, 0, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.final-cta-section::after {
  content: '';
  position: absolute;
  bottom: -50%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 155, 58, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 8s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.final-cta-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 2rem;
}

.final-cta-content h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.final-cta-content p {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.final-cta-button {
  display: inline-block;
  background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
  color: #ffffff;
  padding: 1.6rem 4rem;
  font-size: 1.4rem;
  font-weight: 800;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 12px 35px rgba(255, 0, 0, 0.6);
  border: 4px solid #ffffff;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  position: relative;
  overflow: hidden;
  animation: pulse-final 2.5s ease-in-out infinite;
}

.final-cta-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.final-cta-button:hover::before {
  width: 400px;
  height: 400px;
}

.final-cta-button:hover {
  transform: translateY(-8px) scale(1.1);
  box-shadow: 0 18px 50px rgba(255, 0, 0, 0.8);
  background: linear-gradient(135deg, #ff3333 0%, #ff0000 100%);
  border-color: var(--brasil-amarelo);
}

@keyframes pulse-final {
  0%, 100% {
    box-shadow: 0 12px 35px rgba(255, 0, 0, 0.6);
  }
  50% {
    box-shadow: 0 12px 50px rgba(255, 0, 0, 0.9);
  }
}

.final-cta-price {
  margin-top: 2rem;
  font-size: 1.1rem;
  color: var(--brasil-verde);
  font-weight: 700;
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
    max-width: 80px;
  }

  .hero-title-nft {
    font-size: 2rem;
  }

  .hero-main-headline {
    font-size: 1.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .trust-badges {
    flex-direction: column;
    gap: 1rem;
  }

  .trust-item {
    justify-content: center;
  }
  
  .price-hero .amount {
    font-size: 2.5rem;
  }
  
  .hero-cta-button {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-description {
    font-size: 1rem;
  }

  /* Social Proof */
  .proof-grid {
    grid-template-columns: 1fr;
  }

  /* Interface */
  .interface-mockup {
    padding: 0 1rem;
  }

  .interface-marker {
    display: none;
  }

  /* Before After */
  .comparison-container {
    grid-template-columns: 1fr;
  }

  .comparison-arrow {
    transform: rotate(90deg);
    margin: 1rem 0;
  }

  /* Timeline - Mobile Vertical */
  .timeline-container {
    flex-direction: column;
    gap: 2rem;
  }

  .timeline-step {
    width: 100%;
  }

  .timeline-arrow {
    display: none;
  }

  .timeline-content {
    min-height: auto;
  }

  /* Features */
  .features-grid {
    grid-template-columns: 1fr;
  }

  /* Benefits */
  .benefits-grid {
    gap: 1.5rem;
  }

  .benefit-item {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .benefit-icon {
    margin: 0 auto 1rem;
  }

  /* Demo */
  .demo-buttons {
    flex-direction: column;
    align-items: center;
  }

  /* Pricing */
  .current-price {
    font-size: 2.8rem;
  }

  .contact-info-grid {
    grid-template-columns: 1fr;
  }

  /* Final CTA */
  .final-cta-button {
    padding: 1.3rem 2.5rem;
    font-size: 1.1rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .timeline-container {
    flex-wrap: wrap;
  }

  .timeline-step {
    flex: 1 1 calc(50% - 1rem);
  }

  .timeline-step:nth-child(2) .timeline-arrow,
  .timeline-step:nth-child(4) .timeline-arrow {
    display: none;
  }

  .comparison-container {
    gap: 1.5rem;
  }

  .interface-marker {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
