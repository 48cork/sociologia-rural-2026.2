# Contexto Real do Projeto — Sociologia Rural 2026.2

Curso de Sociologia Rural para a turma de Historia, UFCG/CFP, ministrado por Sergio Farias.

## O que existe aqui

- Plano_Aulas_Sociologia_Rural_2026.2.md: tabela de 16 encontros x 3 aulas (48 aulas + 2 aulas extras: encontro-10 e encontro-15).
- Bibliografia_Sociologia_Rural_2026.2.md: autores e conceitos por bloco.
- aulas/: os 51 arquivos HTML das aulas (48 regulares, 2 aulas extras e o seminario final do Encontro 13), ja gerados e revisados pelo squad (ver relatorio_final.md).
- squad-revisao-aulas/: sistema de revisao pedagogica com 6 agentes (conteudista, revisor-teorico, revisor-fluidez, revisor-pedagogico, revisor-progressao, aprovador) e workflow em 5 passos (ver squad-revisao-aulas/workflows/revisar-aulas.md). A squad-revisao-aulas/data/ guarda a base de conhecimento do squad (decisions.md, frameworks.md, glossario.md, prompts.md).
- laboratorio/: camada pratica complementar as aulas (nao substitui o conteudo teorico), desenvolvida em outra sessao (agente @dev/@ux-design-expert via GPT-5 Codex) e documentada em docs/stories/laboratorio-sociologia-rural-prototipo.md e docs/stories/integrar-laboratorio-ao-curso.md (ambas Done, gate QA final PASS). Percurso investigativo em 5 fases: Observar -> Problematizar -> Interpretar -> Verificar -> Refletir. Por enquanto so o Laboratorio 1 (encontro-10-agricultura-familiar.html, ligado ao Encontro 10) esta disponivel; os demais ainda serao desenvolvidos. Tem politica de uso de IA explicita (proibe invencao de entrevistas/dados/citacoes, exige declaracao de transparencia) e rubrica de avaliacao propria. Pontos de entrada adicionados em index.html, apresentacao.html e aulas/index.html.
- guia-sociologia-rural.html: pagina standalone de acompanhamento semanal do curso (calendario dos 16 encontros com datas reais de 2026.2, checklist de progresso salvo em localStorage do navegador do aluno, destaque automatico do encontro da semana). Commitada direto, sem story nem QA gate associados, fora do processo formal de story-driven development.
- Correcao_Encontro3.md: sequencia de correcao em sala para aplicar com a turma depois do Encontro 3 (material de revisao, nao corrige o conteudo das aulas). Tres atividades que retomam as Perguntas para Discussao das Aulas 1, 2 e 3: reconstruir a cadeia Lei de Terras -> Abolicao -> agregado, a escravidao sertaneja e o trafico interno como memoria seletiva, e a comparacao agregado x pequeno produtor endividado (ponte para o Encontro 9). E o primeiro arquivo desse tipo em todos os cursos, e o formato escolhido foi um arquivo separado na raiz, em vez de uma secao 05 dentro de cada aula. Tambem foi commitado direto, sem story (commit dda90f0).

## Cobertura da ementa

A ementa oficial tem 3 blocos: sociedade rural x urbana, caracterizacao socioeconomica/cultural do Nordeste, e educacao da populacao rural com suas politicas/diretrizes educacionais. O terceiro bloco esta em aulas/encontro-15-aula-extra.html (Freire, Pedagogia da Alternancia, Decreto 7.352/2010), com amarracoes nos Encontros 1, 2, 9, 10 e 14. Qualquer mudanca no Plano de Aulas deve manter os tres blocos cobertos.

## Referencias das aulas (ABNT)

