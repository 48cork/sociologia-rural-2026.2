# Story: Integrar o Laboratório ao Curso Principal

## Status

**Done**

## Executor Assignment

```yaml
executor: "@dev"
quality_gate: "@qa"
quality_gate_tools:
  - validacao-html
  - verificacao-links-locais
  - navegacao-teclado
  - auditoria-contraste
  - testes-responsivos
```

## Story

**Como** estudante de Sociologia Rural,
**quero** encontrar o Laboratório a partir das principais páginas de entrada do curso,
**para** acessar com facilidade a camada prática complementar sem perder o percurso das aulas.

## Objetivo

Tornar o Laboratório de Sociologia Rural facilmente encontrável a partir da página principal, da apresentação e do índice de aulas, preservando integralmente o conteúdo atual do curso e do protótipo aprovado.

## Escopo autorizado

- `index.html`
- `apresentacao.html`
- `aulas/index.html`
- `docs/stories/integrar-laboratorio-ao-curso.md`

## Exclusões e restrições

- Não modificar nenhuma das 50 páginas de aula.
- Não modificar as páginas do Laboratório já aprovadas.
- Não modificar `assets/css/laboratorio.css`.
- Não modificar arquivos AIOX.
- Não alterar conteúdos teóricos ou avaliações existentes.
- Não adicionar dependências.
- Não fazer commit, push, merge ou publicação sem autorização posterior.

## Requisitos funcionais

1. Em `index.html`, adicionar card ou chamada de destaque para **“Laboratório de Sociologia Rural”**, com a descrição “Investigue situações concretas por meio de observação, problematização, interpretação, verificação e reflexão.”, botão **“Entrar no Laboratório”** e destino `laboratorio/index.html`.
2. O novo acesso em `index.html` deve preservar a identidade visual da home.
3. Em `index.html`, corrigir somente a inconsistência “As 49 Aulas” para “As 50 Aulas”, sem outras reescritas do conteúdo existente.
4. Em `apresentacao.html`, acrescentar seção curta que apresente o Laboratório como camada prática complementar, informe que ele não substitui as aulas, explique o percurso **Observar → Problematizar → Interpretar → Verificar → Refletir** e tenha link para `laboratorio/index.html`.
5. Em `aulas/index.html`, acrescentar próximo ao início uma chamada contextual informando que o primeiro laboratório disponível está relacionado ao **Encontro 10 — Agricultura Familiar**, com link para `../laboratorio/encontro-10-agricultura-familiar.html`, e manter coerente a contagem de **48 aulas regulares + 2 extras = 50 aulas**.

## Requisitos não funcionais

- Links relativos corretos e destinos existentes.
- Layout responsivo, sem largura mínima rígida ou overflow horizontal.
- Foco visível e alvos de link utilizáveis por teclado.
- Contraste mínimo WCAG AA nos pares de cor adicionados.
- Linguagem coerente com o curso e sem duplicação extensa do conteúdo do Laboratório.
- Reutilização dos padrões visuais já existentes em cada página.

## Critérios de aceitação

1. Os três pontos de entrada exibem chamadas claras e funcionais para os destinos definidos.
2. A home contém exatamente o título, a descrição e o rótulo de botão solicitados para o Laboratório.
3. A home exibe “As 50 Aulas” e não contém “As 49 Aulas”.
4. A apresentação afirma que o Laboratório é complementar e não substitui as aulas, além de apresentar as cinco etapas na ordem correta.
5. O índice de aulas relaciona explicitamente o primeiro laboratório disponível ao Encontro 10 — Agricultura Familiar e informa corretamente “2 aulas extras”, em coerência com o total de 50 aulas.
6. Todos os novos links e fragmentos locais resolvem para destinos existentes.
7. As chamadas preservam foco visível, contraste AA e reflow responsivo nos padrões existentes.
8. Nenhuma aula, página do Laboratório, CSS do Laboratório ou arquivo AIOX é modificado.
9. Além da regularização administrativa previamente solicitada na story do protótipo, somente os quatro arquivos autorizados para esta integração aparecem modificados ao final.

## Tasks / Subtasks

- [x] 1. Integrar acesso na home (AC: 1–3, 7)
  - [x] Corrigir “As 49 Aulas” para “As 50 Aulas”.
  - [x] Adicionar card do Laboratório reutilizando o padrão `nav-card`.
