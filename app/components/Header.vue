<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0c0c0e]/90 backdrop-blur-xl">
    <div class="container-m2s">
      <nav class="flex min-h-[84px] items-center justify-between gap-6" aria-label="Principal">
        <a
          href="#inicio"
          class="flex shrink-0 items-center"
          @click.prevent="scrollTo('inicio')"
          aria-label="Ir para o início"
        >
          <img src="/images/logo.png" alt="M2S Tech Solutions" class="h-10 w-auto sm:h-12" >
        </a>

        <div class="hidden flex-1 items-center justify-center lg:flex">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="`#${item.id}`"
            class="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
            @click.prevent="scrollTo(item.id)"
          >
            {{ item.label }}
          </a>
        </div>

        <div class="hidden lg:flex lg:shrink-0">
          <a
            href="#contato"
            class="inline-flex items-center rounded-full bg-m2s-primary-orange px-5 py-3 text-sm font-semibold text-white shadow-orange transition hover:-translate-y-0.5 hover:bg-m2s-hover-orange"
            @click.prevent="scrollTo('contato')"
          >
            Falar com especialista
          </a>
        </div>

        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-m2s-primary-orange hover:text-m2s-primary-orange lg:hidden"
          :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
          aria-label="Alternar menu"
          @click="toggleMobileMenu"
        >
          <Menu v-if="!mobileMenuOpen" class="h-5 w-5" />
          <X v-else class="h-5 w-5" />
        </button>
      </nav>

      <div
        v-if="mobileMenuOpen"
        class="border-t border-white/10 pb-5 pt-3 lg:hidden"
      >
        <div class="flex flex-col gap-2">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="`#${item.id}`"
            class="rounded-2xl px-4 py-3 text-sm font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
            @click.prevent="scrollToMobile(item.id)"
          >
            {{ item.label }}
          </a>

          <a
            href="#contato"
            class="mt-2 inline-flex items-center justify-center rounded-2xl bg-m2s-primary-orange px-4 py-3 text-sm font-semibold text-white shadow-orange transition hover:bg-m2s-hover-orange"
            @click.prevent="scrollToMobile('contato')"
          >
            Falar com especialista
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Menu, X } from '@lucide/vue'
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Consultoria OBT', id: 'consultoria' },
  { label: 'Business Intelligence', id: 'business-intelligence' },
  { label: 'Desenvolvimento', id: 'desenvolvimento' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollTo = (elementId) => {
  analytics.navClick(elementId)
  const element = document.getElementById(elementId)

  if (!element) {
    return
  }

  const top = element.getBoundingClientRect().top + window.scrollY - 104

  window.scrollTo({
    top,
    behavior: 'smooth',
  })
}

const scrollToMobile = (elementId) => {
  scrollTo(elementId)
  mobileMenuOpen.value = false
}
</script>