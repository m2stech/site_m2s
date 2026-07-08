<template>
  <section class="relative min-h-screen overflow-hidden bg-[#0d0d0f] pb-20 pt-10 sm:pb-24 lg:pb-28 lg:pt-16">
    <!-- Imagem de fundo cobrindo todo o hero -->
    <img
      src="/images/hero.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 h-full w-full object-cover object-right"
    >
    <!-- Overlay: escurece a esquerda para leitura do texto; abre à direita mostrando a imagem -->
    <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(13,13,15,0.97)_0%,rgba(13,13,15,0.82)_40%,rgba(13,13,15,0.35)_65%,transparent_85%)]"></div>

    <div class="container-m2s relative">
      <div class="max-w-xl lg:max-w-2xl">
        <span class="inline-flex items-center rounded-full border border-m2s-primary-orange/25 bg-m2s-primary-orange/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-m2s-primary-orange">
          Tecnologia especializada em turismo
        </span>

        <h1 class="mt-7 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.02]">
          Soluções que
          <span class="text-m2s-primary-orange">transformam</span>
          empresas de turismo.
        </h1>

        <p class="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
          Consultoria em OBTs (Wooba, Reserve, Tech Travel), Business Intelligence com Power BI,
          automações e desenvolvimento de sistemas para agências, operadoras, consolidadoras e empresas corporativas.
        </p>

        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contato"
            class="inline-flex items-center justify-center rounded-2xl bg-m2s-primary-orange px-6 py-4 text-sm font-semibold text-white shadow-orange transition hover:-translate-y-0.5 hover:bg-m2s-hover-orange"
            @click.prevent="() => { scrollTo('contato'); analytics.heroCta('solicitar_diagnostico') }"
          >
            Solicitar diagnóstico
          </a>
          <a
            href="#servicos"
            class="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:border-m2s-primary-orange/40 hover:bg-white/10"
            @click.prevent="() => { scrollTo('servicos'); analytics.heroCta('conhecer_servicos') }"
          >
            Conhecer serviços
          </a>
        </div>

        <dl class="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm"
          >
            <div class="flex items-center gap-3">
              <component :is="stat.icon" class="h-5 w-5 text-m2s-primary-orange" />
              <dt class="text-2xl font-semibold text-white">{{ stat.value }}</dt>
            </div>
            <dd class="mt-3 text-sm leading-6 text-white/68">{{ stat.label }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup>
import { BriefcaseBusiness, MapPinned, ShieldCheck } from '@lucide/vue'

const stats = [
  { value: '28+', label: 'anos de experiência em tecnologia', icon: ShieldCheck },
  { value: '14+', label: 'anos dedicados ao turismo', icon: BriefcaseBusiness },
  { value: '100+', label: 'projetos e entregas especializadas', icon: ShieldCheck },
  { value: 'Brasil', label: 'atendimento consultivo em escala nacional', icon: MapPinned },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 104, behavior: 'smooth' })
}
</script>