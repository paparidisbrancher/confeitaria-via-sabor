# Confeitaria Via Sabor — prévia do site

Site estático (HTML, CSS e JS, sem build). Para ver localmente: `python -m http.server` nesta pasta.

- Dados de contato, horário, categorias e Páscoa: `config.js`.
- Fotos: `assets/img/` (WebP 480 e 900 px; a foto do topo também em 1440) e a lista em `assets/fotos.js`.
  As fotos em formato de story vieram dos destaques do Instagram; as seis com nomes como
  `bolo-40-anos-chocolate`, `bolo-dourado`, `bolo-calda-chocolate-frutas`, `bolo-raspas-chocolate-morangos`,
  `bombons-nozes-azul` e `pave-morango` vieram das publicações de agosto de 2024 (baixadas em 01/11/2026).
- Fontes locais: Instrument Serif (títulos) e Figtree (texto), licença OFL em `assets/fonts/`.
- Visual: chocolateria em marrom, creme e dourado, a partir de traços gerais de sites de confeitaria e
  chocolate premiados no Awwwards (TOAK Chocolate, Cuvée Chocolate, Sonoma Bakery, Black Star Pastry,
  Bernice Bakery). Nada foi copiado: textos e fotos são da Via Sabor. Cores pedidas pelo Erick em 01/11/2026.
- Logo: `assets/logo-marrom-320.webp` (topo) e `assets/logo-dourado-320.webp` (rodapé), recoloridos a partir de `assets/logo-800.png`.

## Dados a confirmar com a confeitaria antes de publicar no domínio

| Dado | Situação |
|---|---|
| WhatsApp | `(35) 98402-1792`, confirmado pelo Erick em 01/11/2026 e pela bio do Instagram ("Wpp *Apenas encomendas"). Todos os botões de encomenda abrem o WhatsApp. |
| Horário | Copiado da bio do Instagram em 01/11/2026: seg a sex, 8h30 às 18h; sáb, 8h30 às 17h. Confirmar se mudou. |
| Endereço | A caixa diz **Rua Major João Gonçalves, 181**; uma listagem na internet diz **255**. Confirmar e preencher `endereco`. |
| Telefone fixo | `(35) 3523-2501` aparece na caixa, na listagem e na bio do Instagram; já está no site. |
| "Rosilane" | Nome impresso no logo da caixa. Confirmar se deve aparecer no site. |
| Logo | Extraído da foto da caixa (`assets/logo-800.png`) e recolorido. O perfil do Instagram usa outro logo (“Via Sabor” cursivo com um batedor, fundo grafite), mas só em 150 px. Pedir os arquivos originais em alta para a versão final e decidir qual logo usar. |
| Páscoa | Mostrada como coleção sazonal. Ao abrir uma campanha, mudar `pascoa.aberta` para `true`. |
| Uso das fotos | Algumas mostram nomes de aniversariantes em topos de bolo. Confirmar autorização. |
| Mais fotos | Sem login, o Instagram mostra só as 12 publicações mais recentes (o perfil tem 79). Com acesso logado dá para buscar mais. |
