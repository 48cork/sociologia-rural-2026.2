# Squad de Revisão de Aulas — Sociologia Rural 2026.2

Squad de revisão para os 50 arquivos HTML de aula em `sociologia-rural-2026.2/aulas/`
(48 aulas regulares + `encontro-10-aula-extra.html` + `encontro-15-aula-extra.html`).

## Estrutura

```
squad-revisao-aulas/
├── agentes/
│   ├── conteudista.md          — cobertura de conteúdo vs. bibliografia do curso
│   ├── revisor-teorico.md      — correção dos conceitos sociológicos citados
│   ├── revisor-fluidez.md      — fluidez de prosa e voz autoral
│   ├── revisor-pedagogico.md   — adequação da linguagem a alunos de História
│   ├── revisor-progressao.md   — arquitetura do curso como um todo (lê as 50 aulas juntas)
│   └── aprovador.md            — veredito final por aula
└── workflows/
    └── revisar-aulas.md        — ordem de execução do squad
```

## Lógica

Cada agente em `agentes/` é uma definição de papel: o que avalia, com que critérios,
e em que formato devolve o parecer. Nenhum agente edita o arquivo de aula diretamente —
quem aplica a correção final é sempre quem executa o workflow (humano ou IA orquestradora),
com base nos pareceres. A exceção lógica é o `revisor-fluidez`, cujo parecer já vem no
formato "trecho original → trecho corrigido", pronto para aplicação direta.

O `revisor-progressao` é o único agente que não olha para uma aula isolada — ele lê o
conjunto das 50 aulas antes de qualquer revisão pontual começar, para que os demais
agentes revisem cada aula já sabendo em que fase do arco de complexidade do curso ela
se encontra.

Ver `workflows/revisar-aulas.md` para a ordem exata de execução.
