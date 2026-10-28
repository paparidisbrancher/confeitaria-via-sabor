(() => {
  document.documentElement.classList.add('js');
  const S = window.SITE, FOTOS = window.FOTOS;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const igUrl = `https://www.instagram.com/${S.instagram}/`;

  // Menu móvel
  const menuBotao = $('.menu-botao'), menu = $('#menu');
  const fecharMenu = () => { menu.classList.remove('aberto'); menuBotao.setAttribute('aria-expanded', 'false'); };
  menuBotao.addEventListener('click', () => {
    const abrir = !menu.classList.contains('aberto');
    menu.classList.toggle('aberto', abrir);
    menuBotao.setAttribute('aria-expanded', String(abrir));
  });
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) fecharMenu(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('aberto')) { fecharMenu(); menuBotao.focus(); }
  });

  // Contatos a partir da configuração
  $$('[data-instagram]').forEach((a) => { a.href = igUrl; });
  const mostrar = (campo) => { $(`[data-campo="${campo}"]`).hidden = false; };
  if (S.telefone) {
    const a = $('[data-telefone]');
    a.textContent = S.telefone;
    a.href = 'tel:+55' + S.telefone.replace(/\D/g, '');
    mostrar('telefone');
  }
  if (S.whatsapp) {
    $('[data-whatsapp-contato]').href = `https://wa.me/${S.whatsapp}`;
    mostrar('whatsapp');
  }
  if (S.endereco) {
    $('[data-endereco]').textContent = `${S.endereco}, ${S.cidade} (${S.estado})`;
    $('[data-mapa]').href = 'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent(`${S.nome}, ${S.endereco}, ${S.cidade} - ${S.estado}`);
    mostrar('endereco');
  }
  if (S.horarios) { $('[data-horarios]').textContent = S.horarios; mostrar('horarios'); }
  if (S.pascoa.aberta) $('[data-pascoa]').textContent = 'A coleção desta Páscoa está aberta para consultas.';

  // Fotos
  const imgHtml = (f, sizes, lazy = true) =>
    `<img src="assets/img/${f.id}-${f.w}.webp" srcset="assets/img/${f.id}-480.webp 480w, assets/img/${f.id}-${f.w}.webp ${f.w}w"` +
    ` sizes="${sizes}" width="${f.w}" height="${f.h}" alt="${f.alt}"${lazy ? ' loading="lazy" decoding="async"' : ''}>`;
  const itemHtml = (f, sizes) =>
    `<li><button class="foto-botao" type="button" data-foto="${f.id}" aria-label="Ampliar: ${f.alt}">${imgHtml(f, sizes)}</button></li>`;

  let listaAtual = [];
  const galeria = $('.galeria'), filtros = $('.filtros'), filtroTexto = $('.filtro-texto');
  // "Todos" intercala as categorias: bolo, docinho, salgado, bolo...
  const porCat = S.categorias.map((c) => FOTOS.filter((f) => f.cat === c.id));
  const produtos = [];
  for (let i = 0; porCat.some((l) => i < l.length); i++) porCat.forEach((l) => l[i] && produtos.push(l[i]));
  const sizesGaleria = '(min-width: 1050px) 25vw, (min-width: 700px) 33vw, 50vw';

  const filtrar = (cat) => {
    const lista = cat === 'todos' ? produtos : produtos.filter((f) => f.cat === cat);
    galeria.innerHTML = lista.map((f) => itemHtml(f, sizesGaleria)).join('');
    galeria.dataset.lista = cat;
    $$('button', filtros).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.cat === cat)));
    const c = S.categorias.find((c) => c.id === cat);
    filtroTexto.textContent = c ? c.texto : `${lista.length} fotos de bolos, docinhos e salgados.`;
  };
  filtros.innerHTML = [{ id: 'todos', nome: 'Todos' }, ...S.categorias]
    .map((c) => `<button type="button" data-cat="${c.id}" aria-pressed="false">${c.nome}</button>`).join('');
  filtros.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) filtrar(b.dataset.cat); });
  filtrar('todos');

  $$('[data-cat]').forEach((ul) => {
    if (ul.tagName !== 'UL') return;
    const sizes = ul.classList.contains('faixa') ? '(min-width: 760px) 280px, 64vw' : '(min-width: 760px) 40vw, 100vw';
    ul.innerHTML = FOTOS.filter((f) => f.cat === ul.dataset.cat).map((f) => itemHtml(f, sizes)).join('');
  });

  // Foto ampliada
  const dlg = $('.ampliar'), dImg = document.createElement('img'), dCap = $('figcaption', dlg), dCont = $('.ampliar-contagem', dlg);
  $('figure', dlg).prepend(dImg);
  let indice = 0, origem = null;
  const exibir = (i) => {
    indice = (i + listaAtual.length) % listaAtual.length;
    const f = listaAtual[indice];
    dImg.src = `assets/img/${f.id}-${f.w}.webp`;
    dImg.width = f.w; dImg.height = f.h; dImg.alt = f.alt;
    dCap.textContent = f.alt;
    dCont.textContent = `${indice + 1} de ${listaAtual.length}`;
  };
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-foto]');
    if (!b) return;
    const ul = b.closest('ul');
    listaAtual = $$('[data-foto]', ul).map((x) => FOTOS.find((f) => f.id === x.dataset.foto));
    origem = b;
    exibir(listaAtual.findIndex((f) => f.id === b.dataset.foto));
    dlg.showModal();
    $('[data-fechar]', dlg).focus();
  });
  $('[data-anterior]', dlg).addEventListener('click', () => exibir(indice - 1));
  $('[data-proxima]', dlg).addEventListener('click', () => exibir(indice + 1));
  $('[data-fechar]', dlg).addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') exibir(indice - 1);
    if (e.key === 'ArrowRight') exibir(indice + 1);
  });
  dlg.addEventListener('close', () => { if (origem && !dlg.dataset.indo) origem.focus(); delete dlg.dataset.indo; });

  // Formulário que prepara a mensagem
  const form = $('.formulario');
  const categoriaDaFoto = { bolos: 'Bolo', docinhos: 'Docinhos e bombons', salgados: 'Salgados', pascoa: 'Ovo de colher', celebracoes: 'Outro' };
  $('[data-referencia]', dlg).addEventListener('click', () => {
    const f = listaAtual[indice];
    form.categoria.value = categoriaDaFoto[f.cat];
    form.referencia.value = f.alt;
    dlg.dataset.indo = '1';
    dlg.close();
    $('#encomenda').scrollIntoView();
    form.ocasiao.focus({ preventScroll: true });
  });

  const dataBR = (v) => v ? v.split('-').reverse().join('/') : '';
  const caixa = $('.mensagem', form), erro = $('.form-erro', form), wa = $('[data-whatsapp]', form);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.categoria.value) { erro.hidden = false; form.categoria.focus(); return; }
    erro.hidden = true;
    const linhas = [
      'Olá! Vi o site da Confeitaria Via Sabor e gostaria de consultar uma encomenda.',
      `Categoria: ${form.categoria.value}`,
      form.ocasiao.value.trim() && `Ocasião: ${form.ocasiao.value.trim()}`,
      form.data.value && `Data desejada: ${dataBR(form.data.value)}`,
      form.quantidade.value.trim() && `Quantidade aproximada: ${form.quantidade.value.trim()}`,
      form.referencia.value.trim() && `Referência: ${form.referencia.value.trim()}`,
      'Quais são as opções, a disponibilidade e o valor?',
    ].filter(Boolean);
    const texto = linhas.join('\n');
    form.mensagem.value = texto;
    if (S.whatsapp) {
      wa.href = `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(texto)}`;
      wa.hidden = false;
    }
    caixa.hidden = false;
    $('.copiado', form).textContent = '';
    form.mensagem.focus();
  });
  form.categoria.addEventListener('change', () => { if (form.categoria.value) erro.hidden = true; });

  $('[data-copiar]', form).addEventListener('click', async () => {
    const aviso = $('.copiado', form);
    try {
      await navigator.clipboard.writeText(form.mensagem.value);
      aviso.textContent = 'Mensagem copiada. Agora é só colar na conversa.';
    } catch {
      form.mensagem.select();
      aviso.textContent = 'Não foi possível copiar sozinho. O texto está selecionado: copie manualmente.';
    }
  });
})();
