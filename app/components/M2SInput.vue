<template>
  <div class="relative">
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :class="inputClasses"
      @input="handleInput"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
    >
    
    <!-- Label -->
    <label 
      v-if="label" 
      :for="id" 
      class="block text-sm font-medium text-m2s-text-primary mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-m2s-text-accent">*</span>
    </label>
    
    <!-- Mensagem de erro -->
    <p v-if="error" class="mt-2 text-sm text-red-400">
      {{ error }}
    </p>
    
    <!-- Texto de ajuda -->
    <p v-if="helpText" class="mt-2 text-sm text-m2s-text-secondary">
      {{ helpText }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id?: string
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'
  modelValue?: string | number
  placeholder?: string
  label?: string
  disabled?: boolean
  required?: boolean
  error?: string
  helpText?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md'
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  blur: []
  focus: []
}>()

const inputClasses = computed(() => {
  const baseClasses = 'input-m2s'
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3',
    lg: 'px-5 py-4 text-lg'
  }
  
  const errorClasses = props.error ? 'border-red-400 focus:ring-red-400' : ''
  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : ''
  
  return [
    baseClasses,
    sizeClasses[props.size],
    errorClasses,
    disabledClasses
  ].join(' ')
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('update:modelValue', value)
}
</script>