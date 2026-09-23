# @vihribeiro/ui — Design System Angular

Biblioteca de componentes **Angular** standalone, tipados e acessíveis, com tema
claro/escuro, além de um app de documentação (showcase) que demonstra cada componente.

Projeto de portfólio focado no diferencial "bibliotecas de componentes / design systems".

## Estrutura (workspace Angular)

```
projects/
├── ui/         # a biblioteca publicável (@vihribeiro/ui), build via ng-packagr
│   └── src/lib/
│       ├── styles/theme.css   # design tokens (claro/escuro)
│       ├── button/  badge/  spinner/  avatar/  card/
│       ├── alert/   input/  switch/   modal/   toast/
│       └── public-api.ts      # superfície pública
└── showcase/   # app de documentação que consome a biblioteca
```

## Componentes

| Componente            | Destaques                                                    |
| --------------------- | ------------------------------------------------------------ |
| `ui-button`           | variantes (primary/secondary/ghost/danger), tamanhos, loading |
| `ui-badge`            | 6 tons × 3 variantes (soft/solid/outline)                     |
| `ui-spinner`          | tamanho e espessura configuráveis                            |
| `ui-avatar`           | iniciais automáticas ou imagem                               |
| `ui-card`             | projeção de cabeçalho, corpo e rodapé                        |
| `ui-alert`            | 4 tons, dispensável, ícones                                  |
| `ui-input`            | `ControlValueAccessor`, rótulo/dica/erro, prefixo/sufixo     |
| `ui-switch`           | `ControlValueAccessor`                                       |
| `ui-modal`            | overlay, tamanhos, projeção de rodapé                        |
| `ui-toast`            | `UiToastService` + `UiToastContainer` (auto-dismiss)         |

## Design tokens

Todos os componentes usam variáveis CSS `--ui-*`. O tema escuro é ativado por
`data-theme="dark"` no `<html>` — nenhum componente precisa saber do tema.

```css
@import '@vihribeiro/ui/styles/theme.css';
```

## Como rodar

```bash
npm install

# app de documentação (http://localhost:4200)
npm start

# build da biblioteca
npm run build:lib

# testes
npm run test:lib
npm run test:showcase
```

> Observação: o `tsconfig` mapeia `ui` para o **código-fonte** da biblioteca, então o
> showcase compila sem exigir build prévio. Para consumir como pacote, rode
> `npm run build:lib` e importe de `@vihribeiro/ui`.

## Testes

Vitest, com cobertura de exemplo:

- `UiButton`: renderização, variante e estado de loading.
- `UiBadge`: tom e variante.
- `App` do showcase: bootstrap.

## Autor

**Vinícius Santos Ribeiro** — Desenvolvedor Frontend
[Portfólio](https://viniciusribeiro.dev.br) · [GitHub](https://github.com/vihribeiro)
