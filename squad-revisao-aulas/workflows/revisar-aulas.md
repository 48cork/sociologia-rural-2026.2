# Workflow: Revisar Aulas

Ordem de execução do squad de revisão sobre os 49 arquivos HTML de aula em
`sociologia-rural-2026.2/aulas/` (48 aulas regulares + `encontro-10-aula-extra.html`).

## Passo 1 — Revisor de Progressão (roda uma vez, sobre o conjunto)

`agentes/revisor-progressao.md` lê as 49 aulas em sequência e produz o **Mapa de
Progressão do Curso** (ver formato de saída no próprio arquivo do agente): leitura geral
do arco de complexidade crescente, tabela de ajustes por aula, avaliação do padrão das
perguntas de discussão por fase, e conclusão.

Este passo roda **antes** de qualquer revisão pontual. Nenhuma aula individual é
corrigida neste passo — o produto é só o mapa.

## Passo 2 — Revisão por aula (roda 49 vezes, uma por arquivo)

Para cada arquivo, nesta ordem, cada agente já ciente de:
- em que fase do arco (1 a 5, conforme o Mapa de Progressão) aquela aula está;
- os apontamentos específicos que o Revisor de Progressão fez para aquele arquivo.

1. `agentes/conteudista.md` — cobertura de conteúdo vs. bibliografia do bloco.
2. `agentes/revisor-teorico.md` — correção dos conceitos sociológicos citados.
3. `agentes/revisor-fluidez.md` — fluidez de prosa e voz autoral (padrões a/b/c/d).
4. `agentes/revisor-pedagogico.md` — adequação da linguagem ao público de História.

Cada um produz seu parecer no formato definido no próprio arquivo do agente. Os quatro
pareceres de uma mesma aula são produzidos independentemente uns dos outros (não há
dependência sequencial de conteúdo entre eles, só a dependência comum do Mapa de
Progressão do Passo 1).

## Passo 3 — Aprovador (fecha, aula por aula)

`agentes/aprovador.md` lê os quatro pareceres do Passo 2 mais os apontamentos específicos
daquele arquivo no Mapa de Progressão do Passo 1, e emite o veredito: **PRONTO** ou
**PRECISA REVISAR**, com lista objetiva e rastreável do que falta ajustar.

## Passo 4 — Aplicação das correções

Quando o veredito for **PRECISA REVISAR**, os ajustes obrigatórios listados pelo
Aprovador são aplicados diretamente no arquivo HTML da aula. Depois de aplicados, a aula
não volta a passar pelo Passo 2 automaticamente — a aplicação dos ajustes já listados
pelo Aprovador é considerada suficiente para fechar o ciclo, salvo indicação em
contrário de quem executa o workflow.

## Passo 5 — Relatório final

Consolidar em `relatorio_final.md`, na raiz de `sociologia-rural-2026.2/`:
- o Mapa de Progressão do Curso (Passo 1), na íntegra;
- o veredito de cada uma das 49 aulas (Passo 3), incluindo se houve aplicação de ajustes
  (Passo 4) e um resumo de uma linha do que foi corrigido em cada caso.

## Resumo do fluxo

```
revisor-progressao (1x, todas as 49 aulas)
        │
        ▼
   Mapa de Progressão
        │
        ▼
┌───────────────────────────────────────────────────┐
│  para cada uma das 49 aulas, em paralelo:          │
│  conteudista → revisor-teorico → revisor-fluidez   │
│              → revisor-pedagogico                  │
│                       │                             │
│                       ▼                             │
│                   aprovador                          │
│                       │                             │
│                       ▼                             │
│         PRONTO  ou  PRECISA REVISAR + ajustes       │
│                       │                             │
│                       ▼                             │
│            aplicação direta no arquivo               │
└───────────────────────────────────────────────────┘
        │
        ▼
   relatorio_final.md
```