- Regra de citacao: "cita e desenvolve". A secao Referencias de uma aula so inclui a obra, lei ou fonte que a aula cita pelo nome e desenvolve no conteudo. Ficam de fora mencoes de passagem, inclusive retomadas de uma frase so (ex.: Marx em 03-01, 03-03, 05-01 e 08-01, Bourdieu em 05-03), e autores indicados como sugestao de leitura para os projetos de pesquisa dos alunos. Quando a aula aplica em paragrafo proprio um conceito de encontro anterior, a obra daquele encontro e citada de novo.
- 24 das 51 aulas tem a secao Referencias, no formato NBR 6023:2018, numerada como a proxima secao da aula (05 na maioria, 04 em encontro-01-aula-01). Estilo em assets/css/tema.css (.ref-list e .ref-nota).
- 27 aulas ficam sem a secao: as 10 aulas-guia da pesquisa de campo (10-01 a 12-03 e 13-seminario-final) e 17 aulas sem obra nomeada (01-02, 03-01, 04-01, 04-03, 06-03, 07-03, 08-01, 08-02, 09-02, 09-03, 10-extra, 14-03, 15-01, 15-02, 15-03, 16-02, 16-03).
- Bibliografia_Sociologia_Rural_2026.2.md e a fonte das edicoes. Obra nova so entra depois de busca da edicao brasileira mais usada e confirmacao do professor, e cada entrada indica as aulas que a usam. Sobrenomes compostos seguem a mesma forma na mestre e nas aulas (ex.: SILVA, Jose Graziano da; FERNANDES, Bernardo Mancano).
- Em 09-01, a autoria de "modernizacao conservadora" foi corrigida: o conceito e de Barrington Moore Jr., aplicado ao caso agrario brasileiro por Jose Graziano da Silva. A aula atribuia o conceito a Martins por engano.

## Skill relacionada

Existe uma skill global em ~/.claude/skills/fabrica-conhecimento-sociologico/SKILL.md que documenta o processo usado para construir este curso, pensada para ser reaplicada em outras disciplinas (ex: Antropologia Filosofica). Este projeto (sociologia-rural-2026.2) e a referencia viva citada nessa skill.

## Linha de pesquisa do professor

Sergio tem pesquisa propria em comunidades quilombolas e semiarido nordestino. Os encontros 3, 4, 10 (aula extra) e 14 do curso foram desenhados para dialogar diretamente com essa pesquisa.

## Validacao neste projeto

O projeto e HTML/Markdown estatico, sem package.json. Os passos `npm run lint`, `npm run typecheck`, `npm test` e `npm run build` do bloco AIOX abaixo nao se aplicam aqui. A validacao usada nas stories e: parser HTML (lxml) sem erro estrutural, IDs sem duplicidade, links relativos e fragmentos locais resolvendo, e revisao visual no navegador quando disponivel.

# Synkra AIOX Development Rules for Claude Code

You are working with Synkra AIOX, an AI-Orchestrated System for Full Stack Development.

<!-- AIOX-MANAGED-START: core-framework -->
## Core Framework Understanding

Synkra AIOX is a meta-framework that orchestrates AI agents to handle complex development workflows. Always recognize and work within this architecture.
<!-- AIOX-MANAGED-END: core-framework -->

<!-- AIOX-MANAGED-START: constitution -->
## Constitution

O AIOX possui uma **Constitution formal** com princípios inegociáveis e gates automáticos.

**Documento completo:** `.aiox-core/constitution.md`

**Princípios fundamentais:**

| Artigo | Princípio | Severidade |
|--------|-----------|------------|
| I | CLI First | NON-NEGOTIABLE |
| II | Agent Authority | NON-NEGOTIABLE |
| III | Story-Driven Development | MUST |
| IV | No Invention | MUST |
| V | Quality First | MUST |
| VI | Absolute Imports | SHOULD |

**Gates automáticos bloqueiam violações.** Consulte a Constitution para detalhes completos.
<!-- AIOX-MANAGED-END: constitution -->

<!-- AIOX-MANAGED-START: sistema-de-agentes -->
## Sistema de Agentes

