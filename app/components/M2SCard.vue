<template>
  <div :class="cardClasses">
    <!-- Header do card (opcional) -->
    <div v-if="$slots.header" class="border-b border-m2s-border-default pb-4 mb-6">
      <slot name="header" />
    </div>
    
    <!-- Conteúdo principal -->
    <div class="flex-1">
      <slot />
    </div>
    
    <!-- Footer do card (opcional) -->
    <div v-if="$slots.footer" class="border-t border-m2s-border-default pt-4 mt-6">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'hover' | 'gradient'
  padding?: 'sm' | 'md' | 'lg'
  shadow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  shadow: true
})

const cardClasses = computed(() => {
  const baseClasses = 'rounded-xl border'
  
  const variantClasses = {
    default: 'card-m2s',
    hover: 'card-m2s-hover',
    gradient: 'card-m2s gradient-m2s-dark'
  }
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const shadowClass = props.shadow ? 'shadow-dark' : ''
  
  return [
    baseClasses,
    variantClasses[props.variant],
    paddingClasses[props.padding],
    shadowClass
  ].join(' ')
})
</script>