<template>
  <div class="min-h-screen bg-[#0b0b0d] text-white">
    <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#09090b]/90 backdrop-blur-xl">
      <div class="container-m2s">
        <nav class="flex min-h-[84px] items-center justify-between gap-4" aria-label="NF Tracker">
          <a href="#inicio" class="flex items-center" @click.prevent="scrollToSection('inicio')">
            <img src="/images/nf_tracker_Logo.png" alt="NF Tracker" class="h-10 w-auto sm:h-11" >
          </a>

          <div class="hidden items-center gap-1 lg:flex">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="`#${item.id}`"
              class="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
              @click.prevent="scrollToSection(item.id)"
            >
              {{ item.label }}
            </a>
          </div>

          <a
            :href="whatsAppUrl"
            target="_blank"
            rel="noreferrer"
            class="hidden rounded-full bg-m2s-primary-orange px-5 py-3 text-sm font-semibold text-white shadow-orange transition hover:-translate-y-0.5 hover:bg-m2s-hover-orange lg:inline-flex"
            @click="trackWhatsAppClick('header')"
          >
            Falar com especialista
          </a>

          <button
            type="button"
            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-m2s-primary-orange hover:text-m2s-primary-orange lg:hidden"
            :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
            aria-label="Alternar menu"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <Menu v-if="!mobileMenuOpen" class="h-5 w-5" />
            <X v-else class="h-5 w-5" />
          </button>
        </nav>

        <div v-if="mobileMenuOpen" class="border-t border-white/10 pb-5 pt-3 lg:hidden">
          <div class="flex flex-col gap-2">
            <a
              v-for="item in navItems"
              :key="`mobile-${item.id}`"
              :href="`#${item.id}`"
              class="rounded-2xl px-4 py-3 text-sm font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
              @click.prevent="scrollToSectionMobile(item.id)"
            >
              {{ item.label }}
            </a>

            <a
              :href="whatsAppUrl"
              target="_blank"
              rel="noreferrer"
              class="mt-2 inline-flex items-center justify-center rounded-2xl bg-m2s-primary-orange px-4 py-3 text-sm font-semibold text-white shadow-orange transition hover:bg-m2s-hover-orange"
              @click="trackWhatsAppClick('mobile_menu')"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </header>

    <main class="pt-[84px]">
      <section id="inicio" class="relative overflow-hidden border-b border-white/10 bg-[#0d0d10]">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,140,0,0.24)_0%,rgba(255,140,0,0)_45%)]"></div>
        <img
          v-if="!heroImageMissing"
          :src="heroImageSrc"
          alt=""
          aria-hidden="true"
          class="absolute inset-0 h-full w-full object-cover object-right"
          @error="heroImageMissing = true"
        >
        <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,13,0.96)_0%,rgba(11,11,13,0.88)_38%,rgba(11,11,13,0.54)_68%,rgba(11,11,13,0.72)_100%)]"></div>

        <div class="container-m2s relative py-14 sm:py-16 lg:py-20">
          <div class="max-w-3xl">
            <div>
              <span class="inline-flex items-center rounded-full border border-m2s-primary-orange/30 bg-m2s-primary-orange/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-m2s-primary-orange">
                NF Tracker
              </span>

              <h1 class="mt-6 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.04]">
                Organize todas as suas notas fiscais de servico em poucos minutos.
              </h1>

              <p class="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                Baixe em poucos minutos XML, DANFE, eventos e planilhas Excel de NFS-e em lote pela API Oficial NFSE.gov.br.
              </p>

              <div class="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/downloads/NF_Tracker.rar"
                  class="inline-flex items-center justify-center rounded-2xl bg-m2s-primary-orange px-6 py-4 text-sm font-semibold text-white shadow-orange transition hover:-translate-y-0.5 hover:bg-m2s-hover-orange"
                  @click="handleDownloadClick"
                >
                  Baixar agora
                </a>

                <a
                  :href="whatsAppUrl"
                  target="_blank"
                  rel="noreferrer"
                  class="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:border-m2s-primary-orange/40 hover:bg-white/10"
                  @click="trackWhatsAppClick('hero')"
                >
                  Falar com especialista
                </a>
              </div>

              <div class="mt-8 flex flex-wrap gap-2 text-xs sm:text-sm">
                <span
                  v-for="badge in heroBadges"
                  :key="badge"
                  class="inline-flex rounded-full border border-white/15 bg-black/30 px-3 py-2 text-white/82"
                >
                  {{ badge }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="border-b border-white/10 bg-[#0f1013] py-6">
        <div class="container-m2s">
          <div class="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <article v-for="item in benefitBar" :key="item.title" class="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <h2 class="text-base font-semibold text-white">{{ item.title }}</h2>
              <p class="mt-2 text-sm leading-6 text-white/70">{{ item.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="como-funciona" class="bg-[#f5f6f8] py-20 text-[#0f1115]">
        <div class="container-m2s">
          <p class="text-center text-xs font-semibold uppercase tracking-[0.2em] text-m2s-primary-orange">Como funciona</p>
          <h2 class="mx-auto mt-4 max-w-3xl text-center text-3xl font-semibold leading-tight text-[#2f3542] sm:text-4xl">
            3 passos para organizar suas notas fiscais
          </h2>

          <div class="mt-12 grid gap-5 lg:grid-cols-3">
            <article v-for="step in steps" :key="step.number" class="relative rounded-3xl border border-black/8 bg-white p-7 shadow-[0_16px_35px_rgba(12,16,24,0.08)]">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4f6] text-sm font-semibold text-[#0f1115]">
                {{ step.number }}
              </div>
              <h3 class="mt-6 text-xl font-semibold text-[#2f3542]">{{ step.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-[#3f4550]">{{ step.description }}</p>
            </article>
          </div>

          <div class="mt-10 text-center">
            <a
              href="/downloads/NF_Tracker.rar"
              class="inline-flex items-center justify-center rounded-2xl bg-[#15161a] px-8 py-4 text-sm font-semibold text-white transition hover:bg-black"
              @click="handleDownloadClickMiddle"
            >
              Baixar agora
            </a>
          </div>
        </div>
      </section>

      <section id="funcionalidades" class="bg-[#ffffff] py-20 text-[#0f1115]">
        <div class="container-m2s">
          <p class="text-center text-xs font-semibold uppercase tracking-[0.2em] text-m2s-primary-orange">Recursos principais</p>
          <h2 class="mx-auto mt-4 max-w-3xl text-center text-3xl font-semibold leading-tight text-[#2f3542] sm:text-4xl">
            Tudo o que voce precisa em um so lugar
          </h2>

          <div class="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <article
              v-for="feature in features"
              :key="feature.title"
              class="rounded-2xl border border-black/8 bg-white p-5 shadow-[0_12px_30px_rgba(10,18,28,0.06)]"
            >
              <h3 class="text-base font-semibold text-[#2f3542]">{{ feature.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-[#49505c]">{{ feature.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-[#f3f4f6] py-20 text-[#0f1115]">
        <div class="container-m2s">
          <div class="overflow-hidden rounded-3xl border border-white/20 bg-[#0e1117] p-8 text-white shadow-[0_24px_60px_rgba(5,10,18,0.36)] sm:p-10">
            <div class="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-m2s-primary-orange">Integracao oficial</p>
                <h2 class="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                  Integracao com API Oficial NFSE.gov.br
                </h2>
                <p class="mt-5 max-w-2xl text-base leading-8 text-white/75">
                  O NF Tracker consulta os documentos diretamente na estrutura nacional da NFS-e, com mais seguranca, padronizacao e controle.
                </p>
              </div>

              <ul class="space-y-3 text-sm text-white/85">
                <li v-for="bullet in integrationBullets" :key="bullet" class="flex items-start gap-3">
                  <CheckCircle2 class="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="para-quem-e" class="bg-[#ffffff] py-20 text-[#0f1115]">
        <div class="container-m2s">
          <p class="text-center text-xs font-semibold uppercase tracking-[0.2em] text-m2s-primary-orange">Para quem e</p>
          <h2 class="mx-auto mt-4 max-w-3xl text-center text-3xl font-semibold leading-tight text-[#2f3542] sm:text-4xl">
            Desenvolvido para operacoes que lidam com NFS-e em volume
          </h2>

          <div class="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <article
              v-for="audience in audiences"
              :key="audience"
              class="rounded-2xl border border-black/8 bg-white p-5 text-sm font-medium leading-7 shadow-[0_10px_25px_rgba(10,18,28,0.06)]"
            >
              {{ audience }}
            </article>
          </div>
        </div>
      </section>

      <section id="planos" class="bg-[#f4f5f7] py-20 text-[#0f1115]">
        <div class="container-m2s">
          <div class="grid gap-8 rounded-3xl border border-black/8 bg-white p-8 shadow-[0_20px_45px_rgba(10,18,28,0.1)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center sm:p-10">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-m2s-primary-orange">Pronto para comecar?</p>
              <h2 class="mt-4 text-3xl font-semibold leading-tight text-[#2f3542] sm:text-4xl">Experimente gratuitamente por 7 dias</h2>

              <ul class="mt-6 grid gap-3 text-sm text-[#3f4550] sm:grid-cols-2">
                <li v-for="item in trialBenefits" :key="item" class="flex items-start gap-2">
                  <Check class="mt-0.5 h-4 w-4 shrink-0 text-m2s-primary-orange" />
                  <span>{{ item }}</span>
                </li>
              </ul>

              <div class="mt-8 rounded-2xl bg-[#101114] px-5 py-4 text-white">
                <p class="text-xs uppercase tracking-[0.16em] text-white/60">Promocao de lancamento</p>
                <p class="mt-2 text-2xl font-semibold">Apos o teste: R$ 20/mes</p>
              </div>
            </div>

            <div class="rounded-2xl border border-black/8 bg-[#fafafa] p-6">
              <a
                href="/downloads/NF_Tracker.rar"
                class="inline-flex w-full items-center justify-center rounded-xl bg-m2s-primary-orange px-5 py-4 text-sm font-semibold text-white shadow-orange transition hover:bg-m2s-hover-orange"
                @click="handleDownloadClickBottom"
              >
                Baixar agora
              </a>
              <a
                :href="whatsAppUrl"
                target="_blank"
                rel="noreferrer"
                class="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-[#d9dce1] bg-white px-5 py-4 text-sm font-semibold text-[#0f1115] transition hover:bg-[#f0f2f5]"
                @click="trackWhatsAppClick('pricing')"
              >
                Falar com especialista
              </a>
              <p class="mt-4 text-center text-xs leading-6 text-[#5a616d]">Suporte dedicado para te acompanhar no onboarding.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="duvidas" class="bg-white py-20 text-[#0f1115]">
        <div class="container-m2s">
          <p class="text-center text-xs font-semibold uppercase tracking-[0.2em] text-m2s-primary-orange">Duvidas frequentes</p>
          <h2 class="mx-auto mt-4 max-w-3xl text-center text-3xl font-semibold leading-tight text-[#2f3542] sm:text-4xl">Perguntas frequentes</h2>

          <div class="mx-auto mt-12 max-w-4xl space-y-3">
            <article
              v-for="(faq, index) in faqs"
              :key="faq.question"
              class="overflow-hidden rounded-2xl border border-black/10 bg-white"
            >
              <button
                type="button"
                class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                @click="toggleFaq(index)"
              >
                <span class="text-sm font-semibold sm:text-base">{{ faq.question }}</span>
                <ChevronDown class="h-5 w-5 shrink-0 transition" :class="activeFaq === index ? 'rotate-180' : ''" />
              </button>
              <div v-if="activeFaq === index" class="border-t border-black/8 px-5 py-4 text-sm leading-7 text-[#4a525f]">
                {{ faq.answer }}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-white/10 bg-[#0b0b0d] py-10">
      <div class="container-m2s">
        <div class="grid gap-6 text-sm text-white/70 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <p class="font-semibold text-white">M2S Tech Ltda</p>
            <p class="mt-2">CNPJ 59.113.343/0001-05</p>
          </div>
          <div>
            <p class="font-semibold text-white">Contato</p>
            <p class="mt-2">suporte@m2stech.com.br</p>
            <a :href="whatsAppUrl" target="_blank" rel="noreferrer" class="mt-1 inline-block text-white/80 hover:text-white" @click="trackWhatsAppClick('footer')">WhatsApp</a>
          </div>
          <div>
            <p class="font-semibold text-white">Produto</p>
            <p class="mt-2">NF Tracker para NFS-e</p>
          </div>
          <div>
            <p class="font-semibold text-white">Siga-nos</p>
            <div class="mt-3 flex gap-3">
              <a
                v-for="social in socialLinks"
                :key="social.label"
                :href="social.href"
                target="_blank"
                rel="noreferrer"
                class="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] text-white/72 transition hover:border-m2s-primary-orange/30 hover:text-white"
                :aria-label="social.label"
                @click="analytics.contactClick(social.label.toLowerCase())"
              >
                <img :src="social.image" :alt="social.label" class="h-5 w-5 object-contain" >
              </a>
            </div>
          </div>
          <div>
            <p class="font-semibold text-white">Informacoes</p>
            <p class="mt-2">Politica de privacidade e termos serao publicados em breve.</p>
          </div>
        </div>
        <p class="mt-8 text-xs text-white/45">© {{ currentYear }} M2S Tech Ltda. Todos os direitos reservados.</p>
      </div>
    </footer>

    <div
      v-if="showDownloadModal"
      class="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4"
      @click.self="closeDownloadModal"
    >
      <div class="w-full max-w-md rounded-3xl border border-white/15 bg-[#111317] p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:p-7" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button
          type="button"
          class="absolute right-7 top-6 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:text-white"
          aria-label="Fechar"
          @click="closeDownloadModal"
        >
          <X class="h-4 w-4" />
        </button>

        <template v-if="!downloadReady">
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-m2s-primary-orange/20 text-m2s-primary-orange">
            <Download class="h-6 w-6" />
          </div>
          <h3 id="modal-title" class="mt-4 text-2xl font-semibold">Quase la! Informe seu e-mail</h3>
          <p class="mt-2 text-sm leading-6 text-white/70">
            Para liberar o download e receber atualizacoes importantes do NF Tracker.
          </p>

          <input
            v-model="downloadEmail"
            type="email"
            placeholder="seu@email.com"
            class="mt-5 w-full rounded-xl border border-white/15 bg-[#0d0f13] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-m2s-primary-orange"
            :disabled="isSubmitting"
            @keyup.enter="submitDownloadEmail"
          />

          <p v-if="emailError" class="mt-2 text-sm text-red-300">{{ emailError }}</p>

          <button
            type="button"
            class="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-m2s-primary-orange px-4 py-3 text-sm font-semibold text-white transition hover:bg-m2s-hover-orange disabled:cursor-not-allowed disabled:opacity-70"
            :disabled="isSubmitting"
            @click="submitDownloadEmail"
          >
            {{ isSubmitting ? 'Aguarde...' : 'Liberar download' }}
          </button>

          <p class="mt-3 text-xs leading-5 text-white/50">Nao enviamos spam. Apenas atualizacoes importantes.</p>
        </template>

        <template v-else>
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/20 text-emerald-300">
            <CheckCircle2 class="h-6 w-6" />
          </div>
          <h3 class="mt-4 text-2xl font-semibold">Download liberado!</h3>
          <p class="mt-2 text-sm leading-6 text-white/70">Clique no botao abaixo para baixar o NF Tracker gratuitamente.</p>
          <a
            :href="downloadFileUrl"
            class="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-m2s-primary-orange px-4 py-3 text-sm font-semibold text-white transition hover:bg-m2s-hover-orange"
            download
            @click="handleDownloadConversion"
          >
            Baixar NF Tracker
          </a>
        </template>
      </div>
    </div>

    <WhatsAppFloat />
  </div>
</template>

<script setup>
import { ChevronDown, Check, CheckCircle2, Download, Menu, X } from '@lucide/vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const whatsAppUrl = 'https://wa.me/5531989509929'

const navItems = [
  { id: 'funcionalidades', label: 'Funcionalidades' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'para-quem-e', label: 'Para quem e' },
  { id: 'planos', label: 'Planos' },
  { id: 'duvidas', label: 'Duvidas' },
]

const heroBadges = [
  'API Oficial NFSE.gov.br',
  'XML + DANFE',
  'Exportacao para Excel',
  'Teste gratis por 7 dias',
  'Sem cartao de credito',
]

const socialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/5531996369696', image: '/images/whatapp.png' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/m2stech', image: '/images/linkedin.png' },
  { label: 'Instagram', href: 'https://www.instagram.com/m2stech/', image: '/images/instagram.png' },
  { label: 'YouTube', href: 'https://www.youtube.com/@M2STECHTUR', image: '/images/youtube.png' },
]

const benefitBar = [
  {
    title: 'Totalmente seguro',
    description: 'Conexao direta com a API oficial NFSE.gov.br',
  },
  {
    title: 'Mais agilidade',
    description: 'Baixe XML e DANFE em lote',
  },
  {
    title: 'Dados organizados',
    description: 'Planilhas Excel prontas para analise',
  },
  {
    title: 'Sem dependencia',
    description: 'Sem prefeitura, sem extensao e sem scraping',
  },
]

const steps = [
  {
    number: 1,
    title: 'Baixe o NF Tracker',
    description: 'Faca o download, execute o sistema e informe seu e-mail para liberar o teste.',
  },
  {
    number: 2,
    title: 'Selecione periodo e certificado',
    description: 'Escolha o periodo desejado e use seu certificado digital para acessar a API oficial.',
  },
  {
    number: 3,
    title: 'Exporte XML, DANFE e Excel',
    description: 'Receba os arquivos organizados em poucos cliques.',
  },
]

const features = [
  {
    title: 'Download de XML em lote',
    description: 'Baixe centenas de documentos em um unico fluxo sem repetir tarefas.',
  },
  {
    title: 'Download de DANFE em PDF',
    description: 'Gere DANFEs em lote para consulta e compartilhamento rapido.',
  },
  {
    title: 'Notas emitidas e recebidas',
    description: 'Tenha visao consolidada de entrada e saida no mesmo ambiente.',
  },
  {
    title: 'Eventos e cancelamentos',
    description: 'Acompanhe eventos fiscais e mudancas de status de forma automatica.',
  },
  {
    title: 'Exportacao para Excel',
    description: 'Planilhas organizadas para analise, conciliacao e auditoria.',
  },
  {
    title: 'Atualizacoes automaticas',
    description: 'Fluxo atualizado para manter aderencia ao padrao nacional de NFS-e.',
  },
  {
    title: 'Certificado A1 e A3',
    description: 'Compativel com os formatos mais usados nas operacoes fiscais.',
  },
  {
    title: 'Interface simples e objetiva',
    description: 'Operacao clara para reduzir curva de aprendizado da equipe.',
  },
]

const integrationBullets = [
  'Sem intermediarios',
  'Dados oficiais',
  'Mais seguranca',
  'XML, DANFE e eventos em um unico fluxo',
]

const audiences = [
  'Escritorios de contabilidade',
  'Empresas prestadoras de servico',
  'Departamentos financeiros',
  'Consultorias fiscais',
  'Empresas que precisam organizar NFS-e em volume',
]

const trialBenefits = [
  'XML em lote',
  'DANFE em PDF',
  'Excel automatico',
  'Sem cartao de credito',
  'Cancelamento facil',
]

const faqs = ref([
  {
    question: 'O NF Tracker baixa DANFE?',
    answer: 'Sim. Alem dos XML, o NF Tracker tambem permite baixar DANFE em PDF quando disponivel pela integracao.',
  },
  {
    question: 'O sistema usa prefeituras?',
    answer: 'Nao. O foco atual e a API Oficial NFSE.gov.br.',
  },
  {
    question: 'Preciso de certificado digital?',
    answer: 'Sim. O acesso a API Oficial NFSE.gov.br exige certificado digital valido.',
  },
  {
    question: 'Funciona com A1 e A3?',
    answer: 'Sim, o sistema foi projetado para operar com certificados A1 e A3.',
  },
  {
    question: 'Os arquivos ficam na minha maquina?',
    answer: 'Sim. Os arquivos baixados e as planilhas exportadas ficam no seu ambiente local.',
  },
  {
    question: 'O teste exige cartao?',
    answer: 'Nao. O periodo de teste de 7 dias nao exige cartao de credito.',
  },
  {
    question: 'Posso falar com suporte?',
    answer: 'Sim. Nossa equipe atende pelo WhatsApp e pelo e-mail suporte@m2stech.com.br.',
  },
])

const activeFaq = ref(null)
const mobileMenuOpen = ref(false)

const currentYear = computed(() => new Date().getFullYear())
const heroImageMissing = ref(false)
const heroImageSrc = '/images/nf-tracker-hero.png'

const scrollToSection = (id) => {
  analytics.navClick(id)
  const element = document.getElementById(id)
  if (!element) return

  const top = element.getBoundingClientRect().top + window.scrollY - 104
  window.scrollTo({ top, behavior: 'smooth' })
}

const scrollToSectionMobile = (id) => {
  scrollToSection(id)
  mobileMenuOpen.value = false
}

const toggleFaq = (index) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'faq_expand', {
      event_category: 'engagement',
      event_label: faqs.value[index].question,
    })
  }

  activeFaq.value = activeFaq.value === index ? null : index
}

const trackWhatsAppClick = (source) => {
  analytics.whatsapp(source)
  if (source === 'hero') analytics.metaContact('nf_tracker_contact_hero')
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'contact',
      event_label: source,
    })
  }
}

// --- Download Email Gate ---
const showDownloadModal = ref(false)
const downloadEmail = ref('')
const downloadSource = ref('')
const downloadFileUrl = ref('')
const isSubmitting = ref(false)
const downloadReady = ref(false)
const emailError = ref('')

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const openDownloadModal = (url, source) => {
  downloadFileUrl.value = url
  downloadSource.value = source
  downloadReady.value = false
  downloadEmail.value = ''
  emailError.value = ''
  showDownloadModal.value = true
}

const closeDownloadModal = () => {
  showDownloadModal.value = false
  downloadReady.value = false
}

// Dispara os eventos de conversao ao concluir o download do NF Tracker.
const trackDownloadConversion = () => {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') {
    return
  }

  window.gtag('event', 'download_nftracker', {
    event_category: 'NF Tracker',
    event_label: 'Download Trial',
    value: 1,
  })

  window.gtag('event', 'generate_lead', {
    currency: 'BRL',
    value: 1,
  })

  // Google Ads Conversion Event
  // Apos criar a conversao no Google Ads,
  // substituir por:
  //
  // gtag(
  //   'event',
  //   'conversion',
  //   {
  //      send_to: 'AW-11533926606/XXXXXXXX'
  //   }
  // )
}

// Handler do botao final de download: rastreia a conversao, fecha o modal
// e permite que a navegacao/download ocorra normalmente (sem preventDefault).
const handleDownloadConversion = () => {
  trackDownloadConversion()
  closeDownloadModal()
}

const submitDownloadEmail = async () => {
  if (!validateEmail(downloadEmail.value)) {
    emailError.value = 'Por favor, insira um e-mail valido.'
    return
  }

  isSubmitting.value = true
  emailError.value = ''

  try {
    await $fetch('/api/nf-tracker-download', {
      method: 'POST',
      body: {
        email: downloadEmail.value,
        fileName: 'NF_Tracker.rar',
        source: downloadSource.value,
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
      },
    })

    downloadReady.value = true

    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      // Lead real: o e-mail foi aceito pelo sistema e o download foi liberado.
      window.gtag('event', 'lead_nftracker', {
        event_category: 'NF Tracker',
        event_label: 'Lead Trial',
        value: 1,
      })

      window.gtag('event', 'conversion', {
        send_to: 'AW-11533926606/EQhhCIKti4EaEM6B5_sq',
        event_label: `download_${downloadSource.value}`,
      })
    }
  } catch (err) {
    emailError.value = 'Ocorreu um erro. Tente novamente.'
    console.error('Download register error:', err)
  } finally {
    isSubmitting.value = false
  }
}

const gtag_report_conversion = (url, conversionLabel = '') => {
  const callback = function () {
    if (typeof url !== 'undefined') {
      window.location = url
    }
  }

  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-11533926606/EQhhCIKti4EaEM6B5_sq',
      event_callback: callback,
      event_label: conversionLabel,
    })
  } else {
    callback()
  }

  return false
}