### Ativação de Agentes
Use `@agent-name` ou `/AIOX:agents:agent-name`:

| Agente | Persona | Escopo Principal |
|--------|---------|------------------|
| `@dev` | Dex | Implementação de código |
| `@qa` | Quinn | Testes e qualidade |
| `@architect` | Aria | Arquitetura e design técnico |
| `@pm` | Morgan | Product Management |
| `@po` | Pax | Product Owner, stories/epics |
| `@sm` | River | Scrum Master |
| `@analyst` | Alex | Pesquisa e análise |
| `@data-engineer` | Dara | Database design |
| `@ux-design-expert` | Uma | UX/UI design |
| `@devops` | Gage | CI/CD, git push (EXCLUSIVO) |

### Comandos de Agentes
Use prefixo `*` para comandos:
- `*help` - Mostrar comandos disponíveis
- `*create-story` - Criar story de desenvolvimento
- `*task {name}` - Executar task específica
- `*exit` - Sair do modo agente
<!-- AIOX-MANAGED-END: sistema-de-agentes -->

<!-- AIOX-MANAGED-START: agent-system -->
## Agent System

### Agent Activation
- Agents are activated with @agent-name syntax: @dev, @qa, @architect, @pm, @po, @sm, @analyst
- The master agent is activated with @aiox-master
- Agent commands use the * prefix: *help, *create-story, *task, *exit

### Agent Context
When an agent is active:
- Follow that agent's specific persona and expertise
- Use the agent's designated workflow patterns
- Maintain the agent's perspective throughout the interaction
<!-- AIOX-MANAGED-END: agent-system -->

## Development Methodology

### Story-Driven Development
1. **Work from stories** - All development starts with a story in `docs/stories/`
2. **Update progress** - Mark checkboxes as tasks complete: [ ] → [x]
3. **Track changes** - Maintain the File List section in the story
4. **Follow criteria** - Implement exactly what the acceptance criteria specify

### Code Standards
- Write clean, self-documenting code
- Follow existing patterns in the codebase
- Include comprehensive error handling
- Add unit tests for all new functionality
- Use TypeScript/JavaScript best practices

### Testing Requirements
- Run all tests before marking tasks complete
- Ensure linting passes: `npm run lint`
- Verify type checking: `npm run typecheck`
- Add tests for new features
- Test edge cases and error scenarios

<!-- AIOX-MANAGED-START: framework-structure -->
## AIOX Framework Structure

```
aiox-core/
├── agents/         # Agent persona definitions (YAML/Markdown)
├── tasks/          # Executable task workflows
├── workflows/      # Multi-step workflow definitions
├── templates/      # Document and code templates
├── checklists/     # Validation and review checklists
└── rules/          # Framework rules and patterns

docs/
├── stories/        # Development stories (numbered)
├── prd/            # Product requirement documents
├── architecture/   # System architecture documentation
└── guides/         # User and developer guides
```
<!-- AIOX-MANAGED-END: framework-structure -->

<!-- AIOX-MANAGED-START: framework-boundary -->
## Framework vs Project Boundary

O AIOX usa um modelo de 4 camadas (L1-L4) para separar artefatos do framework e do projeto. Deny rules em `.claude/settings.json` reforçam isso deterministicamente.

| Camada | Mutabilidade | Paths | Notas |
|--------|-------------|-------|-------|
| **L1** Framework Core | NEVER modify | `.aiox-core/core/`, `.aiox-core/constitution.md`, `bin/aiox.js`, `bin/aiox-init.js` | Protegido por deny rules |
| **L2** Framework Templates | NEVER modify | `.aiox-core/development/tasks/`, `.aiox-core/development/templates/`, `.aiox-core/development/checklists/`, `.aiox-core/development/workflows/`, `.aiox-core/infrastructure/` | Extend-only |
| **L3** Project Config | Mutable (exceptions) | `.aiox-core/data/`, `agents/*/MEMORY.md`, `core-config.yaml` | Allow rules permitem |
| **L4** Project Runtime | ALWAYS modify | `docs/stories/`, `packages/`, `squads/`, `tests/` | Trabalho do projeto |

