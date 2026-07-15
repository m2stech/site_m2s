<template>
  <div class="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7">
    <a
      :href="whatsappUrl"
      target="_blank"
      rel="noreferrer"
      class="inline-flex items-center gap-3 rounded-full border border-[#25d366]/25 bg-[#111214] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(0,0,0,0.38)] transition hover:-translate-y-0.5 hover:border-[#25d366]/40"
      title="Fale com a M2S Tech no WhatsApp"
      @click="handleWhatsAppFloatClick"
    >
      <span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#25d366] text-white">
        <MessageCircle class="h-5 w-5" />
      </span>
      <span class="hidden sm:block">Falar no WhatsApp</span>
    </a>
  </div>
</template>

<script setup>
import { MessageCircle } from '@lucide/vue'

const whatsappNumber = '5531996369696'
const message = 'Olá! Gostaria de saber mais sobre os serviços especializados da M2S Tech.'
const encodedMessage = encodeURIComponent(message)
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

const handleWhatsAppFloatClick = () => {
  analytics.whatsapp('floating')
  analytics.metaContact('whatsapp_float')
}
</script>