<template>
  <div class="min-h-screen bg-[#0b0b0d]">
    <Header />

    <main>
      <div id="inicio">
        <Hero />
      </div>

      <div id="servicos">
        <Servicos />
      </div>

      <div id="sobre">
        <SobreNos />
      </div>
    </main>

    <div id="contato">
      <Contato />
    </div>

    <WhatsAppFloat />
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'

// ── Scroll ao topo no carregamento inicial ────────────────────────────────────
onMounted(() => {
  if (!window.location.hash) {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  setupScrollTracking()
  setupTimeTracking()
  setupWebVitals()
  setupRouteTracking()
})

// ── Scroll depth ─────────────────────────────────────────────────────────────
const _scrollHits = new Set()

function onScroll() {
  const total = document.documentElement.scrollHeight - window.innerHeight
  if (total <= 0) return
  const pct = Math.round((window.scrollY / total) * 100)
  for (const milestone of [25, 50, 75, 100]) {
    if (pct >= milestone && !_scrollHits.has(milestone)) {
      _scrollHits.add(milestone)
      analytics.scrollDepth(milestone)
    }
  }
}

function setupScrollTracking() {
  window.addEventListener('scroll', onScroll, { passive: true })
}

// ── Tempo na página ──────────────────────────────────────────────────────────
const _timers = []

function setupTimeTracking() {
  for (const s of [30, 60, 120, 300]) {
    _timers.push(setTimeout(() => analytics.timeOnPage(s), s * 1000))
  }
}

// ── Web Vitals via PerformanceObserver ───────────────────────────────────────
function setupWebVitals() {
  if (typeof PerformanceObserver === 'undefined') return

  // LCP — Largest Contentful Paint
  try {
    const lcpObs = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const last = entries[entries.length - 1]
      analytics.webVital('LCP', last.renderTime || last.loadTime)
      lcpObs.disconnect()
    })
    lcpObs.observe({ type: 'largest-contentful-paint', buffered: true })
  } catch (_) {}

  // CLS — Cumulative Layout Shift
  let clsValue = 0
  try {
    const clsObs = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) clsValue += entry.value
      }
    })
    clsObs.observe({ type: 'layout-shift', buffered: true })
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden' && clsValue > 0) {
        analytics.webVital('CLS', clsValue)
        clsValue = 0
      }
    }, { once: true })
  } catch (_) {}

  // INP — Interaction to Next Paint
  try {
    if (PerformanceObserver.supportedEntryTypes?.includes('event')) {
      const inpObs = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const delay = (entry.processingStart ?? 0) - entry.startTime
          if (delay > 200) analytics.webVital('INP', delay)
        }
      })
      inpObs.observe({ type: 'event', durationThreshold: 40 })
    }
  } catch (_) {}
}

// ── Mudança de rota (SPA) ────────────────────────────────────────────────────
function setupRouteTracking() {
  const router = useRouter()
  router.afterEach((to) => {
    analytics.routeChange(to.fullPath)
  })
}

// ── Limpeza ao desmontar ─────────────────────────────────────────────────────
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  _timers.forEach(clearTimeout)
})
</script>

<style>
body {
  padding-top: 84px;
}

#inicio,
#servicos,
#consultoria,
#business-intelligence,
#desenvolvimento,
#automacoes,
#sobre,
#contato {
  scroll-margin-top: 104px;
}
</style>