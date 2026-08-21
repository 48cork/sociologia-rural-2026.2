# Story: Protótipo do Laboratório de Sociologia Rural

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
  - revisao-impressao
  - revisao-pedagogica-etica-ia
```

## Story

**Como** estudante do curso de História que cursa Sociologia Rural,
**quero** acessar um Laboratório e realizar um percurso investigativo guiado sobre a circulação da produção da agricultura familiar,
**para** transformar observações e fontes verificáveis em uma interpretação sociológica crítica, ética e transparente quanto ao uso de inteligência artificial.

## Objetivo pedagógico

Conduzir estudantes da observação empírica à reflexão metacognitiva por meio do percurso **Observar → Problematizar → Interpretar → Verificar → Refletir**, articulando evidências reais, formulação de problemas, conceitos já mobilizados no curso, contrapontos e transparência sobre o uso ou não uso de IA.

O protótipo complementa, sem substituir nem modificar, o percurso do Encontro 10 sobre agricultura familiar, pesquisa de campo e diário de campo. [Fonte: `Plano_Aulas_Sociologia_Rural_2026.2.md#10-agricultura-familiar-semana-livre`; `Roteiro_Pesquisa_Campo_e_Seminario_Sociologia_Rural.md#semana-livre-1--encontro-10-1011-agricultura-familiar`]

## Perfil dos estudantes

- Estudantes de graduação em História matriculados em Sociologia Rural. [Fonte: `Plano_Aulas_Sociologia_Rural_2026.2.md#sociologia-rural--curso-de-história--20262`]
- Estudantes que já tiveram contato, ao longo do curso, com formação histórica do rural, questão agrária, campesinato, modernização da agricultura e conceitos de Marx, Weber, Durkheim e Bourdieu. [Fonte: `Plano_Aulas_Sociologia_Rural_2026.2.md`]
- Atividade compatível com os grupos de 4–5 estudantes previstos no roteiro de pesquisa, sem impedir leitura e execução individual do material. [Fonte: `roteiro-pesquisa-campo.html`, seção de apresentação da proposta]
- Público com diferentes condições de acesso territorial, tecnológico e de contato com participantes; por isso, o laboratório deve oferecer alternativa completa à entrevista presencial.

## Escopo

Criar somente:

1. `laboratorio/index.html` — índice do Laboratório;
2. `laboratorio/encontro-10-agricultura-familiar.html` — primeiro laboratório disponível;
3. `assets/css/laboratorio.css` — folha de estilos compartilhada pelas duas páginas.

O índice deve:

- explicar o percurso **Observar → Problematizar → Interpretar → Verificar → Refletir**;
- apresentar o Encontro 10 como primeiro laboratório disponível;
- informar explicitamente que os demais laboratórios ainda serão desenvolvidos;
- oferecer navegação clara de retorno ao curso;
- funcionar em celular e computador.

O Encontro 10 deve usar exatamente o título **“Da feira ao dado: como circula a produção da agricultura familiar?”** e conter:

- produto esperado como “Dossiê breve do circuito observado”, organizado em ficha de observação ou fontes, mapa simples do circuito e interpretação sociológica de uma página;
- conceitos mobilizados e aulas relacionadas;
- tempo estimado, dificuldade e modalidade;
- materiais e fontes necessários;
- alternativa para estudantes que não possam realizar entrevista presencial;
- cinco etapas: Observar, Problematizar, Interpretar, Verificar e Refletir;
- caixas textualmente identificadas como “Evidência necessária” e “Cuidado ético”;
- prompts opcionais dentro de elementos HTML `details`;
- proibição explícita de inserir dados pessoais e de solicitar entrevistas, fontes, citações ou dados inventados;
- modelos de declaração de transparência com IA e sem IA;
- rubrica com os pesos definidos nos critérios de aceitação;
- checklist final;
- navegação para o índice do Laboratório, as aulas relacionadas e o curso principal.

## Exclusões e restrições

- Não modificar nenhuma das 50 páginas de aula.
- Não modificar `index.html`, `apresentacao.html`, `aulas/index.html` ou `manual-boas-praticas.html` nesta story.
- Não modificar arquivos do framework AIOX.
- Não adicionar dependências externas, bibliotecas, fontes, serviços ou scripts de terceiros.
- Não fazer push, merge, publicação ou commit sem nova autorização.
- Não coletar nem apresentar informações pessoais reais de estudantes ou participantes.
- Não inventar citações, dados, entrevistas, depoimentos ou referências.
- Não substituir a análise do estudante por respostas geradas por IA, nem apresentar IA como fonte factual.
- Preservar integralmente as páginas e os fluxos atuais do site; a descoberta do Laboratório a partir das páginas existentes fica fora deste protótipo porque os arquivos de entrada estão excluídos do escopo.

## Critérios de aceitação

