# Portfólio — Eduardo Mota

Portfólio pessoal de Eduardo Mota Bielecky da Silva Mello, estudante de Engenharia de Software e desenvolvedor Java.

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Lenis](https://lenis.darkroom.engineering/) para rolagem suave
- Integração com a API pública do GitHub (atividade dos repositórios)
- Suporte a três idiomas: português, inglês e chinês

## Como rodar

```bash
bun install        # ou npm install
bun run dev        # servidor em http://localhost:3000
bun run build      # gera a versão de produção em dist/
bun run preview    # serve o build localmente
```

## Estrutura

```
public/img/        imagens servidas estaticamente
src/
  components/      seções e componentes da página
  context/         contexto de idioma (LanguageProvider)
  data/            dados fixos dos projetos (links, imagens, categorias)
  hooks/           hooks de scroll e parallax
  i18n/            textos traduzidos, um arquivo por idioma (pt, en, zh)
  services/        acesso à API do GitHub
  App.jsx          composição da página
  main.jsx         ponto de entrada
  style.css        estilos globais
```

## Adicionar um projeto

1. Inclua o projeto em `src/data/projects.js` (id, imagem, links, categorias).
2. Adicione os textos com o mesmo `id` em `projects.items` de `src/i18n/pt.js`, `en.js` e `zh.js`.
3. Coloque a imagem em `public/img/`.
