# Confeitaria Via Sabor — site

No ar em https://confeitariaviasabor.com.br (GitHub Pages, domínio no Registro.br, cliente fechou em novembro de 2026).

Site estático (HTML, CSS e JS, sem build). Para ver localmente: `python -m http.server` nesta pasta.

- Dados de contato, horário, categorias e Páscoa: `config.js`.
- Fotos: `assets/img/` (WebP 480 e 900 px; a foto do topo, `bolo-calda-frutas-capa`, em 480/900/1172 — versão melhorada da foto do Instagram do bolo com calda, morangos e uvas, enviada pelo Erick em 03/11/2026) e a lista em `assets/fotos.js`.
  As fotos em formato de story vieram dos destaques do Instagram; as seis com nomes como
  `bolo-40-anos-chocolate`, `bolo-dourado`, `bolo-raspas-chocolate-morangos`,
  `bombons-nozes-azul` e `pave-morango` vieram das publicações de agosto de 2024 (baixadas em 01/11/2026).
- Fontes locais: Instrument Serif (títulos) e Figtree (texto), licença OFL em `assets/fonts/`.
- Visual: chocolateria em marrom, creme e dourado, a partir de traços gerais de sites de confeitaria e
  chocolate premiados no Awwwards (TOAK Chocolate, Cuvée Chocolate, Sonoma Bakery, Black Star Pastry,
  Bernice Bakery). Nada foi copiado: textos e fotos são da Via Sabor. Cores pedidas pelo Erick em 01/11/2026.
- Torta de frango (`torta-frango`, galeria de Salgados): foto enviada pelo Erick em 20/11/2026, recortada e com a lata de refrigerante do fundo apagada.
- Logo: `assets/logo-marrom-320.webp` (topo) e `assets/logo-dourado-320.webp` (rodapé), recoloridos a partir de `assets/logo-800.png`.

## Dados confirmados e pendências

| Dado | Situação |
|---|---|
| WhatsApp | `(35) 98402-1792`, confirmado pelo Erick em 01/11/2026 e pela bio do Instagram ("Wpp *Apenas encomendas"). Todos os botões de encomenda abrem o WhatsApp. |
| Horário | Do perfil do Google em 03/11/2026: seg a sex, 8h às 18h30; sáb, 8h às 17h30; dom fechado. Confirmado pelo Erick em 14/11/2026 (a bio do Instagram, com 8h30 às 18h, está desatualizada). |
| Endereço | No site: **Rua Major João Gonçalves, 255, Centro, CEP 37940-000**, do perfil da confeitaria no Google (03/11/2026). Nº 255 confirmado pelo Erick em 14/11/2026 (a caixa diz 181). |
| Telefone fixo | `(35) 3523-2501` aparece na caixa, na listagem e na bio do Instagram; já está no site. |
| "Rosilane" | Não vai no site (Erick, 20/11/2026). |
| Logo | Extraído da foto da caixa (`assets/logo-800.png`) e recolorido. O perfil do Instagram usa outro logo (“Via Sabor” cursivo com um batedor, fundo grafite), mas só em 150 px. Pedir os arquivos originais em alta para a versão final e decidir qual logo usar. |
| Prazo de encomenda | Não informado em lugar nenhum. Decisão do Erick (14/11/2026): prazo, mínimo, pagamento e retirada/entrega ficam para a conversa no WhatsApp; o site só diz isso. |
| Retirada ou entrega | Não mencionar no site; a pessoa pergunta no WhatsApp (Erick, 20/11/2026). |
| Telefone fixo funcionando | Atende (Erick, 20/11/2026), mas o foco do site é o WhatsApp. |
| Páscoa | Mostrada como coleção sazonal; faz ovos de colher e tradicionais (Erick, 24/11/2026). Ao abrir uma campanha, mudar `pascoa.aberta` para `true`. |
| Uso das fotos | Autorizado pela confeitaria (Erick, 20/11/2026). |
| 5º docinho | O cardápio dizia só "Docinho"; saiu do site em 24/11/2026 (TODO no `index.html`) até a confeitaria dizer o nome. |
| Foto da caixa (A confeitaria) | A caixa impressa mostra o nº antigo 181; trocar por foto com a caixa nova quando houver. |
| Torta de frango | Única foto de torta: aparece no quadro "Tortas salgadas" e na galeria (filtro Tortas) — exceção à regra de não repetir foto até chegar outra. |
| Mais fotos | Sem login, o Instagram mostra só as 12 publicações mais recentes (o perfil tem 79). Com acesso logado dá para buscar mais. |
