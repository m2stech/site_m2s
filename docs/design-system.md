# M2S Tech Solutions - Sistema de Design

## Paleta de Cores

### Cores Primárias da Marca
Baseadas na logo da M2S Tech Solutions:

- **Orange Principal**: `#ff8c00` - Cor de destaque e accent
- **Cinza Claro**: `#d6d6d6` - Texto principal e elementos claros
- **Cinza Escuro**: `#545454` - Detalhes e texto secundário
- **Fundo Escuro**: `#1d1d1c` - Fundo principal da aplicação

### Classes Tailwind Personalizadas

#### Texto
```css
/* Cores de texto */
text-m2s-text-primary      /* #d6d6d6 - Texto principal */
text-m2s-text-secondary    /* #545454 - Texto secundário */
text-m2s-text-accent       /* #ff8c00 - Texto de destaque */

/* Texto com gradiente */
text-gradient-m2s          /* Gradiente laranja */
```

#### Backgrounds
```css
/* Fundos */
bg-m2s-background-primary    /* #1d1d1c - Fundo principal */
bg-m2s-background-secondary  /* #2a2a28 - Fundo secundário */
bg-m2s-background-accent     /* #ff8c00 - Fundo de destaque */

/* Gradientes */
gradient-m2s-orange         /* Gradiente laranja */
gradient-m2s-dark          /* Gradiente escuro */
```

#### Bordas
```css
/* Bordas */
border-m2s-border-default   /* #545454 - Borda padrão */
border-m2s-border-light     /* #6b6b6b - Borda clara */
border-m2s-border-accent    /* #ff8c00 - Borda de destaque */
```

#### Estados Hover
```css
/* Hover states */
hover:bg-m2s-hover-orange   /* #e67c00 - Orange mais escuro */
hover:text-m2s-hover-orange /* #e67c00 - Texto hover */
hover:border-m2s-hover-orange /* #e67c00 - Borda hover */
```

## Componentes Pré-definidos

### Botões
```html
<!-- Botão primário -->
<button class="btn-m2s-primary">
  Botão Primário
</button>

<!-- Botão secundário -->
<button class="btn-m2s-secondary">
  Botão Secundário
</button>

<!-- Botão outline -->
<button class="btn-m2s-outline">
  Botão Outline
</button>
```

### Cards
```html
<!-- Card básico -->
<div class="card-m2s">
  Conteúdo do card
</div>

<!-- Card com hover -->
<div class="card-m2s-hover">
  Card com efeito hover
</div>
```

### Inputs
```html
<!-- Input padrão -->
<input type="text" class="input-m2s" placeholder="Digite aqui...">
```

### Seções
```html
<!-- Seção escura -->
<section class="section-m2s-dark">
  <div class="container-m2s">
    Conteúdo da seção
  </div>
</section>

<!-- Seção clara -->
<section class="section-m2s-light">
  <div class="container-m2s">
    Conteúdo da seção
  </div>
</section>
```

## Tipografia

### Fontes
- **Sans-serif**: Inter (texto corrido)
- **Display**: Poppins (títulos e headings)

### Classes de texto
```css
/* Tamanhos */
text-xs, text-sm, text-base, text-lg, text-xl
text-2xl, text-3xl, text-4xl, text-5xl, text-6xl

/* Pesos */
font-light, font-normal, font-medium, font-semibold, font-bold
```

## Animações Personalizadas

### Classes de animação
```css
animate-fade-in        /* Fade in suave */
animate-slide-up       /* Slide up */
animate-pulse-orange   /* Pulse com cor laranja */
animate-float          /* Flutuação suave */
```

## Shadows Personalizadas

```css
shadow-orange         /* Sombra laranja */
shadow-orange-lg      /* Sombra laranja grande */
shadow-dark           /* Sombra escura */
```

## Utilidades Especiais

### Scrollbar personalizada
```css
scrollbar-m2s         /* Scrollbar com cores da marca */
```

## Variáveis CSS

Todas as cores também estão disponíveis como variáveis CSS:

```css
:root {
  --m2s-orange: #ff8c00;
  --m2s-light: #d6d6d6;
  --m2s-dark: #545454;
  --m2s-bg: #1d1d1c;
  
  /* Variações */
  --m2s-orange-hover: #e67c00;
  --m2s-orange-light: #ffad4d;
  --m2s-orange-dark: #cc7000;
  
  /* Escala de cinzas */
  --m2s-gray-50: #f9f9f9;
  --m2s-gray-100: #e8e8e8;
  --m2s-gray-200: #d6d6d6;
  --m2s-gray-300: #b8b8b8;
  --m2s-gray-400: #9a9a9a;
  --m2s-gray-500: #7c7c7c;
  --m2s-gray-600: #545454;
  --m2s-gray-700: #3a3a3a;
  --m2s-gray-800: #2a2a28;
  --m2s-gray-900: #1d1d1c;
}
```

## Exemplos de Uso

### Layout típico
```html
<div class="min-h-screen bg-m2s-background-primary">
  <header class="section-m2s-dark">
    <div class="container-m2s">
      <h1 class="text-3xl font-display text-gradient-m2s">
        M2S Tech Solutions
      </h1>
    </div>
  </header>
  
  <main class="section-m2s-light">
    <div class="container-m2s">
      <div class="card-m2s-hover">
        <h2 class="text-xl text-m2s-text-primary mb-4">
          Título do Card
        </h2>
        <p class="text-m2s-text-secondary mb-6">
          Descrição do conteúdo...
        </p>
        <button class="btn-m2s-primary">
          Call to Action
        </button>
      </div>
    </div>
  </main>
</div>
```

Este sistema de design garante consistência visual em todo o site da M2S Tech Solutions, mantendo as cores da marca e proporcionando uma experiência de usuário coesa.