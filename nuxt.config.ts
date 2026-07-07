// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],

  runtimeConfig: {
    supabaseServiceRoleKey: '',
    public: {
      supabaseUrl: '',
      supabaseAnonKey: '',
    },
  },

  site: {
    url: 'https://www.m2stech.tur.br',
    name: 'M2S Tech Ltda',
  },

  sitemap: {
    strictNuxtContentPaths: false,
    urls: [
      {
        loc: '/',
        lastmod: '2026-06-26',
        changefreq: 'weekly',
        priority: 1.0,
      },
      {
        loc: '/nf-tracker/',
        lastmod: '2026-06-26',
        changefreq: 'weekly',
        priority: 0.9,
      },
    ],
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
      },
      title: 'M2S Tech Ltda',
      titleTemplate: '%s | M2S Tech',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'M2S Tech desenvolve soluções de BI, automações, SaaS e sistemas web para empresas de turismo e negócios. Conheça o NF Tracker para baixar XML de NFSe em lote.',
        },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'author', content: 'M2S Tech Ltda' },
        { name: 'theme-color', content: '#ff8c00' },

        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:site_name', content: 'M2S Tech Ltda' },
        { property: 'og:title', content: 'M2S Tech Ltda | BI, Automações e Sistemas para Turismo' },
        {
          property: 'og:description',
          content:
            'Soluções de BI, automações, SaaS e sistemas web. NF Tracker: baixe XML de NFSe em lote e converta para Excel.',
        },
        { property: 'og:url', content: 'https://www.m2stech.tur.br/' },
        { property: 'og:image', content: 'https://www.m2stech.tur.br/images/og-m2s-tech.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'M2S Tech Ltda | BI, Automações e Sistemas para Turismo' },
        {
          name: 'twitter:description',
          content:
            'BI, automações, SaaS e sistemas web para empresas de turismo e negócios.',
        },
        { name: 'twitter:image', content: 'https://www.m2stech.tur.br/images/og-m2s-tech.png' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.m2stech.tur.br/' },
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
        { rel: 'apple-touch-icon', href: '/images/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'M2S Tech',
            url: 'https://www.m2stech.tur.br/',
            logo: 'https://www.m2stech.tur.br/images/favicon.png',
            sameAs: [
              'https://www.linkedin.com/company/m2s-tech',
              'https://www.instagram.com/m2stech.tur',
              'https://www.youtube.com/@m2stech',
            ],
          }),
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-11533926606',
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11533926606');
          `,
          type: 'text/javascript',
        },
        {
          innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2202785866782399');
            fbq('track', 'PageView');
          `,
        },
      ],
      noscript: [
        {
          innerHTML:
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2202785866782399&ev=PageView&noscript=1" />',
        },
      ],
    },
  },
})
