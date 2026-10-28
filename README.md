# Confeitaria Via Sabor — prévia do site

Site estático (HTML, CSS e JS, sem build). Para ver localmente: `python -m http.server` nesta pasta.

- Dados de contato, categorias e Páscoa: `config.js`.
- Fotos: `assets/img/` (WebP 480 e 900 px) e a lista em `assets/fotos.js`.
- Fontes locais: Gloock e Figtree (licença OFL em `assets/fonts/`).

## Dados a confirmar com a confeitaria antes de publicar no domínio

| Dado | Situação |
|---|---|
| WhatsApp | A caixa traz `8402-1792` no formato antigo (sem o 9). Confirmar o número atual e se é WhatsApp. Com ele, preencher `whatsapp` no `config.js`. |
| Endereço | A caixa diz **Rua Major João Gonçalves, 181**; uma listagem na internet diz **255**. Confirmar e preencher `endereco`. |
| Horários | Não encontrados. Preencher `horarios`. |
| Telefone fixo | `(35) 3523-2501` aparece na caixa e na listagem; já está no site. Confirmar se continua ativo. |
| "Rosilane" | Nome impresso no logo da caixa. Confirmar se deve aparecer no site. |
| Logo | Extraído da foto da caixa (`assets/logo-800.png`, fundo transparente). Serve para a prévia; pedir o arquivo original em vetor para a versão final. |
| Páscoa | Mostrada como coleção sazonal. Ao abrir uma campanha, mudar `pascoa.aberta` para `true`. |
| Uso das fotos | Algumas mostram nomes de aniversariantes em topos de bolo. Confirmar autorização. |
