# Portfólio — Eduardo Bielecky

Portfólio pessoal de Eduardo Mota Bielecky da Silva Mello, estudante de Engenharia de Software e desenvolvedor Java.

O visual vem do cupom térmico do sistema de caixa que ele construiu para a Adega do Dino: papel branco-frio, tinta preta e o vermelho da impressão em duas cores. No topo da página, uma demonstração do caixa lança itens e imprime o cupom com subtotal, serviço e total.

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- CSS puro, com um arquivo por componente e tokens em `src/styles/tokens.css`
- Fontes: Schibsted Grotesk para o texto e IBM Plex Mono só no cupom impresso
- API pública do GitHub para mostrar quando cada projeto público foi atualizado
- Três idiomas: português, inglês e chinês

## Como rodar

```bash
bun install        # ou npm install
bun run dev        # servidor em http://localhost:3000
bun run build      # gera a versão de produção em dist/
bun run preview    # serve o build localmente
```

## Estrutura

```
public/img/        telas reais dos projetos e a foto de perfil
src/
  components/      seções da página, cada uma com o próprio .css
  context/         contexto de idioma (LanguageProvider)
  data/            dados fixos dos projetos (imagens e links)
  hooks/           useSectionReveal: entrada das seções ao rolar
  i18n/            textos traduzidos, um arquivo por idioma (pt, en, zh)
  services/        acesso à API do GitHub
  styles/          tokens.css (cores, tipo, espaço, movimento) e base.css
  App.jsx          ordem das seções
  main.jsx         ponto de entrada
```

## Regras visuais

- Cinco tamanhos de texto, definidos em `tokens.css`. Não crie um sexto.
- Uma cor de destaque (`--accent`), só no botão principal e no total do cupom.
- Sem sombras, gradientes, bordas finas ou rótulos acima dos títulos. Superfícies se separam por tom.
- A fonte mono aparece só dentro do cupom.
- Toda animação usa transform e opacity e respeita "reduzir movimento".

## Adicionar um projeto

1. Inclua o projeto em `src/data/projects.js` (id, imagem com largura e altura, links).
2. Adicione os textos com o mesmo `id` em `projects.items` de `src/i18n/pt.js`, `en.js` e `zh.js` (`title`, `kind`, `desc`, `stack` e `imageAlt` se houver imagem).
3. Coloque a tela real do projeto em `public/img/`. Sem imagem, o painel mostra o nome em texto.
