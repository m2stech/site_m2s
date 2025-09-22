/**
 * M2S Tech Solutions - Sistema de Cores
 * Utilitários para trabalhar com as cores da marca
 */

export const M2S_COLORS = {
  // Cores primárias da marca
  primary: {
    orange: '#ff8c00',
    light: '#d6d6d6',
    dark: '#545454',
    bg: '#1d1d1c'
  },
  
  // Variações de texto
  text: {
    primary: '#d6d6d6',
    secondary: '#545454',
    accent: '#ff8c00'
  },
  
  // Variações de background
  background: {
    primary: '#1d1d1c',
    secondary: '#2a2a28',
    accent: '#ff8c00'
  },
  
  // Variações de borda
  border: {
    default: '#545454',
    light: '#6b6b6b',
    accent: '#ff8c00'
  },
  
  // Estados de hover
  hover: {
    orange: '#e67c00',
    light: '#e6e6e6',
    dark: '#6b6b6b'
  },
  
  // Escala de cinzas
  gray: {
    50: '#f9f9f9',
    100: '#e8e8e8',
    200: '#d6d6d6',
    300: '#b8b8b8',
    400: '#9a9a9a',
    500: '#7c7c7c',
    600: '#545454',
    700: '#3a3a3a',
    800: '#2a2a28',
    900: '#1d1d1c'
  },
  
  // Cores semânticas
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  }
} as const

/**
 * Converte uma cor hex para RGB
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

/**
 * Converte RGB para hex
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

/**
 * Aplica transparência a uma cor hex
 */
export function hexWithOpacity(hex: string, opacity: number): string {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex
  
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`
}

/**
 * Gera variações de uma cor (mais clara/escura)
 */
export function generateColorVariations(hex: string, steps: number = 5): string[] {
  const rgb = hexToRgb(hex)
  if (!rgb) return [hex]
  
  const variations: string[] = []
  
  for (let i = 0; i < steps; i++) {
    const factor = (i + 1) / (steps + 1)
    
    // Versão mais clara
    const lighterR = Math.min(255, Math.round(rgb.r + (255 - rgb.r) * factor))
    const lighterG = Math.min(255, Math.round(rgb.g + (255 - rgb.g) * factor))
    const lighterB = Math.min(255, Math.round(rgb.b + (255 - rgb.b) * factor))
    
    // Versão mais escura
    const darkerR = Math.max(0, Math.round(rgb.r * (1 - factor)))
    const darkerG = Math.max(0, Math.round(rgb.g * (1 - factor)))
    const darkerB = Math.max(0, Math.round(rgb.b * (1 - factor)))
    
    variations.push(
      rgbToHex(lighterR, lighterG, lighterB),
      rgbToHex(darkerR, darkerG, darkerB)
    )
  }
  
  return variations
}

/**
 * Verifica se uma cor é clara ou escura
 */
export function isLightColor(hex: string): boolean {
  const rgb = hexToRgb(hex)
  if (!rgb) return false
  
  // Cálculo de luminância
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255
  return luminance > 0.5
}

/**
 * Retorna a cor de texto ideal (clara ou escura) para um fundo
 */
export function getContrastTextColor(backgroundColor: string): string {
  return isLightColor(backgroundColor) 
    ? M2S_COLORS.text.secondary 
    : M2S_COLORS.text.primary
}

/**
 * Gera um gradiente CSS entre duas cores
 */
export function generateGradient(
  color1: string, 
  color2: string, 
  direction: string = 'to right'
): string {
  return `linear-gradient(${direction}, ${color1}, ${color2})`
}

/**
 * Paleta de cores completa para exportação
 */
export const M2S_COLOR_PALETTE = {
  ...M2S_COLORS,
  
  // Utilitários
  utils: {
    hexToRgb,
    rgbToHex,
    hexWithOpacity,
    generateColorVariations,
    isLightColor,
    getContrastTextColor,
    generateGradient
  }
}

// Tipos TypeScript para as cores
export type M2SColorKeys = keyof typeof M2S_COLORS
export type M2SPrimaryColors = keyof typeof M2S_COLORS.primary
export type M2STextColors = keyof typeof M2S_COLORS.text
export type M2SBackgroundColors = keyof typeof M2S_COLORS.background
export type M2SGrayColors = keyof typeof M2S_COLORS.gray

/**
 * Hook composable para usar as cores em componentes Vue
 */
export function useM2SColors() {
  return {
    colors: M2S_COLORS,
    hexToRgb,
    hexWithOpacity,
    isLightColor,
    getContrastTextColor,
    generateGradient
  }
}