const handleDownloadClick = (event) => {
  event.preventDefault()
  analytics.heroCta('nf_tracker_download_hero')
  analytics.metaLead('nf_tracker_download_hero')
  openDownloadModal(event.currentTarget.href, 'hero')
}

const handleDownloadClickMiddle = (event) => {
  event.preventDefault()
  analytics.heroCta('nf_tracker_download_middle')
  openDownloadModal(event.currentTarget.href, 'middle')
}

const handleDownloadClickBottom = (event) => {
  event.preventDefault()
  analytics.heroCta('nf_tracker_download_bottom')
  openDownloadModal(event.currentTarget.href, 'bottom')
}

let scrollTracked = {
  scroll_25: false,
  scroll_50: false,
  scroll_75: false,
  scroll_100: false,
}

const trackScroll = () => {
  if (typeof window === 'undefined') return

  const total = document.documentElement.scrollHeight - window.innerHeight
  if (total <= 0) return
  const scrollPercent = (window.scrollY / total) * 100

  if (scrollPercent >= 25 && !scrollTracked.scroll_25) {
    scrollTracked.scroll_25 = true
    analytics.scrollDepth(25)
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'scroll_25', { event_category: 'engagement', event_label: 'page_scroll' })
    }
  }

  if (scrollPercent >= 50 && !scrollTracked.scroll_50) {
    scrollTracked.scroll_50 = true
    analytics.scrollDepth(50)
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'scroll_50', { event_category: 'engagement', event_label: 'page_scroll' })
    }
  }

  if (scrollPercent >= 75 && !scrollTracked.scroll_75) {
    scrollTracked.scroll_75 = true
    analytics.scrollDepth(75)
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'scroll_75', { event_category: 'engagement', event_label: 'page_scroll' })
    }
  }

  if (scrollPercent >= 99 && !scrollTracked.scroll_100) {
    scrollTracked.scroll_100 = true
    analytics.scrollDepth(100)
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'scroll_100', { event_category: 'engagement', event_label: 'page_scroll' })
    }
  }
}

