# Estrutura Técnica da Página Principal

## Visão Geral

A página principal do projeto segue o padrão de roteamento baseado em arquivos do Nuxt. A rota `/` é resolvida pelo arquivo `app/pages/index.vue`, enquanto a montagem global da aplicação passa por `app/app.vue`.

Em termos práticos, a home não foi implementada como um único componente grande. Ela está dividida em seções independentes, cada uma encapsulada em um componente Vue específico, e a página principal atua apenas como orquestradora dessa composição.

## Fluxo de Renderização

### 1. Entry point da aplicação

O arquivo `app/app.vue` funciona como raiz visual da aplicação. Ele apenas renderiza `NuxtPage`, permitindo que o Nuxt injete a página correspondente à rota atual.

Responsabilidade principal:

- servir como contêiner raiz do roteamento
- delegar a renderização da página ao mecanismo de rotas do Nuxt

### 2. Resolução da rota principal

O arquivo `app/pages/index.vue` representa a rota `/`.

Esse arquivo tem responsabilidade baixa em termos de lógica. Ele não concentra comportamento complexo nem conteúdo extenso. Seu papel é:

- compor os componentes visuais da home
- definir a ordem das seções
- criar anchors de navegação interna: `#sobre`, `#solucoes` e `#contato`
- aplicar pequenos ajustes locais de rolagem para compensar o header fixo

## Composição da Home

A página principal é montada na seguinte sequência:

1. `Header`
2. `Hero`
3. `SobreNos`
4. `Servicos`
5. `Contato`
6. `WhatsAppFloat`

Essa organização deixa clara a separação entre composição de página e implementação de seção.

## Responsabilidades por Componente

### `app/components/Header.vue`

Responsável pelo cabeçalho fixo da página.

Funções principais:

- renderizar a marca visual no topo
- exibir links de navegação para as seções internas da home
- controlar o menu mobile com estado local
- executar scroll suave para os anchors da página

Aspectos técnicos relevantes:

- usa `ref` para controlar a abertura do menu mobile
- contém funções utilitárias de scroll com `document.getElementById()` e `scrollIntoView()`
- depende do ajuste de offset visual feito em `index.vue`, já que o header é fixo

### `app/components/Hero.vue`

Responsável pela seção de abertura da home.

Funções principais:

- apresentar a mensagem principal da marca
- entregar o destaque visual inicial da página

Aspectos técnicos relevantes:

- componente predominantemente estático
- sem regras de negócio relevantes
- styling local encapsulado com `scoped`
- usa gradientes, pseudo-elementos e animações CSS para compor o hero

### `app/components/SobreNos.vue`

Responsável pelo bloco institucional.

Funções principais:

- exibir imagem/logo da marca
- apresentar o texto descritivo sobre a empresa

Aspectos técnicos relevantes:

- componente de conteúdo estático
- estrutura em grid com duas colunas em desktop
- comportamento responsivo para empilhar imagem e texto em telas menores

### `app/components/Servicos.vue`

Responsável pela seção de soluções oferecidas.

Funções principais:

- renderizar a grade de cards de serviço
- permitir navegação direta em um dos cards
- abrir conteúdo complementar em modal para outros serviços

Aspectos técnicos relevantes:

- usa `ref` para controlar estado de modal
- mantém um objeto local com o conteúdo dos modais
- alterna `document.body.style.overflow` para bloquear scroll da página enquanto o modal está aberto
- mistura dois comportamentos na mesma seção:
  - navegação por link
  - interação local por modal

### `app/components/Contato.vue`

Responsável pela seção de contato e encerramento institucional da home.

Funções principais:

- exibir texto de contato
- listar canais sociais e telefone
- apresentar CNPJ
- renderizar o copyright

Aspectos técnicos relevantes:

- usa `computed` para obter dinamicamente o ano atual
- combina conteúdo institucional com uma função de rodapé da própria página
- mantém estrutura estática, com lógica mínima

### `app/components/WhatsAppFloat.vue`

Responsável pelo CTA flutuante de WhatsApp.

Funções principais:

- manter um botão de contato sempre visível
- gerar o link para WhatsApp com mensagem pré-preenchida

Aspectos técnicos relevantes:

- monta a URL dinamicamente a partir do número e da mensagem
- usa `encodeURIComponent()` para garantir validade na query string
- componente isolado, sem dependência de estado global

## Estilos e Comportamento de Layout

Embora cada componente possua seus próprios estilos `scoped`, a página principal também aplica ajustes estruturais locais.

Os principais são:

- `padding-top` no `body` para compensar a altura do header fixo
- `scroll-margin-top` nas seções com anchor, evitando que o conteúdo fique encoberto ao navegar por hash

Esse detalhe é importante porque parte da navegação da home depende de links internos para IDs da própria página.

## SEO, Head e Configuração Global

Os metadados da home não estão definidos diretamente em `index.vue`.

Eles ficam centralizados em `nuxt.config.ts`, incluindo:

- `title` e `titleTemplate`
- meta description
- Open Graph
- Twitter cards
- canonical
- favicon e manifest
- scripts externos de analytics e rastreamento

Essa abordagem indica que o projeto opta por uma configuração global de head para a home institucional, em vez de definir SEO no nível do componente de página.

## Padrão Arquitetural Observado

A estrutura atual da página principal segue um padrão simples e funcional:

- `app/app.vue` cuida apenas do contêiner raiz
- `app/pages/index.vue` cuida apenas da composição da rota
- `app/components/*.vue` concentram conteúdo, comportamento local e estilo de cada seção

Vantagens dessa abordagem:

- baixo acoplamento entre seções
- manutenção mais simples por bloco funcional
- leitura mais clara da composição da home
- facilidade para alterar seções individualmente

Limites observáveis da implementação atual:

- parte do conteúdo institucional está hardcoded nos componentes
- a home depende de manipulação direta do DOM em alguns pontos, como scroll e bloqueio de overflow do body
- SEO e conteúdo visual estão separados entre arquivos diferentes, o que exige conhecer mais de um ponto do projeto para rastrear a página completa

## Resumo Executivo

Tecnicamente, a página principal está organizada como uma composição de componentes independentes dentro do fluxo padrão do Nuxt. O arquivo `index.vue` não concentra o conteúdo da home; ele apenas monta as seções. O conteúdo real, o comportamento local e os estilos estão distribuídos entre componentes especializados, enquanto a configuração global de metadados e scripts está concentrada em `nuxt.config.ts`.