# spa-template

Ponto de partida dos sites de uma página da Ebon Labs, no padrão de [croc-croc](https://github.com/Ebon-Labs/croc-croc) e [toque-corpo](https://github.com/Ebon-Labs/toque-corpo).

HTML, um CSS e JavaScript sem framework. O push na branch `main` gera `dist/` e publica na Cloudflare Pages.

Agentes de IA começam por [AGENTS.md](./AGENTS.md): arquitetura, pastas, o que trocar num projeto novo e o deploy.

```bash
npm install
npm run build
npm run preview
```

O preview sobe `dist/` em <http://127.0.0.1:4173>.
