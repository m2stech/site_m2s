<template>
  <div class="bg-[#111114] py-20 sm:py-24 lg:py-28">
    <section class="container-m2s" aria-labelledby="servicos-heading">
      <div class="mx-auto max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-[0.2em] text-m2s-primary-orange">O que fazemos</span>
        <h2 id="servicos-heading" class="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Tecnologia consultiva para operações de turismo mais eficientes.
        </h2>
        <p class="mt-5 text-base leading-8 text-white/65 sm:text-lg">
          Estruturamos processos, dados e sistemas para operações que exigem visão de negócio, confiabilidade e velocidade.
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="service in services"
          :id="service.id"
          :key="service.title"
          class="group flex h-full flex-col rounded-[28px] border border-white/8 bg-[#17171b] p-7 shadow-dark transition hover:-translate-y-1.5 hover:border-m2s-primary-orange/40"
        >
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl border border-m2s-primary-orange/20 bg-m2s-primary-orange/10 text-m2s-primary-orange">
            <component :is="service.icon" class="h-7 w-7" />
          </div>
          <h3 class="mt-6 text-xl font-semibold text-white">{{ service.title }}</h3>
          <p class="mt-4 flex-1 text-sm leading-7 text-white/62">{{ service.description }}</p>
          <a href="#contato" class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-m2s-primary-orange transition group-hover:gap-3" @click.prevent="() => { analytics.metaContact(`home_service_${service.id}_saiba_mais`); scrollToContact(); analytics.serviceClick(service.id) }">
            Saiba mais
            <ArrowRight class="h-4 w-4" />
          </a>
        </article>
      </div>
    </section>

    <section class="container-m2s mt-20 sm:mt-24" aria-labelledby="diferenciais-heading">
      <div class="rounded-[32px] border border-white/8 bg-[#141418] px-6 py-10 sm:px-10 sm:py-12">
        <div class="max-w-2xl">
          <h2 id="diferenciais-heading" class="text-3xl font-semibold text-white sm:text-4xl">Por que escolher a M2S Tech?</h2>
          <p class="mt-4 text-base leading-8 text-white/62">
            Conhecimento setorial, visão operacional e execução técnica para projetos que não podem falhar no dia a dia.
          </p>
        </div>

        <div class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          <div
            v-for="item in differentiators"
            :key="item.label"
            class="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
          >
            <component :is="item.icon" class="h-5 w-5 shrink-0 text-m2s-primary-orange" />
            <span class="text-sm font-medium leading-6 text-white/78">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="container-m2s mt-20 sm:mt-24" aria-labelledby="plataformas-heading">
      <div class="mx-auto max-w-3xl text-center">
        <h2 id="plataformas-heading" class="text-3xl font-semibold text-white sm:text-4xl">
          Especialistas nas plataformas que movem o turismo.
        </h2>
      </div>

      <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-8">
        <div
          v-for="platform in platforms"
          :key="platform"
          class="flex min-h-[88px] items-center justify-center rounded-2xl border border-white/8 bg-[#17171b] px-5 text-center text-lg font-medium text-white/78"
        >
          {{ platform }}
        </div>
      </div>
    </section>

    <!-- Cases de sucesso -->
    <section class="container-m2s mt-20 sm:mt-24" aria-labelledby="cases-heading">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-bold uppercase tracking-[0.26em] text-m2s-primary-orange">Cases de sucesso</p>
        <h2 id="cases-heading" class="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Resultados reais para operações reais.
        </h2>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <article
          v-for="c in cases"
          :key="c.title"
          class="group flex flex-col rounded-[28px] border border-white/8 bg-[#17171b] p-7 shadow-dark transition hover:-translate-y-1.5 hover:border-m2s-primary-orange/40"
        >
          <p class="text-[10px] font-bold uppercase tracking-[0.25em] text-m2s-primary-orange">{{ c.category }}</p>
          <div class="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-m2s-primary-orange/20 bg-m2s-primary-orange/10 text-m2s-primary-orange">
            <component :is="c.icon" class="h-6 w-6" />
          </div>
          <h3 class="mt-5 text-xl font-semibold text-white">{{ c.title }}</h3>
          <p class="mt-3 flex-1 text-sm leading-7 text-white/62">{{ c.description }}</p>
          <a href="#contato" class="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-m2s-primary-orange transition group-hover:gap-3" @click.prevent="() => { analytics.metaContact(`home_case_${c.category.toLowerCase().replace(/\s+/g, '_')}_ver_case`); scrollToContact(); analytics.serviceClick(c.category.toLowerCase().replace(/\s+/g, '_')) }">
            Ver case
            <ArrowRight class="h-4 w-4" />
          </a>
        </article>
      </div>
    </section>

    <!-- Nossos clientes — ticker rolante -->
    <section class="mt-20 sm:mt-24" aria-label="Projetos realizados para">
      <div class="container-m2s mb-8 text-center">
        <p class="text-xs font-bold uppercase tracking-[0.28em] text-white/40">Projetos realizados para</p>
        <p class="mt-3 text-sm leading-7 text-white/50">
          Nossa experiência foi construída ao lado de agências, operadoras,<br class="hidden sm:block">
          consolidadoras e empresas corporativas do mercado de turismo.
        </p>
      </div>
      <div class="relative overflow-hidden">
        <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#111114]"></div>
        <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#111114]"></div>
        <div class="ticker-track flex gap-4">
          <div
            v-for="(client, idx) in tickerItems"
            :key="`t-${idx}`"
            class="flex shrink-0 flex-col items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-10 py-7"
          >
            <img
              :src="client.logo"
              :alt="client.name"
              class="h-28 w-auto max-w-[320px] object-contain"
            >
            <span class="whitespace-nowrap text-xs font-medium text-white/60">{{ client.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="container-m2s mt-20 sm:mt-24" aria-labelledby="processo-heading">
      <div class="mx-auto max-w-3xl text-center">
        <h2 id="processo-heading" class="text-3xl font-semibold text-white sm:text-4xl">Como trabalhamos</h2>
      </div>

      <div class="mt-10 rounded-[32px] border border-white/8 bg-[#141418] px-6 py-8 sm:px-8 sm:py-10">
        <div class="grid gap-6 lg:grid-cols-5 lg:gap-4">
          <div
            v-for="(step, index) in processSteps"
            :key="step.title"
            class="relative rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-6 lg:border-none lg:bg-transparent lg:px-4"
          >
            <div class="mb-5 flex items-center gap-3">
              <span class="flex h-9 w-9 items-center justify-center rounded-full bg-m2s-primary-orange text-sm font-semibold text-white">
                {{ index + 1 }}
              </span>
              <component :is="step.icon" class="h-5 w-5 text-m2s-primary-orange" />
            </div>
            <h3 class="text-lg font-semibold text-white">{{ step.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-white/60">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Compass,
  Handshake,
  LayoutTemplate,
  Lightbulb,
  MonitorSmartphone,
  Route,
  Settings2,
  ShieldCheck,
  Workflow,
  Wrench,
} from '@lucide/vue'

const services = [
  {
    id: 'consultoria',
    title: 'Consultoria em OBTs',
    description: 'Consultoria especializada em Wooba, Corporate, Reserve e integrações para operações corporativas e consolidadoras.',
    icon: BriefcaseBusiness,
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description: 'Dashboards, indicadores operacionais e análises que transformam dados do turismo em decisões mais rápidas.',
    icon: BarChart3,
  },
  {
    id: 'desenvolvimento',
    title: 'Desenvolvimento de Sistemas',
    description: 'Sistemas web, portais corporativos, APIs e soluções sob medida para processos específicos do negócio.',
    icon: MonitorSmartphone,
  },
  {
    id: 'automacoes',
    title: 'Automações',
    description: 'Robôs e rotinas para reduzir tarefas repetitivas, aumentar produtividade e dar escala à operação.',
    icon: Bot,
  },
]

const differentiators = [
  { label: 'Conhecimento profundo do mercado de turismo', icon: Compass },
  { label: 'Experiência prática em consolidadoras e agências', icon: Route },
  { label: 'Atendimento direto com quem entende do assunto', icon: Handshake },
  { label: 'Soluções personalizadas com foco em resultado', icon: LayoutTemplate },
  { label: 'Agilidade, transparência e parceria de verdade', icon: ShieldCheck },
  { label: 'Tecnologia que gera valor para o seu negócio', icon: Wrench },
]

const platforms = ['Wooba', 'Reserve', 'Tech Travel', 'Argo', 'Power BI', 'Python', 'PostgreSQL', 'Supabase']

const cases = [
  {
    category: 'Business Intelligence',
    title: 'Painéis executivos completos',
    description: 'Desenvolvemos dashboards estratégicos que oferecem visão 360° do negócio, ajudando na tomada de decisão e no alcance de metas.',
    icon: BarChart3,
  },
  {
    category: 'Consultoria OBT',
    title: 'Implantação Wooba Corporate',
    description: 'Parametrização completa do ambiente Wooba Corporate e integração com sistemas internos, otimizando processos e reduzindo custos operacionais.',
    icon: BriefcaseBusiness,
  },
  {
    category: 'Automações',
    title: 'Robôs que geram resultados',
    description: 'Automação de processos críticos, reduzindo tempo operacional em até 80% e eliminando erros manuais na operação.',
    icon: Bot,
  },
]

const clients = [
  { name: 'Turystar', logo: '/images/turystar.png' },
  { name: 'Snow Operadora', logo: '/images/snow.png' },
  { name: 'Mabtour Viagens', logo: '/images/mabtour.png' },
  { name: 'Primus Turismo', logo: '/images/primus.png' },
  { name: 'Pátria Consolidadora', logo: '/images/patria.png' },
  { name: 'S2 Viagens', logo: '/images/S2.png' },
]
// 4 cópias garantem cobertura em qualquer viewport sem espaços em branco
const tickerItems = [...clients, ...clients, ...clients, ...clients]

const processSteps = [
  { title: 'Diagnóstico', description: 'Levantamos cenário, gargalos, dados e oportunidades com visão operacional.', icon: Lightbulb },
  { title: 'Planejamento', description: 'Desenhamos a solução ideal com prioridades, arquitetura e cronograma realista.', icon: Compass },
  { title: 'Desenvolvimento', description: 'Construímos com agilidade, clareza técnica e aderência ao contexto do cliente.', icon: Workflow },
  { title: 'Implantação', description: 'Colocamos em produção com segurança, treinamento e acompanhamento próximo.', icon: Settings2 },
  { title: 'Evolução contínua', description: 'Acompanhamos, otimizamos e evoluímos juntos conforme a operação amadurece.', icon: BarChart3 },
]

const scrollToContact = () => {
  const el = document.getElementById('contato')
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 104, behavior: 'smooth' })
}
</script>

<style scoped>
/* Ticker de clientes — animação CSS pura, sem dependências */
.ticker-track {
  width: max-content;
  animation: ticker-scroll 30s linear infinite;
}

.ticker-track:hover {
  animation-play-state: paused;
}

@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-25%); }
}
</style>