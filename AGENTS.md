# spa-template

Template de site estático de uma página, no padrão dos projetos `croc-croc` e `toque-corpo`. Leia este arquivo antes de criar ou alterar um site desta família. Ao copiar o template para um cliente, mantenha este guia no repositório.

## Papel desta pasta

`spa-template` é o ponto de partida. O site de um cliente nasce como repositório novo `Ebon-Labs/<slug>`, copiado daqui. Não desenvolva o site do cliente dentro desta pasta.

Referências vivas:

- `croc-croc` publica a raiz do repositório, sem build.
- `toque-corpo` gera `dist/` e é o modelo que este template consolida.

## Arquitetura

O site é uma página estática. O navegador recebe HTML, uma folha de CSS e poucos scripts clássicos. Não há `type="module"`, bundler nem framework.

| Peça | Função |
| --- | --- |
| `index.html` | Documento: hierarquia, texto fixo, metadados e JSON-LD. O que o buscador precisa ler sem JavaScript fica aqui. |
| `css/style.css` | Única folha. Tokens em `:root`. Classes no formato `bloco__elemento--modificador`. |
| `js/config.js` | Identidade e contato em `SITE`. |
| `js/main.js` | Menu, revelação no scroll, ano do rodapé e renderização das listas. |
| `scripts/build.js` | Copia a allowlist para `dist/` e acrescenta `?v=<hash>` em CSS e JS. |
| Cloudflare Pages | Serve `dist/`. Push na branch `main` dispara o deploy. |

Texto institucional, hero e perguntas frequentes ficam no HTML. Catálogos repetidos (cardápio, serviços, preços) são arrays em JavaScript e viram HTML no cliente.

Não introduza React, Vue, Vite, Tailwind ou gerador de site, a menos que o pedido mude o padrão de propósito.

## Estrutura de pastas

```
spa-template/
├── AGENTS.md                      # este guia
├── README.md
├── package.json                   # name = slug do projeto
├── package-lock.json
├── .nvmrc                         # 24
├── .gitignore
├── .env.example                   # Wrangler local; não vai para o Git
├── wrangler.toml                  # name = slug; saída = dist
├── .github/workflows/deploy.yml   # push em main → Pages
├── scripts/build.js
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── _headers
├── _redirects
├── css/style.css
├── js/config.js
├── js/main.js
├── assets/                        # imagens e arquivos públicos
└── docs/                          # briefing e PDFs; não é publicado
```

`js/i18n.js` só entra quando o site tem mais de um idioma.

## O que trocar num projeto novo

O HTML e o objeto `SITE` precisam concordar. O crawler lê o HTML; os scripts leem `SITE`.

| Campo | Onde |
| --- | --- |
| Slug | `package.json` (`name`), `wrangler.toml` (`name`), `--project-name` no workflow e no script `deploy` |
| URL pública | canonical, `og:url`, `og:image`, JSON-LD, `robots.txt`, `sitemap.xml`, `SITE.url` |
| Nome, descrição, cidade, telefone | `<title>`, meta description, Open Graph, Twitter, JSON-LD, textos visíveis, `SITE` |
| WhatsApp | dígitos com DDI em `SITE.whatsapp` (`5571…`). Os `https://wa.me/` do HTML usam o mesmo número |
| Cor | tokens em `:root` e `<meta name="theme-color">` |
| Imagens | `assets/`, com `width`, `height` e `alt` |

O slug do repositório GitHub, o nome do projeto na Cloudflare Pages e o `--project-name` são o mesmo valor.

## Interface

Estes comportamentos já estão em `js/main.js` e no CSS. Preserve-os.

- Skip link para `#conteudo`.
- Cabeçalho fixo que ganha a classe `scrolled` ao rolar.
- Menu mobile abre pelo botão, fecha no link e no Escape, e devolve o foco ao botão. `aria-expanded` acompanha o estado. `body.nav-open` trava o scroll.
- Um único `h1`. Cada seção usa `aria-labelledby` no próprio título.
- `.reveal` entra com `IntersectionObserver`. `prefers-reduced-motion` mostra o bloco sem animação.
- CTA principal abre o WhatsApp em nova aba com `rel="noopener noreferrer"`. Links com `data-whatsapp` recebem o número de `SITE` e a mensagem codificada. O `href` no HTML continua válido sem JavaScript.
- Botão flutuante de WhatsApp.
- `#year` recebe o ano corrente.
- Rodapé com o crédito discreto “Site por Ebon Labs” (`mailto:ebonlabs@gmail.com`).
- `:focus-visible` visível.

Listas longas não são escritas item a item no HTML. Um array alimenta um container vazio:

```javascript
const ITEMS = [
  { id: 'exemplo', name: 'Nome', desc: 'Descrição', price: 'R$ 0' },
];
```

