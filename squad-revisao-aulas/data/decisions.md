# Decisões do projeto

## 2026-07-24 - Adição de encontro-15-aula-extra.html para cobrir Bloco 3 da ementa
- Contexto: o cruzamento com a ementa oficial de Sociologia Rural revelou que o Bloco 3
  ("educação da população da zona rural e a sua política e diretrizes educacionais") não
  estava coberto. O Encontro 15 original tratava só de política agrária (INCRA, PRONAF,
  crédito), tema distinto de política educacional.
- Decisão: criar uma 4ª aula extra dentro do Encontro 15, cobrindo Paulo Freire (*Educação
  como Prática da Liberdade*), Pedagogia da Alternância (origem francesa de 1935, chegada
  ao Brasil em 1969) e as diretrizes do MEC/CNE (Parecer CNE/CEB 36/2001, Resolução
  CNE/CEB 1/2002, Decreto 7.352/2010). Segue o mesmo padrão já usado na aula extra do
  Encontro 10: não altera a numeração dos 16 encontros nem dos 49 arquivos anteriores.
- Alternativas descartadas: reescrever um dos três encontros 15 já existentes para
  acomodar o tema (descartada — misturaria política agrária e política educacional numa
  mesma aula, perdendo a distinção da ementa); renumerar os encontros (descartada —
  quebraria a estrutura já publicada e usada como referência em todo o material).

## Deslocamento dos Encontros 10-12 para semanas livres de pesquisa de campo
- Contexto: na execução real via Claude Code, os Encontros 10, 11 e 12 viraram semanas
  livres de pesquisa de campo (ver Roteiro_Pesquisa_Campo_e_Seminario_Sociologia_Rural.md),
  com os temas Agricultura Familiar (10), Povos e Comunidades Tradicionais (11) e Gênero e
  Trabalho no Campo (12) — antecipando temas que na tabela original estavam nos Encontros
  12 e 13.
- Decisão: manter o tema original do Encontro 10 (Agronegócio Contemporâneo) como aula
  extra dentro do próprio encontro, em vez de descartá-lo do curso.
- Alternativas descartadas: descartar de vez o tema de agronegócio (descartada — é
  conteúdo relevante do bloco de continuidade histórica com os Encontros 8 e 9); inserir o
  tema em outro encontro já ocupado por outro assunto (descartada — geraria sobreposição
  temática dentro de uma mesma aula).

## Ordem de execução do squad de revisão: Mapa de Progressão antes de qualquer correção pontual
- Contexto: revisar aula por aula sem visão do conjunto arriscava perder o arco de
  complexidade crescente entre os 16 encontros — risco que de fato se confirmou na Fase 2
  (Encontros 3-6), onde promessas de amarração futura feitas em aulas anteriores (ex.:
  Weber em 02-01 prometendo retomada no Encontro 6) não eram cumpridas.
- Decisão: `revisor-progressao` roda uma única vez sobre as 50 aulas, antes de qualquer
  revisão pontual, produzindo o Mapa de Progressão do Curso que depois orienta os 4
  revisores do Passo 2 (cada um já ciente da fase do arco e dos apontamentos específicos
  daquela aula).
- Alternativas descartadas: revisar aula por aula sem visão do conjunto, deixando a
  amarração ao arco para uma etapa posterior ou para o Aprovador sozinho (descartada — o
  Aprovador só fecha vereditos pontuais, não tem escopo para reler o curso inteiro).

## Fechamento do ciclo: aula corrigida não retorna automaticamente à revisão
- Contexto: era preciso definir quando um ciclo de revisão está "fechado" para uma aula
  específica, sem gerar um loop indefinido de checagem.
- Decisão: quando o veredito é PRECISA REVISAR, os ajustes obrigatórios listados pelo
  Aprovador são aplicados direto no HTML da aula. Depois de aplicados, a aula não volta
  automaticamente ao Passo 2 — a aplicação já é considerada suficiente para fechar o
  ciclo, salvo indicação em contrário de quem executa o workflow.
- Alternativas descartadas: re-checagem automática pelos 4 revisores após cada correção
  (descartada — custo desproporcional ao risco, já que os ajustes exigidos pelo Aprovador
  são objetivos e rastreáveis, não subjetivos).

## Padrões de fluidez corrigidos por limite numérico, não por eliminação total
- Contexto: uma amostra real de aula revisada à mão pelo professor revelou 4 padrões de
  texto genérico/robótico recorrentes no material gerado por IA. Eliminar esses padrões
  por completo também corria o risco de apagar voz autoral genuína do professor em
  estruturas superficialmente parecidas (ex.: perguntas metodológicas dirigidas ao aluno,
  ressalvas de nuance específica).
- Decisão: moderar por número máximo de ocorrências por aula em vez de proibir por
  completo — ex.: fórmula "não é X — é Y" no máximo 1x por aula inteira; caixas de
  destaque no máximo 1 por aula — e proteger explicitamente as frases que carregam
  posicionamento autoral real.
- Alternativas descartadas: proibição total dos quatro padrões (descartada — apagaria
  trechos que cumprem função argumentativa real e não são só reflexo de geração por IA).