1. Os três arquivos previstos no escopo existem, e nenhum outro arquivo de produto ou framework é criado ou modificado pela implementação.
2. `laboratorio/index.html` explica, em linguagem estudantil, as cinco fases na ordem Observar → Problematizar → Interpretar → Verificar → Refletir, identifica o Encontro 10 como disponível e informa que os demais laboratórios serão desenvolvidos posteriormente.
3. O índice inclui links locais funcionais para o Encontro 10 e para o curso principal (`../index.html`).
4. `laboratorio/encontro-10-agricultura-familiar.html` usa exatamente o título “Da feira ao dado: como circula a produção da agricultura familiar?”.
5. O Encontro 10 explicita como produto esperado o “Dossiê breve do circuito observado”, organizado em ficha de observação ou fontes, mapa simples do circuito sem agentes ou relações inventadas e interpretação sociológica de uma página; também explicita conceitos mobilizados, aulas relacionadas, tempo estimado de 2 a 3 horas, dificuldade, modalidade, materiais e fontes necessários.
6. O Encontro 10 apresenta as cinco etapas na ordem definida, com instruções acionáveis e distinção textual — não apenas cromática — entre “Evidência necessária” e “Cuidado ético”.
7. Existe alternativa que permita concluir o percurso sem entrevista presencial, usando entrevista por telefone/vídeo ou análise de materiais públicos e verificáveis; a alternativa não exige inventar uma pessoa, fala ou situação. [Fonte pedagógica para entrevista remota: `Roteiro_Pesquisa_Campo_e_Seminario_Sociologia_Rural.md#semana-livre-1--encontro-10-1011-agricultura-familiar`]
8. Todos os prompts de IA são opcionais, ficam dentro de elementos `details` e são acompanhados por instrução para anonimizar/remover dados pessoais e conferir a resposta contra as fontes reais.
9. A página proíbe explicitamente inserir dados pessoais em ferramentas de IA e pedir que a IA invente entrevistas, participantes, fontes, citações ou dados; também orienta a registrar limitações em vez de preencher lacunas. [Fonte pedagógica: `aulas/encontro-10-aula-02.html`, caixa “Atenção”]
10. A página fornece duas declarações copiáveis/adaptáveis: uma para trabalho com uso de IA, informando ferramenta/finalidade/verificação/alterações, e outra para trabalho sem uso de IA.
11. A rubrica soma 100% e usa exatamente: **25% evidências; 20% formulação do problema; 25% conceitos; 20% verificação e contrapontos; 10% reflexão e transparência sobre IA**.
12. O checklist final verifica, no mínimo: presença e origem das evidências; problema formulado; conceitos aplicados; fontes e contrapontos conferidos; consentimento/anonimização; ausência de invenções; declaração de uso ou não uso de IA.
13. A navegação do Encontro 10 contém links locais funcionais para `index.html` do Laboratório, `../aulas/encontro-10-aula-01.html`, `../aulas/encontro-10-aula-02.html`, `../aulas/encontro-10-aula-03.html`, `../aulas/index.html` e `../index.html`.
14. As duas páginas preservam a identidade escura do curso e usam verde ou teal como identidade do Laboratório, sem depender exclusivamente da cor para significado ou estado.
15. A solução usa HTML e CSS locais, sem JavaScript necessário ao conteúdo, sem dependências externas novas e sem alterar o funcionamento atual do site.
16. Os documentos HTML passam por validação estrutural disponível no projeto/ambiente, sem erros; todos os links e recursos locais referenciados resolvem para arquivos existentes.
17. Em 320, 375, 768 e 1440 px, não há rolagem horizontal nem conteúdo cortado; o padding lateral mantém o conteúdo legível em 320 px e o layout aproveita telas maiores sem linhas excessivamente longas.
18. Toda interação por teclado tem ordem lógica, foco visível e alvo mínimo de 44 × 44 px; cada página contém link “Pular para o conteúdo”, `nav` com nome acessível e um único `main` identificável.
19. Texto, controles e estados de foco atendem contraste WCAG AA; informação, disponibilidade, alertas e categorias continuam compreensíveis sem cor.
20. O conteúdo permanece utilizável com zoom do navegador, respeita `prefers-reduced-motion` e não usa bloqueios de zoom no `meta viewport`.
21. A impressão é legível: fundo claro, texto escuro, links compreensíveis, elementos essenciais presentes e elementos puramente navegacionais/visuais tratados sem desperdiçar papel.
22. A revisão final confirma coerência com o Encontro 10 existente, cuidado ético, alternativas de acesso e transparência de IA, sem alegações factuais, entrevistas, referências ou citações inventadas.

## Requisitos de acessibilidade

- HTML semântico em português do Brasil, hierarquia coerente de títulos e landmarks `header`, `nav`, `main` e `footer` quando aplicáveis.
- Um link “Pular para o conteúdo” como primeiro controle focável de cada página.
- Nome acessível para cada navegação e texto de link compreensível fora de contexto.
- Elementos interativos nativos (`a`, `details`/`summary`) acessíveis por teclado, com área mínima de 44 × 44 px.
- `:focus-visible` de alto contraste, sem remoção de outline sem substituto equivalente.
- Contraste mínimo WCAG AA: 4,5:1 para texto normal e 3:1 para texto grande e componentes/estados essenciais.
- Nenhuma instrução, alerta, etapa ou disponibilidade comunicada somente por cor; usar títulos, rótulos, números e texto.
- Layout compatível com ampliação/zoom e quebra de palavras/URLs longas, sem `user-scalable=no` ou `maximum-scale` restritivo.
- Animação dispensável; transições devem ser removidas ou reduzidas sob `@media (prefers-reduced-motion: reduce)`.
- Conteúdo completo e ordem de leitura coerente sem CSS.

## Política de uso crítico e transparente da IA

