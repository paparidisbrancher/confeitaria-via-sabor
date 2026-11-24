// Configuração central do site. Só coloque aqui dados confirmados.
// Campos com null ficam fora do site até serem preenchidos.
window.SITE = {
  nome: 'Confeitaria Via Sabor',
  cidade: 'Alpinópolis',
  estado: 'MG',
  instagram: 'confeitariaviasaboralp',

  // Telefone fixo: caixa da confeitaria e perfil do Google (03/11/2026).
  telefone: '(35) 3523-2501',

  // WhatsApp (só dígitos, com DDI). Confirmado pelo Erick em 01/11/2026 e pela bio do
  // Instagram ("Wpp *Apenas encomendas"). Todos os botões de encomenda abrem esta conversa;
  // com null, caem no Instagram.
  whatsapp: '5535984021792',

  // Endereço e horário confirmados pelo Erick em 14/11/2026 (a caixa antiga diz nº 181; vale o 255).
  endereco: 'Rua Major João Gonçalves, 255, Centro',
  horarios: 'Seg a sex, 8h às 18h30 · Sáb, 8h às 17h30 · Dom, fechado',

  categorias: [
    { id: 'bolos', nome: 'Bolos', texto: 'Bolos decorados para aniversários, chás e datas especiais, com chantilly, raspas de chocolate, frutas e topos personalizados.' },
    { id: 'docinhos', nome: 'Doces e bombons', texto: 'Brigadeiros, bombons, docinhos em forminhas e sobremesas como o pavê de morango.' },
    { id: 'salgados', nome: 'Salgados', texto: 'Coxinhas, quibes, pastéis, empadinhas e minipizzas para festas e encontros.' },
    { id: 'tortas', nome: 'Tortas', texto: 'Torta de frango, a mais conhecida da Via Sabor, e outras tortas salgadas sob encomenda.' },
  ],

  // Páscoa: aberta = true só quando houver campanha confirmada.
  pascoa: { aberta: false },
};
