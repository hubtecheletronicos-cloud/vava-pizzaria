/* ==========================================================
   CARDÁPIO DIGITAL: ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR
   - Preço: troque o número em  p: 22   (use ponto: 1.9 = R$ 1,90)
   - Sem preço definido: p: null  (mostra "Consultar valor")
   - Esconder item (acabou): acrescente  off:true  na linha do item
   - Promoções do topo: edite a lista PROMOS
   - Novo item: copie uma linha da LISTA, troque id, nome, preço e descrição
   Depois de salvar, o site atualiza em 1 a 2 minutos.
   ========================================================== */

const LOJA = {
  nome: 'Vavá Pizzaria & Esfiharia',
  slogan: 'Venha prestigiar a melhor esfiharia e pizzaria da região. Ambiente familiar e preços promocionais.',
  nota: '4,3',
  avaliacoes: 283,
  horario: 'Fecha às 23:30',
  entrega: 'Entrega em Guaianases e região',
  endereco: 'Rua Festa Chinesa, 23 · ao lado da Guarda Metropolitana',
  enderecoRetirada: 'Rua Festa Chinesa, 23, Guaianases, São Paulo',
  telefone: '(11) 98690-1623',
  rodape: [
    'Pagamento: Pix, cartão ou dinheiro.',
    'Bebidas alcoólicas somente para maiores de 18 anos.'
  ]
};