- [x] 2. Integrar acesso na apresentação (AC: 1, 4, 7)
  - [x] Adicionar seção complementar curta e link para o índice do Laboratório.
- [x] 3. Integrar acesso no índice de aulas (AC: 1, 5, 7)
  - [x] Adicionar chamada contextual próxima ao início e link para o primeiro laboratório disponível.
- [x] 4. Validar escopo e qualidade (AC: 6–9)
  - [x] Verificar HTML, links e fragmentos locais.
  - [x] Verificar responsividade, foco, contraste e ausência de overflow pelos meios disponíveis.
  - [x] Confirmar as 50 aulas e caminhos protegidos intactos.

## Testing

- Parser local para estrutura HTML, IDs, links relativos e fragmentos.
- Inspeção das regras CSS responsivas e de foco.
- Cálculo de contraste dos novos pares de cor.
- Renderização local nos viewports disponíveis ou inspeção equivalente.
- `git diff --check` e checagem de escopo por caminhos.

## Change Log

| Data | Versão | Descrição | Autor |
| --- | --- | --- | --- |
| 2026-08-21 | 0.1.0 | Story criada a partir dos requisitos aprovados para integração local do Laboratório | River (`@sm`) |
| 2026-08-21 | 0.1.1 | Story validada: escopo fechado, critérios testáveis e restrições explícitas; Status Draft → Ready | Pax (`@po`) |
| 2026-08-21 | 0.2.0 | Integração implementada e verificações locais concluídas; Status Ready → InReview para aprovação humana | Dex (`@dev`) / Uma (`@ux-design-expert`) |
| 2026-08-21 | 0.2.1 | Revisão humana: corrigidas a contagem para duas aulas extras e a denominação “primeiro laboratório disponível” | Dex (`@dev`) |
| 2026-08-21 | 0.3.0 | Revisão humana aprovada nas três páginas; gate final PASS; Status InReview → Done | Quinn (`@qa`) |

## Dev Agent Record

### Agent Model Used

GPT-5 Codex (`@dev` / Dex).

### Debug Log References

- `git diff --check`: PASS.
- Parser HTML (`lxml`): três páginas analisadas sem erro estrutural; `lang` e viewport presentes; IDs sem duplicidade.
- Links e fragmentos: 59 referências locais verificadas, todas válidas.
- Contraste dos novos pares: menor razão 8,02:1, acima de WCAG AA.
- Responsividade e foco: padrões fluidos existentes reutilizados; chamadas sem largura mínima rígida, foco explícito e alvos mínimos de 44 px onde aplicável.
- Navegador executável indisponível no ambiente; revisão dinâmica encaminhada para o servidor local.
- Escopo protegido: 50 aulas, páginas do Laboratório, CSS do Laboratório e arquivos AIOX intactos.

### Completion Notes List

- Adicionado acesso destacado ao Laboratório nos três pontos de entrada autorizados, sem duplicar o conteúdo do protótipo.
- Corrigido exclusivamente o rótulo “As 49 Aulas” para “As 50 Aulas” na home.
- Nenhuma dependência, conteúdo teórico ou avaliação foi alterado.
- Correções editoriais da revisão humana aplicadas no índice: “2 aulas extras” e “primeiro laboratório disponível”, sem alteração visual.

### File List

- `docs/stories/integrar-laboratorio-ao-curso.md` — story e registro de execução.
- `index.html` — card de acesso ao Laboratório e correção do total de aulas.
- `apresentacao.html` — seção sobre a camada prática complementar.
- `aulas/index.html` — chamada contextual para o protótipo do Encontro 10.

## QA Results

### Review Date: 2026-08-21

### Reviewed By: Quinn (Test Architect)

### Human Review Evidence

- Home: card do Laboratório aprovado.
- Apresentação: seção complementar aprovada.
- Índice de aulas: chamada do Laboratório aprovada.
- Correções “50 aulas”, “2 aulas extras” e “primeiro laboratório disponível” aprovadas.

### Final Gate Status

**Gate: PASS** — os critérios de aceitação estão cobertos pelas verificações estruturais, de links, contraste, foco e escopo, complementadas pela aprovação humana dos três pontos de entrada e das correções editoriais. Não há achados bloqueantes ou concerns abertos para esta story.

O gate `PASS` aplica a transição formal **InReview → Done**. Por restrição explícita desta entrega aos cinco arquivos autorizados, o veredito foi registrado nesta seção sem criar artefato separado em `docs/qa/gates/`.