1. O uso de IA é opcional e não pode ser condição para concluir o laboratório.
2. IA pode apoiar organização, comparação, revisão de clareza e formulação de perguntas; não substitui observação, evidência, leitura das fontes ou interpretação autoral.
3. Nenhum dado pessoal, identificador, contato, imagem privada ou trecho que permita identificar participantes deve ser inserido em ferramenta de IA.
4. É proibido pedir ou aceitar entrevistas, participantes, falas, fontes, citações, referências ou dados inventados.
5. Toda saída de IA deve ser tratada como sugestão falível e verificada contra materiais reais e identificáveis.
6. O trabalho deve declarar de modo claro se houve IA. Quando houver, deve registrar ferramenta, finalidade, partes apoiadas, verificação e alterações humanas; quando não houver, deve declarar que não houve uso.
7. Limitações, ausência de dados e dúvidas devem ser registradas honestamente, nunca preenchidas por geração automática.
8. Os prompts opcionais devem reforçar essas condições dentro ou imediatamente junto de cada `details`.

## Requisitos de responsividade e apresentação

- Abordagem mobile-first, começando pela largura de 320 px.
- Padding lateral seguro para 320 px, sem reduzir a legibilidade ou encostar texto nas bordas.
- Componentes em uma coluna no celular e expansão progressiva somente quando houver espaço real.
- Largura máxima de leitura para textos longos; tipografia fluida sem unidades que impeçam zoom.
- Grades, navegação, rubrica, metadados e caixas devem quebrar/refluir sem largura mínima causadora de overflow.
- Alvos interativos de pelo menos 44 × 44 px em todos os viewports.
- Estilos de impressão em `@media print`, com fundo claro, texto escuro e URLs ou destinos distinguíveis quando necessário.
- Estilos para `prefers-reduced-motion: reduce`.
- Nenhum overflow horizontal em 320, 375, 768 ou 1440 px.

## Tasks / Subtasks

- [x] 1. Verificar o baseline e preservar o escopo (AC: 1, 15, 22)
  - [x] Confirmar branch `feat/laboratorio-sociologia-rural` antes de editar.
  - [x] Registrar `git status --short` inicial e não tocar em alterações preexistentes.
  - [x] Confirmar que os arquivos excluídos e as 50 páginas de aula permanecem inalterados.
- [x] 2. Criar o índice do Laboratório (AC: 2, 3, 14, 15)
  - [x] Criar `laboratorio/index.html` com skip link, navegação nomeada, `main`, percurso em cinco fases, cartão disponível do Encontro 10 e aviso textual sobre futuros laboratórios.
  - [x] Incluir retorno ao curso principal.
- [x] 3. Criar o protótipo do Encontro 10 (AC: 4–13, 22)
  - [x] Estruturar os metadados pedagógicos, materiais/fontes e alternativa sem entrevista presencial.
  - [x] Escrever as cinco etapas com evidências, cuidados éticos e prompts opcionais em `details`.
  - [x] Incluir proibições, política de IA, declarações com/sem IA, rubrica e checklist final.
  - [x] Incluir navegação para Laboratório, aulas relacionadas, índice de aulas e curso.
- [x] 4. Implementar o estilo compartilhado (AC: 14, 17–21)
  - [x] Criar `assets/css/laboratorio.css` mobile-first com identidade escura e acentos verde/teal.
  - [x] Implementar foco visível, alvos de 44 × 44 px, contraste AA, quebra de conteúdo e largura de leitura.
  - [x] Implementar `prefers-reduced-motion` e estilos de impressão.
- [ ] 5. Executar testes e revisão (AC: 16–22)
  - [x] Validar HTML das duas páginas.
  - [x] Verificar todos os links e recursos locais.
  - [ ] Testar somente com teclado: skip link, navegações e todos os `details`.
  - [x] Auditar contraste de texto, controles, foco, caixas e estados.
  - [ ] Testar 320, 375, 768 e 1440 px, zoom e ausência de overflow horizontal.
  - [x] Revisar visualização de impressão.
  - [x] Revisar conteúdo pedagógico, ético e transparência de IA.
  - [x] Rodar os quality gates do projeto: `npm run lint`, `npm run typecheck`, `npm test` e `npm run build`; se um script/package não existir, registrar objetivamente como não executável, sem adicionar dependência.
- [ ] 6. Preparar entrega para revisão (AC: 1, 16–22)
  - [x] Atualizar os checkboxes, o Dev Agent Record e a File List desta story.
  - [ ] Mostrar arquivos criados, relatório de testes, `git diff --stat` e `git status`.
  - [ ] Não fazer commit, push, merge ou publicação; aguardar revisão do solicitante.

## Dev Notes

### Contexto pedagógico rastreável

