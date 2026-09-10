# Frameworks

## Workflow de Revisão de Aulas (5 passos)
- Quando usar: sempre que um conjunto de aulas HTML de uma disciplina estiver pronto e
  precisar de revisão pedagógica e teórica antes de o curso ser considerado fechado.
- Passos:
  1. `revisor-progressao` lê todas as aulas em sequência e produz o Mapa de Progressão do
     Curso — não corrige nada ainda, só mapeia.
  2. Para cada aula, em paralelo: `conteudista` → `revisor-teorico` → `revisor-fluidez` →
     `revisor-pedagogico`, cada um já ciente da fase do arco (Passo 1) e dos apontamentos
     específicos daquele arquivo.
  3. `aprovador` lê os 4 pareceres do Passo 2 mais os apontamentos do Mapa e emite
     veredito PRONTO ou PRECISA REVISAR, com lista objetiva e rastreável do que falta.
  4. Se PRECISA REVISAR, os ajustes obrigatórios são aplicados direto no HTML; a aula não
     volta automaticamente ao Passo 2.
  5. Consolidação em `relatorio_final.md`: Mapa de Progressão na íntegra + veredito de
     cada aula + resumo de uma linha do que foi corrigido em cada caso.
- Fonte / origem: `squad-revisao-aulas/workflows/revisar-aulas.md`, validado em produção
  real nas 50 aulas de Sociologia Rural 2026.2.

## Mapa de Progressão do Curso (5 fases)
- Quando usar: para avaliar se o material de um curso de N encontros mantém um arco de
  complexidade crescente coerente, em vez de aulas isoladas entre si.
- Passos: dividir o curso em fases (Sociologia Rural usou 5 — Fase 1 Definição/Encontros
  1-2, Fase 2/Encontros 3-6, Fase 3 Comparação e Tensionamento/Encontros 7-10, Fase
  4/Encontros 11-14, Fase 5 Avaliação Crítica/Encontros 15-16); verificar se cada fase
  cumpre sua regra própria (ex.: Fase 1 define isoladamente e já planta sementes de
  amarração futura; Fase 5 não introduz conceito novo, só releitura do aparato clássico já
  construído nas Fases 1-2); identificar loops abertos — promessa de amarração futura
  feita numa aula e não cumprida na aula prometida — e fechá-los.
- Fonte / origem: `squad-revisao-aulas/agentes/revisor-progressao.md`; validado no ciclo
  real de revisão (ex.: loop aberto por Weber em 02-01 prometendo retomada no Encontro 6,
  identificado pelo mapa e fechado na correção).

## Padrões de Fluidez a/b/c/d (revisor-fluidez)
- Quando usar: para revisar prosa gerada por IA que precisa preservar voz autoral
  genuína, evitando tanto o tom robótico recorrente quanto a correção excessiva que apaga
  posicionamento real do autor.
- Passos: caçar especificamente 4 padrões, com limite numérico por aula, não eliminação
  total — (a) fórmula "não é X — é Y" (máx. 1x por aula); (b) excesso de caixas de
  destaque (máx. 1 por aula, dissolver as demais em prosa corrida); (c) bloco "Leitura
  teórica" separado do Caso (sempre integrar ao parágrafo do caso); (d) clichês genéricos
  de texto gerado por IA ("é importante notar que", "em suma" etc.) — e, em paralelo,
  proteger explicitamente perguntas metodológicas dirigidas ao aluno e ressalvas de nuance
  específica, que não devem ser confundidas com os padrões a eliminar.
- Fonte / origem: `squad-revisao-aulas/agentes/revisor-fluidez.md`, nascido de uma amostra
  real de aula revisada à mão pelo professor. Foi o padrão mais recorrente nos ajustes das
  50 aulas (item c, presente em praticamente todas as aulas expositivas regulares).

## Fábrica de Conhecimento Sociológico (processo de curso completo)
- Quando usar: para criar, expandir ou revisar uma disciplina inteira no formato N
  encontros x 3 aulas, reaplicando o modelo validado em Sociologia Rural em outra
  disciplina (ex.: antropologia-filosofica-enfermagem-2026.2).
- Passos: (1) confirmar a ementa oficial com a coordenação antes de qualquer coisa; (2)
  definir o eixo disciplinar correto, sem misturar cânones; (3) gerar o Plano de Aulas,
  ligando blocos à pesquisa própria de Sergio quando fizer sentido; (4) gerar a
  Bibliografia por bloco, com citações checadas via busca; (5) cruzar ementa oficial x
  Plano de Aulas gerado, bloco a bloco; (6) copiar e adaptar o `squad-revisao-aulas` da
  disciplina de referência; (7) gerar as aulas em HTML; (8) rodar o workflow
  `revisar-aulas.md`.
- Fonte / origem: `~/.claude/skills/fabrica-conhecimento-sociologico/SKILL.md`, tendo
  `sociologia-rural-2026.2` como referência viva e testada.
