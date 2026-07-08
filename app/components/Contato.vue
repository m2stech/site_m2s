<template>
  <div>
    <!-- Banner CTA -->
    <section style="background: linear-gradient(90deg, #b35500 0%, #ff8c00 50%, #cc6600 100%);" class="py-8 sm:py-10">
      <div class="container-m2s">
        <div class="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          <!-- Ícone de suporte -->
          <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white">
            <Headphones class="h-7 w-7" />
          </div>

          <!-- Texto -->
          <div class="flex-1 text-center sm:text-left">
            <h2 class="text-xl font-bold text-white sm:text-2xl">
              Pronto para transformar sua empresa?
            </h2>
            <p class="mt-1.5 max-w-xl text-sm leading-6 text-white/85">
              Fale com um especialista e descubra como podemos impulsionar os resultados do seu negócio com tecnologia.
            </p>
          </div>

          <!-- Botão -->
          <a
            href="https://wa.me/5531996369696"
            target="_blank"
            rel="noreferrer"
            class="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#111] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition hover:bg-[#1e1e1e]"
            @click="analytics.whatsapp('cta_banner')"
          >
            <MessageCircle class="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>

    <div class="bg-[#0b0b0d]">
      <section class="container-m2s py-20 sm:py-24 lg:py-28" aria-labelledby="contato-heading">
      <div class="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div class="rounded-[32px] border border-white/8 bg-[#141418] p-8 shadow-dark sm:p-10">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-m2s-primary-orange">Contato</span>
          <h2 id="contato-heading" class="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Vamos conversar sobre a evolução tecnológica da sua operação?
          </h2>
          <p class="mt-6 text-base leading-8 text-white/65 sm:text-lg">
            Fale com a M2S Tech para estruturar processos, integrar plataformas e desenvolver soluções aderentes à realidade do turismo.
          </p>

          <div class="mt-10 space-y-4">
            <a
              v-for="item in contactItems"
              :key="item.label"
              :href="item.href"
              class="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4 text-white/72 transition hover:border-m2s-primary-orange/30 hover:text-white"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noreferrer' : undefined"
              @click="handleContactItemClick(item.label)"
            >
              <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-m2s-primary-orange/10 text-m2s-primary-orange">
                <component :is="item.icon" class="h-5 w-5" />
              </span>
              <span>
                <span class="block text-xs uppercase tracking-[0.18em] text-white/40">{{ item.label }}</span>
                <span class="mt-1 block text-sm font-medium sm:text-base">{{ item.value }}</span>
              </span>
            </a>
          </div>
        </div>

        <div class="rounded-[32px] border border-white/8 bg-[#141418] p-8 shadow-dark sm:p-10">
          <h3 class="text-2xl font-semibold text-white">Solicite um contato</h3>
          <p class="mt-3 text-sm leading-7 text-white/58">
            Preencha os dados abaixo. O formulário pode ser integrado futuramente ao CRM da empresa.
          </p>

          <form class="mt-8 space-y-5" @submit.prevent="handleFormSubmit" @focusin.once="handleFormStart">
            <div class="grid gap-5 sm:grid-cols-2">
              <label class="block">
                <span class="mb-2 block text-sm font-medium text-white/72">Nome</span>
                <input type="text" class="input-m2s" placeholder="Seu nome" >
              </label>
              <label class="block">
                <span class="mb-2 block text-sm font-medium text-white/72">Empresa</span>
                <input type="text" class="input-m2s" placeholder="Nome da empresa" >
              </label>
            </div>

            <div class="grid gap-5 sm:grid-cols-2">
              <label class="block">
                <span class="mb-2 block text-sm font-medium text-white/72">Email</span>
                <input type="email" class="input-m2s" placeholder="voce@empresa.com" >
              </label>
              <label class="block">
                <span class="mb-2 block text-sm font-medium text-white/72">Telefone</span>
                <input type="tel" class="input-m2s" placeholder="(00) 00000-0000" >
              </label>
            </div>

            <label class="block">
              <span class="mb-2 block text-sm font-medium text-white/72">Mensagem</span>
              <textarea class="input-m2s min-h-[160px] resize-none" placeholder="Conte um pouco sobre o contexto da sua operação e os desafios atuais."></textarea>
            </label>

            <button
              type="submit"
              class="inline-flex items-center justify-center rounded-2xl bg-m2s-primary-orange px-6 py-4 text-sm font-semibold text-white shadow-orange transition hover:-translate-y-0.5 hover:bg-m2s-hover-orange"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>

    <footer class="border-t border-white/8 bg-[#09090b]">
      <div class="container-m2s py-14">
        <div class="grid gap-10 lg:grid-cols-[minmax(260px,1.2fr)_repeat(4,minmax(0,1fr))]">
          <div>
            <img src="/images/logo.png" alt="M2S Tech Solutions" class="h-12 w-auto" >
            <p class="mt-5 max-w-sm text-sm leading-7 text-white/56">
              Tecnologia especializada em turismo para empresas que precisam integrar operação, dados e sistemas com segurança.
            </p>
          </div>

          <div>
            <h3 class="text-sm font-semibold uppercase tracking-[0.2em] text-white/38">Navegação</h3>
            <ul class="mt-4 space-y-3 text-sm text-white/68">
              <li v-for="link in quickLinks" :key="link.label">
                <a :href="link.href" class="transition hover:text-white" @click.prevent="scrollToSection(link.href)">{{ link.label }}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-semibold uppercase tracking-[0.2em] text-white/38">Serviços</h3>
            <ul class="mt-4 space-y-3 text-sm text-white/68">
              <li v-for="service in serviceLinks" :key="service.label">
                <a :href="service.href" class="transition hover:text-white" @click.prevent="scrollToSection(service.href)">{{ service.label }}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-semibold uppercase tracking-[0.2em] text-white/38">Contato</h3>
            <ul class="mt-4 space-y-3 text-sm text-white/68">
              <li>(31) 99636-9696</li>
              <li>constato@m2stech.tur.br</li>
              <li>Belo Horizonte - MG</li>
              <li>CNPJ: 59.113.343/0001-05</li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-semibold uppercase tracking-[0.2em] text-white/38">Siga-nos</h3>
            <div class="mt-4 flex gap-3">
              <a
                v-for="social in socialLinks"
                :key="social.label"
                :href="social.href"
                target="_blank"
                rel="noreferrer"
                class="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] text-white/72 transition hover:border-m2s-primary-orange/30 hover:text-white"
                :aria-label="social.label"
              >
                <img :src="social.image" :alt="social.label" class="h-5 w-5 object-contain" >
              </a>
            </div>
          </div>
        </div>

        <div class="mt-12 border-t border-white/8 pt-6 text-sm text-white/40">
          © {{ currentYear }} M2S Tech Solutions. Todos os direitos reservados.
        </div>
      </div>
    </footer>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Camera, Headphones, Mail, MessageCircle, Phone, Users } from '@lucide/vue'