- O Encontro 10 existente é a primeira semana livre e trabalha agricultura familiar por meio de leitura guiada, entrevista e diário de campo. [Fonte: `Plano_Aulas_Sociologia_Rural_2026.2.md#10-agricultura-familiar-semana-livre`; `aulas/encontro-10-aula-01.html`; `aulas/encontro-10-aula-02.html`; `aulas/encontro-10-aula-03.html`]
- O roteiro admite entrevista presencial, por telefone ou vídeo. [Fonte: `Roteiro_Pesquisa_Campo_e_Seminario_Sociologia_Rural.md#semana-livre-1--encontro-10-1011-agricultura-familiar`]
- O produto preexistente do Encontro 10 é uma página de diário de campo e três fotos ou prints, quando houver e com autorização. O laboratório pode orientar esse produto, mas não deve inventar evidências ausentes. [Fonte: `Roteiro_Pesquisa_Campo_e_Seminario_Sociologia_Rural.md#semana-livre-1--encontro-10-1011-agricultura-familiar`; `aulas/encontro-10-aula-03.html`]
- Os eixos de observação já definidos são circuito de venda, uso de tecnologia digital e relação com a terra. [Fonte: `aulas/encontro-10-aula-01.html#leitura-guiada`]
- Os cuidados existentes incluem explicar a finalidade acadêmica, pedir autorização antes de gravar/fotografar/identificar, respeitar recusas e anonimato e registrar limitações sem invenção. [Fonte: `aulas/encontro-10-aula-02.html#tarefa`]
- Conceitos sociológicos já mobilizados no percurso incluem Marx, Weber, Durkheim e Bourdieu; o protótipo deve remeter às aulas reais, sem criar referências bibliográficas novas. [Fonte: `Plano_Aulas_Sociologia_Rural_2026.2.md`; `aulas/encontro-10-aula-03.html#registro`]

### Orientação técnica e estrutura

- O site atual é estático e composto por HTML com identidade escura; o protótipo deve usar somente HTML/CSS local e preservar as páginas existentes. [Fonte: `index.html`; `aulas/index.html`]
- Os caminhos de navegação definidos nos critérios são relativos à localização dos dois novos HTMLs.
- `assets/` e `docs/stories/` não existiam no baseline deste worktree e serão criados apenas para os artefatos autorizados.
- Não há orientação de arquitetura de aplicação aplicável no diretório `docs/architecture`; o requisito técnico desta story deriva dos arquivos existentes e das restrições explícitas do solicitante.
- Não há API, modelo de dados, variável de ambiente ou integração externa aplicável.

### Testing

- Validar sintaxe/estrutura HTML com ferramenta já disponível, sem instalar dependência.
- Construir uma verificação determinística de `href`/`src` locais para as duas páginas e confirmar existência de cada destino.
- Navegação por teclado: verificar ordem de tabulação, foco do skip link, links, `summary` de cada prompt, abertura/fechamento e retorno visível do foco.
- Contraste: medir pares reais de foreground/background para texto normal, texto grande, bordas/controles e indicador de foco segundo WCAG AA.
- Responsividade: inspecionar 320, 375, 768 e 1440 px e comparar `scrollWidth <= clientWidth`; testar zoom sem perda de conteúdo.
- Impressão: gerar/inspecionar preview ou PDF e conferir ordem, contraste, quebras e presença do conteúdo essencial.
- Testes pedagógicos/éticos: conferir um a um os AC 4–13 e 22, incluindo a soma da rubrica (100%).
- Quality gates constitucionais: executar `npm run lint`, `npm run typecheck`, `npm test` e `npm run build` se disponíveis; ausência de `package.json`/scripts deve ser registrada como limitação do repositório, não corrigida com nova dependência.

## 🤖 CodeRabbit Integration

### Story Type Analysis

**Primary Type:** Frontend
**Secondary Type(s):** Accessibility, conteúdo pedagógico
**Complexity:** Média — três arquivos estáticos novos, duas páginas, múltiplos requisitos responsivos, éticos e de acessibilidade.

### Specialized Agent Assignment

**Primary Agents:**

- `@dev` — implementação e verificação pré-conclusão;
- `@ux-design-expert` — consistência visual, responsividade e acessibilidade.

**Supporting Agents:**

- `@qa` — testes e parecer de qualidade;
- `@po` — validação da story antes da implementação.

### Quality Gate Tasks

- [ ] Pre-Commit (`@dev`): revisar alterações não commitadas antes de marcar a story como pronta.
- [ ] Pre-Review (`@qa`): validar acessibilidade, responsividade, links, HTML, impressão e conteúdo.
- [ ] Pre-PR (`@devops`): não aplicável nesta execução; push e PR foram proibidos.
- [ ] Pre-Deployment (`@devops`): não aplicável; publicação foi proibida.

### Self-Healing Configuration

**Expected Self-Healing:**

- Primary Agent: `@dev` (light mode)
- Max Iterations: 2
- Timeout: 15 minutos
- Severity Filter: CRITICAL

**Predicted Behavior:**

- CRITICAL: corrigir automaticamente em até duas iterações antes da entrega;
- HIGH: documentar para revisão, sem extrapolar o escopo autorizado;
- MEDIUM/LOW: registrar quando relevante, sem criar requisitos novos.

### CodeRabbit Focus Areas

**Primary Focus:**

- acessibilidade WCAG AA, semântica, teclado e foco;
- responsividade mobile-first e ausência de overflow horizontal;
- preservação estrita do escopo e ausência de dados pessoais/invenções.

**Secondary Focus:**

- caminhos relativos e links locais;
- impressão e `prefers-reduced-motion`;
- nenhuma dependência externa nova.

## Definição de pronto

