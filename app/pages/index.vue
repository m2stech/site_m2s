<template>
  <div>
    <Header />
    <Hero />
    <div id="sobre">
      <SobreNos />
    </div>
    <div id="solucoes">
      <Servicos />
    </div>
    <div id="contato">
      <Contato />
    </div>
    <WhatsAppFloat />
  </div>
</template>

<style>
/* Adiciona padding-top para compensar o header fixo */
body {
  padding-top: 80px;
}

#sobre, #solucoes, #contato {
  scroll-margin-top: 80px;
}
</style>