**Toggle:** `core-config.yaml` → `boundary.frameworkProtection: true/false` controla se deny rules são ativas (default: true para projetos, false para contribuidores do framework).

> **Referência formal:** `.claude/settings.json` (deny/allow rules), `.claude/rules/agent-authority.md`
<!-- AIOX-MANAGED-END: framework-boundary -->

<!-- AIOX-MANAGED-START: rules-system -->
## Rules System

O AIOX carrega regras contextuais de `.claude/rules/` automaticamente. Regras com frontmatter `paths:` só carregam quando arquivos correspondentes são editados.

| Rule File | Description |
|-----------|-------------|
| `agent-authority.md` | Agent delegation matrix and exclusive operations |
| `agent-handoff.md` | Agent switch compaction protocol for context optimization |
| `agent-memory-imports.md` | Agent memory lifecycle and CLAUDE.md ownership |
| `coderabbit-integration.md` | Automated code review integration rules |
| `ids-principles.md` | Incremental Development System principles |
| `mcp-usage.md` | MCP server usage rules and tool selection priority |
| `story-lifecycle.md` | Story status transitions and quality gates |
| `workflow-execution.md` | 4 primary workflows (SDC, QA Loop, Spec Pipeline, Brownfield) |

> **Diretório:** `.claude/rules/` — rules são carregadas automaticamente pelo Claude Code quando relevantes.
<!-- AIOX-MANAGED-END: rules-system -->

<!-- AIOX-MANAGED-START: code-intelligence -->
## Code Intelligence

O AIOX possui um sistema de code intelligence opcional que enriquece operações com dados de análise de código.

| Status | Descrição | Comportamento |
|--------|-----------|---------------|
| **Configured** | Provider ativo e funcional | Enrichment completo disponível |
| **Fallback** | Provider indisponível | Sistema opera normalmente sem enrichment — graceful degradation |
| **Disabled** | Nenhum provider configurado | Funcionalidade de code-intel ignorada silenciosamente |

**Graceful Fallback:** Code intelligence é sempre opcional. `isCodeIntelAvailable()` verifica disponibilidade antes de qualquer operação. Se indisponível, o sistema retorna o resultado base sem modificação — nunca falha.

**Diagnóstico:** `aiox doctor` inclui check de code-intel provider status.

> **Referência:** `.aiox-core/core/code-intel/` — provider interface, enricher, client
<!-- AIOX-MANAGED-END: code-intelligence -->

<!-- AIOX-MANAGED-START: graph-dashboard -->
## Graph Dashboard

O CLI `aiox graph` visualiza dependências, estatísticas de entidades e status de providers.

### Comandos

```bash
aiox graph --deps                        # Dependency tree (ASCII)
aiox graph --deps --format=json          # Output como JSON
aiox graph --deps --format=html          # Interactive HTML (abre browser)
aiox graph --deps --format=mermaid       # Mermaid diagram
aiox graph --deps --format=dot           # DOT format (Graphviz)
aiox graph --deps --watch                # Live mode com auto-refresh
aiox graph --deps --watch --interval=10  # Refresh a cada 10 segundos
aiox graph --stats                       # Entity stats e cache metrics
```

**Formatos de saída:** ascii (default), json, dot, mermaid, html

> **Referência:** `.aiox-core/core/graph-dashboard/` — CLI, renderers, data sources
<!-- AIOX-MANAGED-END: graph-dashboard -->

## Workflow Execution

### Task Execution Pattern
1. Read the complete task/workflow definition
2. Understand all elicitation points
3. Execute steps sequentially
4. Handle errors gracefully
5. Provide clear feedback