- [ ] Todos os 22 critérios de aceitação estão demonstravelmente atendidos.
- [ ] Somente os três arquivos de implementação autorizados foram criados/modificados, além desta story.
- [ ] Nenhuma das 50 páginas de aula nem os quatro arquivos de entrada excluídos foi alterada.
- [ ] Nenhum arquivo AIOX foi alterado e nenhuma dependência externa foi adicionada.
- [ ] Validação HTML e links locais passaram.
- [ ] Teclado, foco, contraste WCAG AA, zoom, `prefers-reduced-motion` e landmarks foram verificados.
- [ ] Viewports 320, 375, 768 e 1440 px passaram sem overflow horizontal.
- [ ] Impressão foi verificada como legível.
- [ ] Conteúdo pedagógico, cuidado ético e transparência de IA passaram por revisão.
- [ ] `npm run lint`, `npm run typecheck`, `npm test` e `npm run build` passaram ou foram registrados como indisponíveis por ausência prévia do script/projeto Node.
- [ ] Story atualizada com checklist, resultados, Completion Notes e File List.
- [ ] Relatório final inclui arquivos criados, testes, `git diff --stat` e `git status`.
- [ ] Nenhum commit, push, merge ou publicação foi realizado.

## Story Draft Checklist — validação do Scrum Master

| Categoria | Status | Evidência |
| --- | --- | --- |
| 1. Goal & Context Clarity | PASS | Objetivo, valor pedagógico, perfil, encaixe no Encontro 10, escopo e exclusões explícitos. |
| 2. Technical Implementation Guidance | PASS | Três arquivos, conteúdo obrigatório, navegação, responsividade, acessibilidade e testes definidos; API/dados/env marcados como não aplicáveis. |
| 3. Reference Effectiveness | PASS | Referências locais específicas e contexto crítico resumido na própria story. |
| 4. Self-Containment Assessment | PASS | Requisitos centrais, termos, restrições, alternativas e riscos éticos estão autocontidos. |
| 5. Testing Guidance | PASS | Cenários mensuráveis para HTML, links, teclado, contraste, viewports, overflow, impressão e conteúdo. |
| 6. CodeRabbit Integration | PASS | Tipo, agentes, gates, self-healing e focos registrados; PR/deploy explicitamente não aplicáveis. |

**Resultado:** READY para validação do Product Owner. Clareza: **10/10**. Nenhuma lacuna bloqueante identificada nos requisitos fornecidos; a descoberta do Laboratório a partir da home permanece deliberadamente fora do escopo.

## Change Log

| Data | Versão | Descrição | Autor |
| --- | --- | --- | --- |
| 2026-08-21 | 0.1.0 | Story criada e validada pelo checklist de draft | River (`@sm`) |
| 2026-08-21 | 0.1.1 | Validated GO (9/10) — Status: Draft → Ready; alinhado quality gate de feature ao template | Pax (`@po`) |
| 2026-08-21 | 0.1.2 | Correção constitucional: quality gate restaurado para `@qa`, autoridade exclusiva sobre vereditos de qualidade | Pax (`@po`) |
| 2026-08-21 | 0.2.0 | Protótipo implementado nos três arquivos autorizados; verificações automatizadas locais concluídas e testes visuais encaminhados ao quality gate | Dex (`@dev`) |
| 2026-08-21 | 0.2.1 | Correção de impressão após QA: paleta clara completa e quebra interna das etapas | Dex (`@dev`) |
| 2026-08-21 | 0.2.2 | Impressão estabilizada: propriedades de quebra neutralizadas e grades linearizadas no modo print | Dex (`@dev`) |
| 2026-08-21 | 0.3.0 | Revisão humana: produto reformulado como dossiê em três partes, navegação renomeada e hierarquia visual refinada | Dex (`@dev`) / Uma (`@ux-design-expert`) |
| 2026-08-21 | 0.3.1 | Aprovação humana visual e pedagógica em navegador desktop registrada, mantendo o gate QA em CONCERNS e testes móveis pendentes | Gage (`@devops`) |
| 2026-08-21 | 0.4.0 | Lifecycle regularizado: Ready → InReview após conclusão e registro das evidências finais, sem reordenar ou substituir o histórico de QA | Pax (`@po`) |
| 2026-08-21 | 0.4.1 | Gate final PASS reaplicado sobre todas as evidências; Status: InReview → Done | Quinn (`@qa`) |

## Dev Agent Record

### Agent Model Used

GPT-5 Codex (`@dev` / Dex).

### Debug Log References