`renderCatalog()` preenche `#catalogo-lista`. Escape o texto com `escapeHtml` antes de interpolar. Mensagens de WhatsApp passam por `encodeURIComponent`.

## SEO e acessibilidade

No `<head>`, na língua padrão:

- `title` e `meta description` específicos. Inclua a cidade quando o negócio é local.
- `link rel="canonical"` absoluto, com `https://`.
- Open Graph (`og:title`, `og:description`, `og:url`, `og:image` absoluto, `og:locale`) e Twitter Card.
- `theme-color`, favicon e `robots`.
- JSON-LD schema.org no tipo certo (`LocalBusiness`, `FoodEstablishment`, `HealthAndBeautyBusiness`), com telefone em E.164, endereço e `sameAs` quando houver rede social.
- `robots.txt` aponta o sitemap. `sitemap.xml` lista a URL canônica. Atualize `lastmod` quando o conteúdo mudar.
- `404.html` com `noindex` e CSS em caminho absoluto (`/css/style.css`).

A imagem de compartilhamento fica em `assets/`. Enquanto ela não existir, não invente uma URL de foto.

## Idiomas

Acrescente `js/i18n.js` somente se o pedido incluir outro idioma além de pt-BR. O contrato, como em toque-corpo:

- `translations[lang]` com caminhos em ponto (`nav.services`).
- `data-i18n` para texto, `data-i18n-html` quando o trecho tem marcação, `data-i18n-attr="aria-label:nav.label"` para atributos.
- `initI18n(onChange)` aplica a língua salva em `localStorage` (`<slug>-lang`), atualiza `document.documentElement.lang`, title e description, e chama `onChange` para renderizar as listas de novo.
- `main.js` carrega depois de `i18n.js`. A língua padrão continua completa no HTML.

Inclua `js/i18n.js` no HTML. O build já cobre qualquer arquivo novo dentro de `js/`.

## Deploy automático no push

`.github/workflows/deploy.yml` roda em todo push na branch `main`.

1. Checkout do repositório.
2. Falha na hora se `CLOUDFLARE_API_TOKEN` ou `CLOUDFLARE_ACCOUNT_ID` não estiverem nos secrets.
3. Node na versão de `.nvmrc` (24), com cache do npm.
4. `npm ci`.
5. `npm run build`, que gera `dist/`.
6. `npx wrangler pages deploy dist --project-name=<slug> --branch=main`.

`concurrency.group` é `pages-deploy`, com `cancel-in-progress: true`: um push novo cancela um deploy que ainda esteja rodando. O job pede `contents: read` e `deployments: write`.

O build copia só isto:

`index.html`, `404.html`, `css/`, `js/`, `assets/`, `robots.txt`, `sitemap.xml`, `_headers`, `_redirects`.

Ficam de fora `docs/`, `.github/`, `node_modules/`, `.env` e o resto do repositório. O hash do conteúdo de CSS e JS vira a query `?v=`. `_headers` marca `/css/*`, `/js/*` e `/assets/*` como cache longo e imutável. HTML, sitemap e robots revalidam sempre.

Secrets ficam em GitHub → Settings → Secrets and variables → Actions do repositório. Não grave token em arquivo commitado. `.env` local serve ao Wrangler na máquina e parte de `.env.example`.

Antes do primeiro push, o projeto Pages precisa existir na conta Cloudflare da Ebon Labs, com o mesmo slug. Domínio próprio, se houver, é configurado nesse projeto. Até lá, a URL `https://<slug>.pages.dev` é a canônica. Quando o domínio entrar, atualize canonical, sitemap, robots e Open Graph.

`croc-croc` ainda publica a raiz (`.`) e usa `.assetsignore` para segurar `.git`, `.github` e `docs`. Projetos novos não seguem esse caminho: publicam `dist/`.

## Checklist

1. Copiar esta pasta para o repositório novo. Não copiar `node_modules/` nem `dist/`.
2. Trocar slug, URL, nome, textos, contatos e cor em todos os pontos da tabela.
3. Trocar `ITEMS` pelos dados do cliente. Fotos em `assets/`. Briefing e PDFs em `docs/`.
4. Rodar `npm install` se o lockfile não veio na cópia e, em seguida, `npm run build`.
5. Criar o repositório `Ebon-Labs/<slug>` e o projeto Cloudflare Pages com o mesmo nome.
6. Cadastrar `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID` nos secrets.
7. Push em `main`. O workflow publica `dist/`.

## Fora do padrão

- Não fazer deploy da raiz do repositório.
- Não colocar segredo, `.env` ou documento interno no que o build copia.
- Não servir material de trabalho a partir de `docs/`. Se um arquivo precisa ser público, ele vai para `assets/`.
- Não criar página nova sem incluí-la na allowlist de `scripts/build.js`, no sitemap e na navegação.
- Não remover o menu, o skip link ou o cache-busting para resolver um detalhe visual.
