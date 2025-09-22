<template>
  <header class="header">
    <div class="container-m2s">
      <nav class="nav">
        <!-- Logo -->
        <div class="logo">
          <img 
            src="/images/logo.png" 
            alt="M2S Tech Solutions" 
            class="logo-image"
          >
        </div>
        
        <!-- Navigation Links -->
        <div class="nav-links">
          <a href="#sobre" class="nav-link" @click="scrollTo('sobre')">
            <svg viewBox="0 0 24 24" fill="currentColor" class="nav-icon">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
            </svg>
            <span>Sobre nós</span>
          </a>
          
          <a href="#solucoes" class="nav-link" @click="scrollTo('solucoes')">
            <svg viewBox="0 0 24 24" fill="currentColor" class="nav-icon">
              <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
            </svg>
            <span>Soluções</span>
          </a>
          
          <a href="#contato" class="nav-link" @click="scrollTo('contato')">
            <svg viewBox="0 0 24 24" fill="currentColor" class="nav-icon">
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
            </svg>
            <span>Contato</span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <a href="#sobre" class="mobile-nav-link" @click="scrollToMobile('sobre')">
          <svg viewBox="0 0 24 24" fill="currentColor" class="nav-icon">
            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
          </svg>
          <span>Sobre nós</span>
        </a>
        
        <a href="#solucoes" class="mobile-nav-link" @click="scrollToMobile('solucoes')">
          <svg viewBox="0 0 24 24" fill="currentColor" class="nav-icon">
            <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
          </svg>
          <span>Soluções</span>
        </a>
        
        <a href="#contato" class="mobile-nav-link" @click="scrollToMobile('contato')">
          <svg viewBox="0 0 24 24" fill="currentColor" class="nav-icon">
            <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
          </svg>
          <span>Contato</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const scrollToMobile = (elementId) => {
  scrollTo(elementId)
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(29, 29, 28, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #545454;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  height: 60px;
  width: auto;
  object-fit: contain;
  transition: all 0.3s ease;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #d6d6d6;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.nav-link:hover {
  color: #ff8c00;
  background: rgba(255, 140, 0, 0.1);
}

.nav-icon {
  width: 20px;
  height: 20px;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: #d6d6d6;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: color 0.3s ease;
}

.mobile-menu-btn:hover {
  color: #ff8c00;
}

.mobile-menu-btn svg {
  width: 24px;
  height: 24px;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  background: #1d1d1c;
  border-top: 1px solid #545454;
  padding: 1rem 0;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #d6d6d6;
  font-weight: 500;
  padding: 1rem;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  color: #ff8c00;
  background: rgba(255, 140, 0, 0.1);
}

/* Responsividade */
@media (max-width: 768px) {
  .logo-image {
    height: 50px;
  }
  
  .nav-links {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .mobile-menu {
    display: flex;
  }
}

@media (max-width: 480px) {
  .logo-image {
    height: 40px;
  }
}
</style>