- Baseline: branch `feat/laboratorio-sociologia-rural`; `git status --short` inicial continha somente `?? docs/`.
- Instruções: `.claude/CLAUDE.md` e os três `devLoadAlwaysFiles` configurados não existem neste worktree; foram usadas AGENTS.md, Constitution, story e workflow do agente.
- Estrutura/links/conteúdo: scripts Node locais, sem dependências, verificaram referências existentes, landmarks, skip link, ordem/conteúdo do percurso, prompts em `details`, proibições, declarações, rubrica e checklist.
- Contraste: cálculo WCAG automatizado dos pares efetivamente declarados; menor razão medida 8,35:1 para texto de rótulo ético, acima de AA.
- Quality gates: `npm run lint`, `npm run typecheck`, `npm test` e `npm run build` tentados; todos não executáveis por ausência prévia de `package.json` na raiz (ENOENT), conforme previsto na story.
- Ferramentas ausentes no ambiente: navegador automatizável, `tidy`/`xmllint` e CodeRabbit CLI. Teclado, viewports/overflow, zoom e preview de impressão aguardam inspeção dinâmica pelo quality gate; a inspeção estática confirmou semântica nativa, foco visível, alvos mínimos, grades sem largura mínima fixa, quebra de conteúdo, CSS de impressão e redução de movimento.
- Correção QA de impressão: cartões do percurso, avisos, metadados, números e todos os textos receberam paleta clara no modo de impressão; `.step` passou a permitir quebra interna e prompts opcionais foram tratados como navegação dispensável na saída impressa.
- Reteste WeasyPrint: índice gerado com sucesso em 8,9 s, PDF A4 de 2 páginas inspecionado visualmente e legível. O Encontro 10 continuou atingindo timeout em 30 s (exit 124) mesmo sem `break-inside: avoid` nas etapas; não foi gerado PDF completo para inspeção.
- Diagnóstico final de impressão: `overflow-wrap` e `word-break` voltam a `normal` e `break-inside` a `auto` em toda a árvore somente sob `@media print`; links mantêm quebra específica com `overflow-wrap: anywhere`. Grades são linearizadas para evitar colunas comprimidas no WeasyPrint.
- Reteste final WeasyPrint com timeout de 20 s: índice PASS em 6,2 s (2 páginas A4) e Encontro 10 PASS em 6,9 s (8 páginas A4). Página inicial e página intermediária do Encontro, além do índice, foram convertidas em PNG e inspecionadas: texto escuro sobre fundo claro, cartões em largura útil e quebras de página legíveis.
- Rodada de revisão humana 0.3.0: verificações estruturais e de conteúdo PASS; 25 referências e fragmentos locais PASS; 50 aulas e arquivos AIOX inalterados; impressão PASS em A4 (índice com 2 páginas e atividade com 8), com inspeção visual das páginas inicial e intermediária. Gates npm seguem não executáveis por ausência de `package.json` na raiz (ENOENT).

### Completion Notes List

- Criados índice e primeiro percurso do Laboratório sem modificar o site preexistente.
- Implementado o percurso Observar → Problematizar → Interpretar → Verificar → Refletir, alternativa sem entrevista presencial, política ética e transparente de IA, rubrica de 100% e checklist final.
- Implementado CSS local mobile-first, identidade escura teal/verde, foco visível, alvos de 44 px, contraste AA calculado, reflow responsivo, impressão e `prefers-reduced-motion`.
- Nenhuma dependência, JavaScript, dado pessoal, entrevista, citação, fonte ou referência foi adicionado/inventado.
- A impressão das duas páginas foi corrigida, gerada dentro do timeout e confirmada visualmente; as etapas longas quebram entre páginas e as grades refluem em coluna única.
- Revisão humana incorporada: entrega reorganizada como dossiê breve em três partes, rótulo “Laboratório 1 — Agricultura Familiar” e hero/metadados/leitura responsiva refinados sem alterar percurso, ética, política de IA, rubrica ou checklist.
- Story permanece em **Ready** até execução dos demais testes dinâmicos e novo parecer do quality gate `@qa`.

### File List

Criado na preparação da story e atualizado pelo agente de desenvolvimento:

- `docs/stories/laboratorio-sociologia-rural-prototipo.md` — registro da story e execução.

Criados na implementação:

- `laboratorio/index.html` — índice do Laboratório.
- `laboratorio/encontro-10-agricultura-familiar.html` — percurso do Encontro 10.
- `assets/css/laboratorio.css` — estilos compartilhados.

## QA Results

### Review Date: 2026-08-21

### Reviewed By: Quinn (Test Architect)

### Reviewed Revision: `working-tree:94ee3bd0c102859632c228481efbf4a2670f4d8efb17269633a305666def23dc`

### Gate Status

**Gate: FAIL** — o requisito de impressão legível (AC 21) não foi atendido. Não foi criado gate file separado porque esta revisão foi autorizada a editar somente `QA Results`; o Status permaneceu **Ready**, pois o fluxo `qa-gate.md` exige **InReview** para aplicar `FAIL → InProgress`.

### Code Quality Assessment

A implementação está bem delimitada aos três arquivos de produto autorizados, usa HTML/CSS local, apresenta boa semântica estática, conteúdo pedagógico rastreável e política de IA clara. Estrutura, links locais, conteýo obrigatório, ordem das etapas, rubrica e pares de contraste declarados passaram nas verificações locais. A folha de impressão, porém, possui dois defeitos bloqueantes.

### Findings acionáveis

1. **[HIGH][REQ-021] A impressão do Encontro 10 não conclui.** `weasyprint` foi encerrado por timeout após 15 s (`exit 124`). A regra de impressão aplica `break-inside: avoid` a `.step`, embora cada etapa possa ultrapassar uma página. Remover essa restrição de `.step` no modo de impressão ou permitir quebra interna controlada e repetir a geração/inspeção do documento completo. Referência: `assets/css/laboratorio.css`, regra `@media print`.
2. **[HIGH][A11Y-PRINT-001] O índice fica parcialmente ilegível na impressão.** O PDF foi gerado em 2 páginas, mas os itens `.path-grid li` mantêm fundo escuro enquanto os `h3` são forçados para preto; textos secundários também permanecem claros. Incluir os cartões do percurso/avisos na normalização de fundo e forçar seus textos para cor escura no `@media print`. Evidência visual: primeiro PDF renderizado localmente.
3. **[MEDIUM][GOV-001] Metadado de agente diverge da Constitution.** A story declara `quality_gate: "@architect"`, enquanto o Artigo II reserva vereditos de qualidade a `@qa`. Corrigir em refinamento por agente autorizado; a presente revisão foi executada por `@qa`.

