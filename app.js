(() => {
  document.documentElement.classList.add('js');
  const S = window.SITE, FOTOS = window.FOTOS;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const igUrl = `https://www.instagram.com/${S.instagram}/`;
  const waLink = (msg) => S.whatsapp ? `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(msg)}` : igUrl;

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
    // '5535984021792' vira '(35) 98402-1792'
    $$('[data-wa-numero]').forEach((a) => { a.textContent = S.whatsapp.replace(/^55(\d\d)(\d{4,5})(\d{4})$/, '($1) $2-$3'); });
    mostrar('whatsapp');
  }
  if (S.endereco) {
    $('[data-endereco]').textContent = `${S.endereco}, ${S.cidade} (${S.estado})`;
    $('[data-mapa]').href = 'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent(`${S.nome}, ${S.endereco}, ${S.cidade} - ${S.estado}`);
    mostrar('endereco');
  }
  if (S.horarios) {
    // No cartão de contato, cada dia fica numa linha
    $$('[data-horarios]').forEach((el) => {
      el.textContent = el.closest('.canais') ? S.horarios.replace(' · ', '\n') : S.horarios;
      el.hidden = false;
    });
    mostrar('horarios');
  }
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
    filtroTexto.textContent = c ? c.texto : `${lista.length} fotos de bolos, doces e salgados.`;
  };
  filtros.innerHTML = [{ id: 'todos', nome: 'Todos' }, ...S.categorias]
    .map((c) => `<button type="button" data-cat="${c.id}" aria-pressed="false">${c.nome}</button>`).join('');
  filtros.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) filtrar(b.dataset.cat); });
  filtrar('todos');

  // Quadros de categoria: filtram a galeria e descem até ela
  $$('[data-filtro]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    filtrar(a.dataset.filtro);
    $('#produtos').scrollIntoView();
  }));

  $$('[data-cat]').forEach((ul) => {
    if (ul.tagName !== 'UL') return;
    const sizes = ul.classList.contains('faixa') ? '(min-width: 760px) 260px, 62vw' : '(min-width: 700px) 25vw, 50vw';
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
    $('[data-referencia]', dlg).href = waLink(`Olá! Vi no site da Confeitaria Via Sabor esta foto: "${f.alt}". Gostaria de encomendar algo parecido.`);
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
  dlg.addEventListener('close', () => { if (origem) origem.focus(); });

  // Encomenda: todos os botões [data-whatsapp] abrem a conversa com uma mensagem pronta.
  // Sem número configurado, caem no Instagram.
  $$('[data-whatsapp]').forEach((a) => {
    a.href = waLink(a.dataset.msg || 'Olá! Vi o site da Confeitaria Via Sabor e gostaria de fazer uma encomenda.');
  });

  // Entradas suaves ao rolar (o CSS só esconde os blocos quando isto está ativo)
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((itens) => itens.forEach((it) => {
      if (it.isIntersecting) { it.target.classList.add('visivel'); io.unobserve(it.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    $$('[data-revelar]').forEach((el) => io.observe(el));
    document.documentElement.classList.add('revelar-ok');
  }
})();
