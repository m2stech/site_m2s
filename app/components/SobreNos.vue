<template>
  <section class="bg-[#0d0d0f] py-20 sm:py-24 lg:py-28" aria-labelledby="sobre-heading">
    <div class="container-m2s">
      <div class="grid items-center gap-12 lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div class="rounded-[32px] border border-white/8 bg-[#151519] p-5 shadow-dark">
          <!-- TODO: inserir imagem institucional. -->
          <div class="flex min-h-[360px] items-center justify-center rounded-[26px] border border-dashed border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.12),transparent_40%),rgba(255,255,255,0.02)] sm:min-h-[440px]">
            <div class="text-center">
              <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] border border-m2s-primary-orange/25 bg-m2s-primary-orange/10 text-m2s-primary-orange">
                <Image class="h-10 w-10" />
              </div>
              <p class="mt-6 text-lg font-medium text-white">Placeholder institucional</p>
              <p class="mt-2 text-sm text-white/50">Espaço reservado para foto da equipe ou da operação.</p>
            </div>
          </div>
        </div>

        <div class="max-w-2xl">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-m2s-primary-orange">Sobre a M2S Tech</span>
          <h2 id="sobre-heading" class="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Tecnologia aplicada ao turismo com visão prática de operação.
          </h2>
          <p class="mt-6 text-base leading-8 text-white/68 sm:text-lg">
            A M2S Tech nasceu para apoiar empresas de turismo que precisam evoluir processos, integrar plataformas,
            estruturar dados e ganhar eficiência com tecnologia aderente ao negócio.
          </p>
          <p class="mt-5 text-base leading-8 text-white/60 sm:text-lg">
            Com atuação consultiva e execução técnica, unimos conhecimento de mercado, repertório operacional e desenvolvimento sob medida para transformar demandas complexas em soluções confiáveis.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <span class="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/72">Especialistas em turismo</span>
            <span class="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/72">Projetos sob medida</span>
            <span class="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/72">Entrega consultiva</span>
          </div>

          <button
            type="button"
            class="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:border-m2s-primary-orange/40 hover:bg-white/10"
          >
            Conheça nossa história
            <ArrowUpRight class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowUpRight, Image } from '@lucide/vue'
</script>