### Requirements Traceability

- **AC 1–15 e 22:** cobertura estática PASS — arquivos/escopo, percurso, conteýo obrigatório, alternativas, ética, prompts opcionais, declarações, rubrica (100%), checklist e navegação foram inspecionados.
- **AC 16:** PARTIAL — estrutura e destinos locais passaram em parser determinístico; não havia `tidy`, `xmllint`, `html5validator` ou navegador para validação HTML5 completa.
- **AC 17–20:** PARTIAL — CSS possui reflow mobile-first, quebra de conteýo, foco visível, alvos declarados de 44 px, landmarks, contraste AA calculado e `prefers-reduced-motion`; viewports, zoom, overflow computado e teclado real não puderam ser executados sem navegador.
- **AC 21:** FAIL — timeout no Encontro 10 e contraste de impressão inadequado no índice.

### NFR Assessment

- **Security/privacidade: PASS** — sem scripts, integrações, formulários ou segredos; proibição explícita de dados pessoais e invenções.
- **Performance: CONCERNS** — páginas web são estáticas, mas a renderização de impressão do Encontro 10 não termina no limite testado.
- **Reliability: FAIL** — saída de impressão obrigatória não é produzida de forma confiável.
- **Maintainability: CONCERNS** — CSS organizado e sem dependências, mas não há harness automatizado do protótipo e os quality gates Node estão indisponíveis na raiz.
- **Usability/acessibilidade: FAIL** — contraste insuficiente na saída impressa do índice; testes dinâmicos permanecem pendentes.

### Test Evidence

- Branch: `feat/laboratorio-sociologia-rural` — PASS.
- Estrutura/landmarks/skip link/meta viewport/ausência de recursos externos — PASS por script Node local.
- Links e fragmentos locais — PASS para as duas páginas.
- Conteýo pedagógico, ético e transparência de IA — PASS por revisão requisito a requisito.
- Contraste dos pares CSS declarados — PASS nos pares auditados; menor relação calculada 8,35:1.
- Impressão do índice — FAIL visual: PDF de 2 páginas com cartões escuros e títulos pretos.
- Impressão do Encontro 10 — FAIL: `timeout 15s weasyprint ...`, exit 124.
- `npm run lint`, `npm run typecheck`, `npm test`, `npm run build` — NÃO EXECUTÁVEIS: raiz sem `package.json` (todos exit 254/ENOENT), sem instalar dependências.
- CodeRabbit — NÃO EXECUTÁVEL: CLI ausente; nenhum acesso de rede foi usado.
- Teclado real, viewports 320/375/768/1440, zoom e `scrollWidth <= clientWidth` — NÃO EXECUTADOS: nenhum navegador executável disponível.

### Refactoring Performed / Files Modified During Review

Nenhum arquivo de produto foi alterado. Somente esta seção `QA Results` foi atualizada, conforme a autoridade e a restrição da revisão.

### Recommended Handoff

`@dev`: corrigir os dois defeitos de impressão e solicitar nova revisão `@qa`; depois executar em navegador os cenários dinâmicos pendentes antes de considerar o protótipo pronto.

---

### Re-review Date: 2026-08-21

### Reviewed By: Quinn (Test Architect)

### Reviewed Revision: `working-tree:47d3188842278a4ddce7629f7d233d0461e0ccf4d189ab35e2778d69ea1f598d`

### Re-review Gate Status

**Gate: CONCERNS** — os bloqueantes de impressão e a divergência de autoridade foram corrigidos. Permanecem sem evidência dinâmica os testes em navegador real de teclado, zoom, viewports e overflow; por isso esses requisitos não são marcados como aprovados.

O Status permaneceu **Ready** e o Change Log não recebeu transição de QA: o pre-check mandatório de `qa-gate.md` exige Status **InReview** para aplicar `CONCERNS: InReview → Done`. Aplicar a transição partindo de **Ready** violaria o workflow.

### Resolution of Previous Findings

- **[RESOLVED][REQ-021] Impressão do Encontro 10:** PASS. `timeout 20s weasyprint laboratorio/encontro-10-agricultura-familiar.html ...` concluiu com exit 0 em **7,22 s**, gerando PDF A4 completo de **8 páginas**. O CSS de impressão neutraliza `break-inside` na árvore e permite quebra interna das etapas.
- **[RESOLVED][A11Y-PRINT-001] Contraste do índice impresso:** PASS. O índice concluiu com exit 0 em **6,31 s**, gerando PDF A4 de **2 páginas**. Inspeção visual confirmou fundo claro, texto escuro e cartões legíveis.
- **[RESOLVED][GOV-001] Autoridade do quality gate:** PASS. A story agora declara `quality_gate: "@qa"`, em conformidade com o Artigo II da Constitution.

### Re-review Evidence

- PDFs: PASS para geração completa, tamanho A4 e limite individual de 20 s.
- Conteýo extraído do PDF do Encontro 10: PASS para título, evidências, cuidados éticos, transparência, rubrica e checklist.
- Inspeção visual: PASS no índice e em página intermediária do Encontro 10; texto escuro sobre fundo claro, caixas dentro da largura útil e quebra legível.
- Warnings do WeasyPrint sobre media queries de tela e `clamp()`: não bloquearam o `@media print`, a geração nem a legibilidade observada.
- Teclado real, foco durante interação, viewports 320/375/768/1440, zoom e medição de overflow: **NÃO EXECUTADOS**, pois nenhum navegador executável está disponível neste ambiente.
- Nenhum arquivo de produto foi alterado nesta re-review; somente este novo registro em `QA Results` foi acrescentado.