/* Faixa amarela do topo (promoções). Apague ou troque as linhas. */
const PROMOS = [
  'Esfiha de carne por R$ 1,00',
  '2 pizzas, ganhe 1 Dolly',
  '10 salgados, ganhe +2 de brinde'
];
const WHATSAPP = '5511986901623';   // DDI + DDD + número
const TAXA_ENTREGA = null;          // ex.: 6 (em reais). null = informar no WhatsApp
/* Preços em reais (ex.: p: 49.9). Valores tirados das fotos do cardápio (2018): confira e atualize. null = "Consultar valor". */
const BORDAS = [
  { id:'catupiry',  nome:'Catupiry',  p:null },
  { id:'cheddar',   nome:'Cheddar',   p:null },
  { id:'chocolate', nome:'Chocolate', p:null }
];
const SECTIONS = [
  { id:'combos',   cat:'combos',   title:'Combos e promoções',   note:'Mais sabor, menos preço' },
  { id:'esfihas',  cat:'esfihas',  title:'Esfihas abertas',      note:'Preço por unidade' },
  { id:'pizzas',   cat:'pizzas',   title:'Pizzas',               note:'8 fatias' },
  { id:'salgados', cat:'salgados', title:'Salgados',             note:'Preço por unidade' },
  { id:'pasteis',  cat:'salgados', title:'Pastéis',              note:'Preço por unidade' },
  { id:'fogazza',  cat:'salgados', title:'Fogazza',              note:'Preço por unidade' },
  { id:'beirutes', cat:'lanches',  title:'Beirutes',             note:'R$ 20,00 cada sabor' },
  { id:'lanches',  cat:'lanches',  title:'Lanches',              note:'Preço por unidade' },
  { id:'porcoes',  cat:'porcoes',  title:'Porções',              note:'' },
  { id:'esf-doce', cat:'doces',    title:'Esfihas doces',        note:'R$ 3,00 cada' },
  { id:'piz-doce', cat:'doces',    title:'Pizzas doces',         note:'8 fatias' },
  { id:'bebidas',  cat:'bebidas',  title:'Bebidas',              note:'Geladas' }
];
const CATS = [
  { id:'todas', nome:'Todas' }, { id:'combos', nome:'Combos' }, { id:'esfihas', nome:'Esfihas' },
  { id:'pizzas', nome:'Pizzas' }, { id:'salgados', nome:'Salgados' }, { id:'lanches', nome:'Lanches' },
  { id:'porcoes', nome:'Porções' }, { id:'doces', nome:'Doces' }, { id:'bebidas', nome:'Bebidas' }
];
/* kind: direct = adiciona na hora | pizza = escolhe borda | obs = campo para escolher sabores */
const LIST = [
  { id:'kit-esfihas', s:'combos', kind:'direct', tag:'Promoção', nome:'Kit Esfihas', p:28,
    desc:'4 de queijo, 4 de carne, 4 de calabresa e 4 de frango com catupiry. Ganhe 1 Dolly.' },
  { id:'kit-especial', s:'combos', kind:'direct', tag:'Promoção', nome:'Kit Especial', p:null,
    desc:'10 de carne, 5 de calabresa e 6 de queijo. Ganhe 1 Dolly.' },
  { id:'combo-familia', s:'combos', kind:'obs', tag:'Promoção', nome:'Combo Família', p:null,
    desc:'1 pizza, 6 esfihas abertas e 1 refrigerante 2L. Perfeito para o almoço de domingo ou a noite do filme.', hint:'Qual sabor de pizza, quais esfihas e qual refrigerante?' },
  { id:'combo-galera', s:'combos', kind:'obs', tag:'Promoção', nome:'Combo Galera', p:null,
    desc:'2 pizzas e 1 Guaraná 2L. Dois sabores diferentes e a turma toda feliz.', hint:'Quais os 2 sabores de pizza?' },
  { id:'trio-esfihas', s:'combos', kind:'obs', tag:'Promoção', nome:'Trio de Esfihas', p:null,
    desc:'10 esfihas de carne, 10 de queijo e refrigerante. Ideal para festinha, reunião ou lanche da tarde.', hint:'Qual refrigerante você prefere?' },

  { id:'e-carne', s:'esfihas', kind:'direct', tag:'Promoção', nome:'Carne', p:1, desc:'Carne moída suculenta e bem temperada. Preço promocional do panfleto.' },
  { id:'e-queijo', s:'esfihas', kind:'direct', nome:'Queijo', p:1.9, desc:'Mussarela derretida, simples e perfeita.' },
  { id:'e-calabresa', s:'esfihas', kind:'direct', nome:'Calabresa', p:1.9, desc:'Calabresa com aquele toque de cebola.' },
  { id:'e-frango', s:'esfihas', kind:'direct', nome:'Frango', p:1.9, desc:'Frango desfiado e temperado.' },
  { id:'e-frango-cat', s:'esfihas', kind:'direct', nome:'Frango c/ Catupiry', p:2, desc:'Frango desfiado com o cremoso Catupiry.' },
  { id:'e-escarola', s:'esfihas', kind:'direct', nome:'Escarola', p:2, desc:'Escarola refogada, leve e saborosa.' },
  { id:'e-bacon', s:'esfihas', kind:'direct', nome:'Bacon', p:2.3, desc:'Bacon crocante em massa leve.' },
  { id:'e-palmito', s:'esfihas', kind:'direct', nome:'Palmito', p:2, desc:'Palmito macio e bem temperado.' },
  { id:'e-xesfiha', s:'esfihas', kind:'direct', nome:'X-Esfiha', p:2.5, desc:'A esfiha mais recheada da casa.' },
  { id:'e-bauru', s:'esfihas', kind:'direct', nome:'Bauru', p:2, desc:'Presunto, tomate e mussarela.' },
  { id:'e-atum', s:'esfihas', kind:'direct', nome:'Atum', p:2.3, desc:'Atum temperado com cebola.' },
  { id:'e-milho', s:'esfihas', kind:'direct', nome:'Milho', p:2, desc:'Milho doce e cremoso.' },

  { id:'p-mussarela', s:'pizzas', kind:'pizza', nome:'Mussarela', p:22, desc:'Mussarelas e azeitonas.' },
  { id:'p-calabresa', s:'pizzas', kind:'pizza', nome:'Calabresa', p:22, desc:'Calabresa fatiada, cebola e azeitonas.' },
  { id:'p-bacon', s:'pizzas', kind:'pizza', nome:'Bacon', p:29, desc:'Mussarela e fatias de bacon.' },
  { id:'p-bauru', s:'pizzas', kind:'pizza', nome:'Bauru', p:27, desc:'Presunto picado, tomate e mussarela.' },
  { id:'p-catupiry', s:'pizzas', kind:'pizza', nome:'Catupiry', p:23, desc:'Catupiry, azeitona e orégano.' },
  { id:'p-catumilho', s:'pizzas', kind:'pizza', nome:'Catumilho', p:27, desc:'Catupiry com milho verde.' },
  { id:'p-frango-cat', s:'pizzas', kind:'pizza', nome:'Frango/Catupiry', p:28, desc:'Peito desfiado e Catupiry.' },
  { id:'p-milho', s:'pizzas', kind:'pizza', nome:'Milho Verde', p:27, desc:'Milho verde e mussarela.' },
  { id:'p-toscana', s:'pizzas', kind:'pizza', nome:'Toscana', p:27, desc:'Calabresa moída, temperada e mussarela.' },
  { id:'p-portuguesa', s:'pizzas', kind:'pizza', nome:'Portuguesa', p:27, desc:'Presunto, ervilha, cebola, ovo e mussarela.' },
  { id:'p-amoda', s:'pizzas', kind:'pizza', nome:'A Moda', p:28, desc:'Mussarela, bacon, tomate e calabresa.' },
  { id:'p-4queijos', s:'pizzas', kind:'pizza', nome:'4 Queijos', p:30, desc:'Catupiry, mussarela, provolone e parmesão.' },
  { id:'p-escarola', s:'pizzas', kind:'pizza', nome:'Escarola', p:28, desc:'Escarola cozida, bacon e mussarela.' },
  { id:'p-calamussa', s:'pizzas', kind:'pizza', nome:'Calamussa', p:27, desc:'Calabresa, cebola e mussarela.' },
  { id:'p-caipira', s:'pizzas', kind:'pizza', nome:'Caipira', p:28, desc:'Frango, mussarela e milho.' },

  { id:'s-coxinha', s:'salgados', kind:'direct', nome:'Coxinha', p:2.5, desc:'Crocante por fora, recheada por dentro.' },
  { id:'s-kibe', s:'salgados', kind:'direct', nome:'Kibe', p:2.5, desc:'Kibe frito, sequinho e saboroso.' },
  { id:'s-esfiha', s:'salgados', kind:'direct', nome:'Esfiha (fechada)', p:2, desc:'Esfiha fechada assada.' },
  { id:'s-pres-queijo', s:'salgados', kind:'direct', nome:'Presunto e Queijo', p:2, desc:'Presunto e queijo derretido.' },
  { id:'s-cal-cat', s:'salgados', kind:'direct', nome:'Calabresa Catupiry', p:2, desc:'Calabresa com Catupiry.' },
  { id:'s-frango-cat', s:'salgados', kind:'direct', nome:'Frango Catupiry', p:2, desc:'Frango desfiado com Catupiry.' },
  { id:'s-bauru', s:'salgados', kind:'direct', nome:'Bauru', p:2, desc:'Presunto, tomate e mussarela.' },
  { id:'s-bolinho', s:'salgados', kind:'direct', nome:'Bolinho de Carne', p:2.5, desc:'Bolinho frito de carne bem temperada.' },
  { id:'s-enroladinho', s:'salgados', kind:'direct', nome:'Enroladinho de Salsicha', p:2, desc:'Salsicha envolvida em massa macia.' },

  { id:'pa-carne', s:'pasteis', kind:'direct', nome:'Pastel de Carne', p:4.5, desc:'Pastel crocante recheado de carne.' },
  { id:'pa-queijo', s:'pasteis', kind:'direct', nome:'Pastel de Queijo', p:4.5, desc:'Queijo derretido.' },
  { id:'pa-frango', s:'pasteis', kind:'direct', nome:'Pastel de Frango Catupiry', p:5, desc:'Frango desfiado com Catupiry.' },
  { id:'pa-calabresa', s:'pasteis', kind:'direct', nome:'Pastel de Calabresa', p:4.5, desc:'Calabresa bem temperada.' },
  { id:'pa-palmito', s:'pasteis', kind:'direct', nome:'Pastel de Palmito', p:4.5, desc:'Palmito macio.' },
  { id:'pa-bauru', s:'pasteis', kind:'direct', nome:'Pastel de Bauru', p:4.5, desc:'Presunto, tomate e mussarela.' },
  { id:'pa-pizza', s:'pasteis', kind:'direct', nome:'Pastel de Pizza', p:5, desc:'Mussarela, tomate e orégano.' },
  { id:'pa-atum', s:'pasteis', kind:'direct', nome:'Pastel de Atum', p:5, desc:'Atum temperado.' },
  { id:'pa-especial', s:'pasteis', kind:'direct', nome:'Pastel Especial', p:8, desc:'O mais recheado da casa.' },

  { id:'f-sabor', s:'fogazza', kind:'obs', nome:'Fogazza', p:3.5, desc:'Sabores: carne, queijo, frango com catupiry ou calabresa.', hint:'Qual sabor?' },
  { id:'f-2sabores', s:'fogazza', kind:'obs', nome:'Fogazza 2 Sabores', p:4, desc:'Escolha dois sabores na mesma fogazza.', hint:'Quais 2 sabores?' },

  { id:'bei-atum', s:'beirutes', kind:'direct', nome:'Beirute de Atum', p:20, desc:'Atum, bacon, ovo, presunto, mussarela, tomate, alface e maionese.' },
  { id:'bei-amoda', s:'beirutes', kind:'direct', nome:'Beirute A Moda', p:20, desc:'Milho, ervilha, hambúrguer, bacon, ovo, presunto, mussarela, alface e maionese.' },
  { id:'bei-calabresa', s:'beirutes', kind:'direct', nome:'Beirute de Calabresa', p:20, desc:'Calabresa, bacon, ovo, mussarela, tomate, alface e maionese.' },
  { id:'bei-frango', s:'beirutes', kind:'direct', nome:'Beirute de Frango/Catupiry', p:20, desc:'Frango com Catupiry, bacon, ovo, mussarela, tomate, alface e maionese.' },

  { id:'l-xsalada', s:'lanches', kind:'direct', nome:'X-Salada', p:6.5, desc:'Pão, hambúrguer, queijo e salada.' },
  { id:'l-xbacon', s:'lanches', kind:'direct', nome:'X-Bacon', p:7, desc:'Hambúrguer, queijo e bacon.' },
  { id:'l-xburguer', s:'lanches', kind:'direct', nome:'X-Burguer', p:6, desc:'Hambúrguer e queijo derretido.' },
  { id:'l-xcalabresa', s:'lanches', kind:'direct', nome:'X-Calabresa', p:6, desc:'Hambúrguer, queijo e calabresa.' },
  { id:'l-xtudo', s:'lanches', kind:'direct', tag:'Mais completo', nome:'X-Tudo', p:10, desc:'O lanche com tudo que tem direito.' },
  { id:'l-americano', s:'lanches', kind:'direct', nome:'Americano', p:6, desc:'Clássico americano.' },
  { id:'l-misto', s:'lanches', kind:'direct', nome:'Misto Quente', p:6.5, desc:'Presunto e queijo na chapa.' },
  { id:'l-bauru', s:'lanches', kind:'direct', nome:'Bauru', p:6, desc:'Presunto, tomate e mussarela no pão.' },

  { id:'po-calabresa', s:'porcoes', kind:'direct', nome:'Porção de Calabresa', p:15, desc:'Calabresa acebolada para dividir.' },
  { id:'po-fritas', s:'porcoes', kind:'direct', nome:'Porção de Fritas', p:15, desc:'Batata frita sequinha.' },
  { id:'po-salame', s:'porcoes', kind:'direct', nome:'Porção de Salame', p:15, desc:'Salame fatiado.' },
  { id:'po-azeitonas', s:'porcoes', kind:'direct', nome:'Porção de Azeitonas', p:8, desc:'Para acompanhar a cerveja.' },
  { id:'po-queijo', s:'porcoes', kind:'direct', nome:'Porção de Queijo', p:12, desc:'Queijo em cubos.' },

  { id:'d-chocolate', s:'esf-doce', kind:'direct', nome:'Esfiha de Chocolate', p:3, desc:'Cremosa e irresistível.' },
  { id:'d-romeu', s:'esf-doce', kind:'direct', nome:'Esfiha Romeu e Julieta', p:3, desc:'Queijo com goiabada.' },
  { id:'d-prestigio', s:'esf-doce', kind:'direct', nome:'Esfiha Prestígio', p:3, desc:'Chocolate com coco, o clássico que todo mundo ama.' },
  { id:'d-doce-leite', s:'esf-doce', kind:'direct', nome:'Esfiha de Doce de Leite', p:3, desc:'Doce de leite cremoso.' },

  { id:'pd-brigadeiro', s:'piz-doce', kind:'pizza', bordas:['chocolate'], nome:'Brigadeiro c/ Granulado', p:null, desc:'Brigadeiro cremoso coberto de granulado.' },
  { id:'pd-mms', s:'piz-doce', kind:'pizza', bordas:['chocolate'], nome:'M&Ms', p:null, desc:'Chocolate derretido com M&Ms coloridos.' },
  { id:'pd-romeu', s:'piz-doce', kind:'pizza', bordas:['chocolate'], nome:'Romeu e Julieta', p:null, desc:'Mussarela derretida com goiabada.' },

  { id:'b-refri2l', s:'bebidas', kind:'obs', nome:'Refrigerante 2 Litros', p:null, desc:'Para dividir na mesa.', hint:'Qual sabor? (Dolly, Coca-Cola, Guaraná etc.)' },
  { id:'b-lata', s:'bebidas', kind:'obs', nome:'Refrigerante Lata 350ml', p:null, desc:'Geladinho, individual.', hint:'Qual sabor?' },
  { id:'b-suco', s:'bebidas', kind:'obs', nome:'Suco', p:null, desc:'Sabores do dia, pergunte pelo WhatsApp.', hint:'Qual sabor?' },
  { id:'b-cerveja-lata', s:'bebidas', kind:'obs', nome:'Cerveja Lata', p:null, desc:'Somente para maiores de 18 anos.', hint:'Qual marca?' },
  { id:'b-longneck', s:'bebidas', kind:'obs', nome:'Cerveja Long Neck', p:null, desc:'Somente para maiores de 18 anos.', hint:'Qual marca?' }
];