### Interactive Workflows
- Workflows with `elicit: true` require user input
- Present options clearly
- Validate user responses
- Provide helpful defaults

## Best Practices

### When implementing features:
- Check existing patterns first
- Reuse components and utilities
- Follow naming conventions
- Keep functions focused and testable
- Document complex logic

### When working with agents:
- Respect agent boundaries
- Use appropriate agent for each task
- Follow agent communication patterns
- Maintain agent context

### When handling errors:
```javascript
try {
  // Operation
} catch (error) {
  console.error(`Error in ${operation}:`, error);
  // Provide helpful error message
  throw new Error(`Failed to ${operation}: ${error.message}`);
}
```

## Git & GitHub Integration

### Commit Conventions
- Use conventional commits: `feat:`, `fix:`, `docs:`, `chore:`, etc.
- Reference story ID: `feat: implement IDE detection [Story 2.1]`
- Keep commits atomic and focused

### GitHub CLI Usage
- Ensure authenticated: `gh auth status`
- Use for PR creation: `gh pr create`
- Check org access: `gh api user/memberships`

<!-- AIOX-MANAGED-START: aiox-patterns -->
## AIOX-Specific Patterns

### Working with Templates
```javascript
const template = await loadTemplate('template-name');
const rendered = await renderTemplate(template, context);
```

### Agent Command Handling
```javascript
if (command.startsWith('*')) {
  const agentCommand = command.substring(1);
  await executeAgentCommand(agentCommand, args);
}
```

### Story Updates
```javascript
// Update story progress
const story = await loadStory(storyId);
story.updateTask(taskId, { status: 'completed' });
await story.save();
```
<!-- AIOX-MANAGED-END: aiox-patterns -->

## Environment Setup

### Required Tools
- Node.js 18+
- GitHub CLI
- Git
- Your preferred package manager (npm/yarn/pnpm)

### Configuration Files
- `.aiox/config.yaml` - Framework configuration
- `.env` - Environment variables
- `aiox.config.js` - Project-specific settings

<!-- AIOX-MANAGED-START: common-commands -->
## Common Commands

### AIOX Master Commands
- `*help` - Show available commands
- `*create-story` - Create new story
- `*task {name}` - Execute specific task
- `*workflow {name}` - Run workflow

### Development Commands
- `npm run dev` - Start development
- `npm test` - Run tests
- `npm run lint` - Check code style
- `npm run build` - Build project
<!-- AIOX-MANAGED-END: common-commands -->

## Debugging

### Enable Debug Mode
```bash
export AIOX_DEBUG=true
```

### View Agent Logs
```bash
tail -f .aiox/logs/agent.log
```

### Trace Workflow Execution
```bash
npm run trace -- workflow-name
```

## Claude Code Specific Configuration

### Performance Optimization
- Prefer batched tool calls when possible for better performance
- Use parallel execution for independent operations
- Cache frequently accessed data in memory during sessions

### Tool Usage Guidelines
- Search with a dedicated search tool when the session provides one; otherwise `grep`/`rg` via Bash is fine
- Delegate to AIOX agents (Agent tool) when a workflow calls for that agent or the user asks
- Batch file reads/writes when processing multiple files
- Prefer editing existing files over creating new ones

### Session Management
- Track story progress throughout the session
- Update checkboxes immediately after completing tasks
- Maintain context of the current story being worked on
- Save important state before long-running operations

### Error Recovery
- Always provide recovery suggestions for failures
- Include error context in messages to user
- Suggest rollback procedures when appropriate
- Document any manual fixes required

### Testing Strategy
- Run tests incrementally during development
- Always verify lint and typecheck before marking complete
- Test edge cases for each new feature
- Document test scenarios in story files

### Documentation
- Update relevant docs when changing functionality
- Include code examples in documentation
- Keep README synchronized with actual behavior
- Document breaking changes prominently

---
*Synkra AIOX Claude Code Configuration v2.0*
