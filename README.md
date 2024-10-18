
---

# Controle de Gastos

Este projeto é uma aplicação simples em JavaScript que permite controlar seus gastos pessoais de maneira organizada. Com base no seu salário ou lucro mensal, o sistema distribui suas finanças em três categorias: **Gastos Essenciais**, **Estilo de Vida**, e **Reserva**, seguindo a regra 50/30/20.

## Funcionalidades

- **Cálculo Automático dos Gastos**: Baseado na regra 50/30/20, a aplicação divide seu salário nas três categorias principais:
  - 50% para **Gastos Essenciais** (como moradia, alimentação, transporte etc.)
  - 30% para **Estilo de Vida** (lazer, entretenimento e outros gastos não essenciais)
  - 20% para **Reserva** (poupança, investimentos e emergências)
  
- **Menu Interativo**: O sistema permite que o usuário visualize facilmente quanto deve ser destinado a cada categoria, conforme o valor inserido.

- **Validação de Entrada**: O programa solicita ao usuário que insira um valor numérico válido para o salário, garantindo que a entrada seja correta antes de realizar os cálculos.

## Como Executar

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Instale o pacote `prompt-sync` para permitir a interação via terminal:

   ```bash
   npm install prompt-sync
   ```

3. Clone este repositório e navegue até a pasta do projeto.
4. Execute o script com o seguinte comando:

   ```bash
   node index.js
   ```

5. Insira o valor do seu salário quando solicitado e navegue pelo menu para visualizar seus gastos.

## Exemplo de Uso

Ao iniciar o programa, você será solicitado a informar seu salário:

```bash
Informe o valor do salário/lucro: R$ 5000
```

Com base nesse valor, o sistema fará a seguinte divisão:

```bash
------Controle de gastos------
1. Gastos essenciais (fixos)
2. Estilo de vida (lazer e afins)
3. Reserva
Escolha uma opção do menu (1-3): 
```

Se escolher, por exemplo, a opção 1:

```bash
Para gastos essenciais, você deve deixar R$ 2500.00
```

## Tecnologias Utilizadas

- **JavaScript**: Linguagem principal utilizada para o desenvolvimento da lógica do sistema.
- **prompt-sync**: Pacote utilizado para capturar a entrada de dados do usuário via terminal.

## Melhorias futuras que pretendo incrementar

- Implementar uma interface gráfica para melhorar a usabilidade.
- Adicionar suporte a múltiplas moedas.
- Permitir salvar e consultar histórico de salários e gastos anteriores.

---
