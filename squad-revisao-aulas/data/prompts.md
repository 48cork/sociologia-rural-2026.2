# Prompts validados

## Gerar textos de aula em HTML a partir do Plano de Aulas + Bibliografia
Prompt:
```
Leia os arquivos:
- Bibliografia_Sociologia_Rural_2026.2.md
- Plano_Aulas_Sociologia_Rural_2026.2.md
- Roteiro_Pesquisa_Campo_e_Seminario_Sociologia_Rural.md

Crie os textos de aula para os 16 encontros de Sociologia Rural (curso de História),
com base na bibliografia lida. Cada encontro tem 3 aulas — gere um texto para cada uma.

Estrutura de cada texto:
- Título da aula
- Objetivo (1-2 frases)
- Texto expositivo de 800-1200 palavras, linguagem acessível para alunos de História
  (não Ciências Sociais), com exemplos históricos brasileiros
- 1 caso ou exemplo concreto ligado ao Nordeste/semiárido quando fizer sentido
- 3 perguntas de discussão para fechar a aula

Observação: os encontros 10, 11 e 12 são "semanas livres" de pesquisa de campo —
para esses, gere só o roteiro de leitura guiada + tarefa de campo (conforme o
arquivo de roteiro lido), não um texto expositivo comum.

Salve cada texto como HTML individual em:
sociologia-rural-2026.2/aulas/encontro-01-aula-01.html (e assim por diante)
Mantenha o visual dark mode consistente com os projetos anteriores (Sociologia2026.1
e fabrica-de-conhecimento-sociologico).
```
Notas: usado para gerar os 48 textos de aula em produção real; funcionou bem lendo os
arquivos direto em vez de colar conteúdo no prompt.

## Checagem de citação via busca (Passo 4 da skill fabrica-conhecimento-sociologico)
Prompt: não existe um prompt fixo para registrar aqui. Essa checagem nunca foi
formalizada como comando padrão — a verificação era feita citação por citação, de forma
pontual, sem um texto de prompt reaplicável entre execuções.
Notas: se algum dia isso virar um prompt padrão, vale documentar aqui; até lá, o Passo 4
da skill continua descrevendo só a intenção ("citações checadas via busca"), não um
procedimento fixo.

Se quiser arquivar mais prompts específicos que funcionaram bem, diga qual tarefa e eu
registro aqui, já no formato completo (prompt + notas de uso).
