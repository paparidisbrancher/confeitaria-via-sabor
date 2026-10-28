// Configuração central do site. Só coloque aqui dados confirmados.
// Campos com null ficam fora do site até serem preenchidos.
window.SITE = {
  nome: 'Confeitaria Via Sabor',
  cidade: 'Alpinópolis',
  estado: 'MG',
  instagram: 'confeitariaviasaboralp',

  // Telefone fixo impresso na caixa da confeitaria (e repetido em listagem pública).
  telefone: '(35) 3523-2501',

  // WhatsApp: preencher só com o número confirmado pela confeitaria, só dígitos com DDI,
  // ex.: '5535999999999'. Com ele, o formulário passa a abrir o WhatsApp com a mensagem pronta.
  whatsapp: null,

  // Endereço e horários: a caixa diz nº 181 e uma listagem diz nº 255. Confirmar antes de publicar.
  endereco: null, // ex.: 'Rua Major João Gonçalves, 181, Centro'
  horarios: null, // ex.: 'Segunda a sábado, 8h às 18h'

  categorias: [
    { id: 'bolos', nome: 'Bolos', texto: 'Bolos decorados para aniversários, chás e datas especiais, com chantilly, raspas de chocolate, frutas e topos personalizados.' },
    { id: 'docinhos', nome: 'Docinhos e bombons', texto: 'Brigadeiros, bombons e docinhos em forminhas, prontos para a mesa da festa.' },
    { id: 'salgados', nome: 'Salgados', texto: 'Coxinhas, quibes, pastéis, empadinhas e minipizzas para festas e encontros.' },
  ],

  // Páscoa: aberta = true só quando houver campanha confirmada.
  pascoa: { aberta: false },
};