const currentYear = computed(() => new Date().getFullYear())

const scrollToSection = (href) => {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 104, behavior: 'smooth' })
}

// ── Analytics ────────────────────────────────────────────────────────────────

const handleContactItemClick = (label) => {
  const l = label.toLowerCase()
  if (l === 'whatsapp') analytics.whatsapp('contact')
  else analytics.contactClick(l)
}

let _formStartTime = null
const handleFormStart = () => {
  _formStartTime = Date.now()
  analytics.formStart()
}

const handleFormSubmit = () => {
  analytics.formSubmitAttempt()
  // TODO: integrar com backend/CRM e chamar formSubmitSuccess(timeMs) ou formSubmitError()
}

const contactItems = [
  { label: 'Telefone', value: '(31) 99636-9696', href: 'tel:+5531996369696', icon: Phone },
  { label: 'Email', value: 'constato@m2stech.tur.br', href: 'mailto:constato@m2stech.tur.br', icon: Mail },
  { label: 'WhatsApp', value: 'Atendimento comercial', href: 'https://wa.me/5531996369696', icon: MessageCircle, external: true },
  { label: 'LinkedIn', value: 'M2S Tech no LinkedIn', href: 'https://www.linkedin.com/company/m2stech', icon: Users, external: true },
  { label: 'Instagram', value: '@m2stech', href: 'https://www.instagram.com/m2stech/', icon: Camera, external: true },
]

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

const serviceLinks = [
  { label: 'Consultoria em OBTs', href: '#consultoria' },
  { label: 'Business Intelligence', href: '#business-intelligence' },
  { label: 'Desenvolvimento de Sistemas', href: '#desenvolvimento' },
  { label: 'Automações', href: '#automacoes' },
]

const socialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/5531996369696', image: '/images/whatapp.png' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/m2stech', image: '/images/linkedin.png' },
  { label: 'Instagram', href: 'https://www.instagram.com/m2stech/', image: '/images/instagram.png' },
]
</script>