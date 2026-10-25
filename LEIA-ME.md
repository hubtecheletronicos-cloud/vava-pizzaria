# Cardápio digital – Vavá Pizzaria & Esfiharia

Arquivos:
- `index.html`  → a página (não precisa mexer)
- `cardapio.js` → preços, itens, promoções e dados da loja (é aqui que você atualiza)
- `logo.jpg`    → logo exibido no topo

## Como atualizar um preço ou promoção
1. Abra `cardapio.js` aqui no GitHub e clique no lápis (Edit).
2. Troque o número (ex.: `p: 22` vira `p: 24`). Use ponto para centavos: `1.9` = R$ 1,90.
3. Clique em **Commit changes**. Em 1 a 2 minutos o site já está atualizado.

## Esconder um item que acabou
Na linha do item, acrescente `off:true` (ex.: `{ id:'p-bacon', off:true, s:'pizzas', ... }`). Para voltar, apague o `off:true`.

## Para usar com outro cliente
Copie esta pasta, troque `logo.jpg` e edite `LOJA`, `PROMOS`, `SECTIONS` e `LIST` em `cardapio.js`.
