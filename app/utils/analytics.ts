/**
 * analytics.ts — Utilitário centralizado de analytics para M2S Tech Solutions
 *
 * GA4  : G-4TBXK1FW1H
 * GAds : AW-11533926606
 *
 * Auto-importado pelo Nuxt em toda a pasta app/.
 * Todas as funções são no-op no SSR.
 */

// ── Tipo mínimo para window.gtag ─────────────────────────────────────────────
type GtagFn = (...args: unknown[]) => void

declare global {
  interface Window {
    gtag?: GtagFn
    fbq?: (...args: unknown[]) => void
  }
}

function gtag(): GtagFn | undefined {
  if (import.meta.server) return undefined
  return window.gtag
}

// ── Dispatcher base ──────────────────────────────────────────────────────────

/**
 * Dispara um evento GA4 com segurança.
 * No-op durante SSR e quando o gtag ainda não carregou.
 */
export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {},
): void {
  const g = gtag()
  if (typeof g !== 'function') return
  g('event', eventName, params)
}

// ── Helpers por domínio ──────────────────────────────────────────────────────

export const analytics = {

  // ── Navegação ──────────────────────────────────────────────────────────────

  /** Clique em item do menu principal */
  navClick: (label: string) =>
    trackEvent('nav_click', { event_category: 'navigation', event_label: label }),

  /** Mudança de rota (SPA) */
  routeChange: (to: string) =>
    trackEvent('page_view', { event_category: 'navigation', event_label: to }),

  // ── Meta Pixel ─────────────────────────────────────────────────────────────

  /** Dispara PageView no Meta Pixel */
  metaPageView: () => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'PageView')
    }
  },

  /** Dispara Lead no Meta Pixel */
  metaLead: (label?: string) => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      if (label) {
        window.fbq('track', 'Lead', { content_name: label })
        return
      }
      window.fbq('track', 'Lead')
    }
  },

  /** Dispara Contact no Meta Pixel */
  metaContact: (label?: string) => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      if (label) {
        window.fbq('track', 'Contact', { content_name: label })
        return
      }
      window.fbq('track', 'Contact')
    }
  },

  /** Dispara ViewContent no Meta Pixel */
  metaViewContent: (contentName?: string) => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      if (contentName) {
        window.fbq('track', 'ViewContent', { content_name: contentName })
        return
      }
      window.fbq('track', 'ViewContent')
    }
  },

  // ── Hero ───────────────────────────────────────────────────────────────────

  /** Clique em botão CTA do hero */
  heroCta: (label: string) =>
    trackEvent('cta_click', { event_category: 'hero', event_label: label }),

  // ── WhatsApp (por origem) ──────────────────────────────────────────────────

  /**
   * Clique em qualquer botão de WhatsApp.
   * Sources: 'floating' | 'cta_banner' | 'contact' | 'footer' | 'hero'
   */
  whatsapp: (source: string) =>
    trackEvent('whatsapp_click', {
      event_category: 'cta',
      event_label: `${source}_whatsapp`,
    }),

  // ── Serviços ───────────────────────────────────────────────────────────────

  /** Clique no link "Saiba mais" ou "Ver case" de um serviço */
  serviceClick: (service: string) =>
    trackEvent('service_click', { event_category: 'services', event_label: service }),

  // ── Contato ────────────────────────────────────────────────────────────────

  /** Clique em link de contato (phone, email, linkedin, instagram) */
  contactClick: (type: string) =>
    trackEvent('contact_click', { event_category: 'contact', event_label: type }),

  // ── Formulário ─────────────────────────────────────────────────────────────

  /** Primeiro campo preenchido — indica início do funil */
  formStart: () =>
    trackEvent('form_start', { event_category: 'form', event_label: 'contact_form' }),

  /** Campo específico recebeu foco */
  formFieldFocus: (field: string) =>
    trackEvent('form_field_focus', { event_category: 'form', event_label: field }),

  /** Botão Enviar clicado */
  formSubmitAttempt: () =>
    trackEvent('form_submit_attempt', { event_category: 'form', event_label: 'contact_form' }),

  /** Envio confirmado com sucesso */
  formSubmitSuccess: (timeMs: number) =>
    trackEvent('form_submit_success', {
      event_category: 'form',
      event_label: 'contact_form',
      value: Math.round(timeMs / 1000),
    }),

  /** Erro no envio */
  formSubmitError: () =>
    trackEvent('form_submit_error', { event_category: 'form', event_label: 'contact_form' }),

  // ── Engajamento ────────────────────────────────────────────────────────────

  /** Profundidade de scroll: 25 | 50 | 75 | 100 */
  scrollDepth: (pct: number) =>
    trackEvent('scroll_depth', {
      event_category: 'engagement',
      event_label: `scroll_${pct}`,
      value: pct,
    }),

  /** Tempo na página em segundos: 30 | 60 | 120 | 300 */
  timeOnPage: (seconds: number) =>
    trackEvent('time_on_page', {
      event_category: 'engagement',
      event_label: `time_${seconds}s`,
      value: seconds,
    }),

  // ── Web Vitals ─────────────────────────────────────────────────────────────

  /**
   * Registra Core Web Vitals via PerformanceObserver.
   * CLS é adimensional — multiplica-se por 1000 para inteiro no GA4.
   */
  webVital: (name: 'LCP' | 'INP' | 'CLS', value: number) =>
    trackEvent('web_vital', {
      event_category: 'performance',
      event_label: name,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
    }),
}
