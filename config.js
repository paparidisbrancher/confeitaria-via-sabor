// Configuração central do site. Só coloque aqui dados confirmados.
// Campos com null ficam fora do site até serem preenchidos.
window.SITE = {
  nome: 'Confeitaria Via Sabor',
  cidade: 'Alpinópolis',
  estado: 'MG',
  instagram: 'confeitariaviasaboralp',

  // Telefone fixo impresso na caixa da confeitaria (e repetido em listagem pública).
  telefone: '(35) 3523-2501',

  // WhatsApp (só dígitos, com DDI). Confirmado pelo Erick em 01/11/2026 e pela bio do
  // Instagram ("Wpp *Apenas encomendas"). Todos os botões de encomenda abrem esta conversa;
  // com null, caem no Instagram.
  whatsapp: '5535984021792',

  // Endereço: a caixa diz nº 181 e uma listagem diz nº 255. Confirmar antes de publicar.
  endereco: null, // ex.: 'Rua Major João Gonçalves, 181, Centro'
  // Horário copiado da bio do Instagram em 01/11/2026.
  horarios: 'Seg a sex, 8h30 às 18h · Sáb, 8h30 às 17h',

  categorias: [
    { id: 'bolos', nome: 'Bolos', texto: 'Bolos decorados para aniversários, chás e datas especiais, com chantilly, raspas de chocolate, frutas e topos personalizados.' },
    { id: 'docinhos', nome: 'Doces e bombons', texto: 'Brigadeiros, bombons, docinhos em forminhas e sobremesas como o pavê de morango.' },
    { id: 'salgados', nome: 'Salgados', texto: 'Coxinhas, quibes, pastéis, empadinhas e minipizzas para festas e encontros.' },
  ],

  // Páscoa: aberta = true só quando houver campanha confirmada.
  pascoa: { aberta: false },
};