### Remaining Concern

- **[MEDIUM][TEST-DYN-001] Evidência dinâmica de acessibilidade e responsividade ausente.** Executar em navegador real a navegação somente por teclado, skip link, abertura/fechamento de todos os `details`, foco visível, zoom, viewports 320/375/768/1440 e `scrollWidth <= clientWidth`. Responsável sugerido: `dev` com nova confirmação por `qa`.

### Recommended Handoff After Re-review

Manter para revisão humana/dinâmica. Após a story entrar formalmente em **InReview** e a evidência de navegador ser disponibilizada, `@qa` deve reaplicar o gate e executar a transição de lifecycle correspondente.

---

### Human Desktop Review Record: 2026-08-21

O protótipo recebeu **aprovação humana visual e pedagógica em navegador desktop** após os refinamentos de conteúdo, hierarquia visual e navegação.

Este registro **não altera o gate QA `CONCERNS` para `PASS`**. Continuam pendentes os testes dinâmicos completos em navegador móvel, incluindo navegação por teclado, foco durante interação, abertura e fechamento dos elementos `details`, zoom, reflow e medição de overflow nos viewports móveis previstos. O parecer final de qualidade permanece reservado a `@qa`.

---

### Mobile Human Re-review Date: 2026-08-21

### Reviewed By: Quinn (Test Architect), com evidência de revisão humana

### Mobile Human Evidence

- Índice testado dinamicamente no Chrome em **375 × 812**.
- Atividade testada dinamicamente no Chrome em **312 × 812**, largura mais restritiva que os 320 px planejados.
- Não foi observada rolagem horizontal.
- Os títulos não foram cortados.
- Os cartões foram empilhados corretamente.
- A navegação foi reorganizada adequadamente.
- Os links permaneceram utilizáveis.
- A requisição de `favicon.ico` retornou **404**; classificada como não bloqueante, pois não compromete conteúdo, navegação, acessibilidade ou execução do protótipo.

### Reapplied QA Gate Verdict

**Gate: CONCERNS** — as evidências humanas dinâmicas resolvem a preocupação anterior sobre reflow, overflow, empilhamento, títulos e usabilidade visual dos links em viewport móvel, inclusive abaixo da largura mínima planejada. Permanecem sem evidência dinâmica completa a navegação somente por teclado, o foco durante a interação, a abertura e o fechamento de todos os elementos `details` e o comportamento com zoom; por isso o resultado não é promovido artificialmente a `PASS`.

O Status permanece **Ready**: o workflow de gate exige a transição canônica a partir de **InReview**, condição que não está presente. Nenhuma transição de lifecycle ou alteração no Change Log foi aplicada por QA.

### Remaining Concern After Mobile Re-review

- **[MEDIUM][TEST-DYN-002] Evidência dinâmica de interação assistiva ainda parcial.** Validar em navegador a navegação somente por teclado, skip link, foco visível durante todo o percurso, abertura/fechamento dos elementos `details` e zoom/reflow ampliado. A ausência dessa evidência não invalida a aprovação humana visual e pedagógica já registrada, mas mantém o gate em `CONCERNS`.

---

### Final Dynamic Human Review Date: 2026-08-21

### Reviewed By: Quinn (Test Architect), com evidência de revisão humana

### Final Dynamic Evidence

- Foco visível: **PASS**.
- Link “Pular para o conteúdo” acionado por Enter: **PASS**.
- Navegação por teclado: **PASS**.
- Prompts em elementos `details` abertos pelo mouse e por Enter: **PASS**.
- Zoom de 200% sem sobreposição ou desorganização: **PASS**.
- Índice móvel no Chrome em 375 × 812: **PASS**.
- Atividade móvel no Chrome em 312 × 812: **PASS**.
- Ausência de overflow horizontal: **PASS**.

### Final QA Gate Verdict

**Gate: PASS** — o conjunto de evidências automatizadas, estáticas e humanas cobre conteúdo e estrutura, links e fragmentos locais, contraste, impressão, responsividade, overflow, zoom, foco, teclado, skip link e interação com os prompts em `details`. O concern `TEST-DYN-002` está resolvido; não permanecem achados bloqueantes ou concerns de qualidade abertos para o escopo desta story. O `favicon.ico` 404 continua classificado como não bloqueante.

O Status permanece **Ready** porque o workflow `qa-gate.md` exige a transição canônica `InReview → Done`, e a story não está em **InReview**. O veredito técnico final é `PASS`, sem forçar uma transição de lifecycle incompatível.

### Lifecycle Closure Record: 2026-08-21

Após o registro do `PASS` técnico, Pax (`@po`) aplicou formalmente **Ready → InReview**; em seguida, Quinn (`@qa`) reaplicou o gate final sobre o conjunto completo de evidências e aplicou **InReview → Done**. Os registros anteriores permanecem como evidência do estado existente em cada revisão e não foram reescritos retroativamente.

**Gate final reaplicado: PASS · Status final: Done.**