let timeTracked = {
  time_30: false,
  time_60: false,
}

const trackTime = () => {
  setTimeout(() => {
    if (!timeTracked.time_30) {
      timeTracked.time_30 = true
      analytics.timeOnPage(30)
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'time_on_page_30', {
          event_category: 'engagement',
          event_label: '30_seconds',
        })
      }
    }
  }, 30000)

  setTimeout(() => {
    if (!timeTracked.time_60) {
      timeTracked.time_60 = true
      analytics.timeOnPage(60)
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'time_on_page_60', {
          event_category: 'engagement',
          event_label: '60_seconds',
        })
      }
    }
  }, 60000)
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', trackScroll, { passive: true })
    trackTime()
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', trackScroll)
  }
})

useSeoMeta({
  title: 'Baixar XML e DANFE de NFS-e em Lote | NF Tracker',
  description:
    'Baixe XML e DANFE de NFS-e em lote pela API Oficial NFSE.gov.br. Organize notas emitidas, recebidas, eventos e cancelamentos em Excel com o NF Tracker.',
  keywords:
    'baixar XML NFSe em lote, baixar DANFE NFSe, API NFSE.gov.br, download XML nota fiscal servico, NFS-e Excel, NF Tracker, notas fiscais de servico, DANFE em lote, XML em lote',
  ogTitle: 'Baixar XML e DANFE de NFS-e em Lote | NF Tracker',
  ogDescription:
    'Baixe XML e DANFE de NFS-e em lote pela API Oficial NFSE.gov.br. Organize notas emitidas, recebidas, eventos e cancelamentos em Excel com o NF Tracker.',
  ogImage: 'https://www.m2stech.tur.br/images/og-nf-tracker.png',
  ogUrl: 'https://www.m2stech.tur.br/nf-trackernew',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Baixar XML e DANFE de NFS-e em Lote | NF Tracker',
  twitterDescription:
    'Baixe XML e DANFE de NFS-e em lote pela API Oficial NFSE.gov.br. Organize notas emitidas, recebidas, eventos e cancelamentos em Excel com o NF Tracker.',
  twitterImage: 'https://www.m2stech.tur.br/images/og-nf-tracker.png',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.m2stech.tur.br/nf-trackernew',
    },
  ],
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-4TBXK1FW1H',
      async: true,
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4TBXK1FW1H');
        gtag('config', 'AW-11533926606');
      `,
      type: 'text/javascript',
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'NF Tracker',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Windows 10, Windows 11',
        description:
          'Software para baixar XML e DANFE de NFS-e em lote, organizar eventos e cancelamentos e exportar planilhas Excel pela API Oficial NFSE.gov.br.',
        url: 'https://www.m2stech.tur.br/nf-trackernew',
        downloadUrl: 'https://www.m2stech.tur.br/downloads/NF_Tracker.rar',
        image: 'https://www.m2stech.tur.br/images/og-nf-tracker.png',
        offers: {
          '@type': 'Offer',
          price: '20.00',
          priceCurrency: 'BRL',
          availability: 'https://schema.org/InStock',
        },
        publisher: {
          '@type': 'Organization',
          name: 'M2S Tech Ltda',
          url: 'https://www.m2stech.tur.br',
        },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.value.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }),
    },
  ],
})
</script>
