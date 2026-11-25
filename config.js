// Configuração do JS do site. Só coloque aqui dados confirmados.
// Telefones, endereço e horário ficam escritos direto no index.html (contato, rodapé, JSON-LD)
// e no llms.txt: ao mudar um deles, mude em todos (o README lista os dados confirmados).
window.SITE = {
  instagram: 'confeitariaviasaboralp',

  // WhatsApp (só dígitos, com DDI). Confirmado pelo Erick em 01/11/2026 e pela bio do
  // Instagram ("Wpp *Apenas encomendas"). Os botões [data-whatsapp] abrem esta conversa
  // com uma mensagem pronta; com null, caem no Instagram.
  whatsapp: '5535984021792',

  categorias: [
    { id: 'bolos', nome: 'Bolos', texto: 'Bolos decorados para aniversários, chás e datas especiais, com chantilly, raspas de chocolate, frutas e topos personalizados.' },
    { id: 'docinhos', nome: 'Doces e bombons', texto: 'Brigadeiros, bombons, docinhos em forminhas e sobremesas como o pavê de morango.' },
    { id: 'salgados', nome: 'Salgados', texto: 'Coxinhas, quibes, pastéis, empadinhas e minipizzas para festas e encontros.' },
    { id: 'tortas', nome: 'Tortas', texto: 'Torta de frango, a mais conhecida da Via Sabor, e outras tortas salgadas sob encomenda.' },
  ],

  // Páscoa: aberta = true só quando houver campanha confirmada.
  pascoa: { aberta: false },
};
