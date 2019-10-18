## Contexto:

A provi é uma fintech que oferece crédito para pessoa física sem garantia, com o intuito de fomentar a educação especializada no Brasil. Financiamos cursos e especializações (presenciais ou online) para designers, programadores, data scientists, digital marketers, etc.

### desafio provi - javascript developer

Imagine que você recebeu a missão de construir um dashboard onde os usuários que receberam empréstimos podem ver suas parcelas em aberto, valor total da dívida, total de juros, etc...

Olhando esse desafio pela ótica do cliente, quais funcionalidades você imagina que sejam ideais para um dashboard de gestão e acompanhamento do empréstimo?

Com isso em mente, imagine que vc é um "single dev army" e tem a responsabilidade de desenvolver um MVP desse dashboard e apresentar para o resto do time.

### siga os passos abaixo para fazer o desafio:

1. Crie um repositório no github.
2. Use o CRA(create-react-app) para gerar a estrutura inicial do projeto.
3. Sinta-se a vontade para fazer chamadas http como preferir.
4. Sinta-se a vontade para usar algum framework de UI/UX ou fazer o próprio design.
5. Ao terminar, faça um pull request do seu challenge e um fork em seguida.
6. Caso você sinta necessidade de "chumbar" algum texto na tela que não esteja na API (nome do usuário, foto, email, mensagens, etc), não tem problema.
7. Caso não consiga fazer o fork/pull request, encaminhar o repo zipado para luciano@provi.com.br ou padilha@provi.com.br

### O que vamos levar em conta

1. Bons princípios de UI/UX
2. Boa noção de design patterns.
3. Usar Redux/Context para gerenciamento de estado.
4. Usar Hooks.
5. Organização do github (commits, pull requests).

### Observações

1. Caso tenha alguma dúvida durante o challenge, fique à vontade pra entrar em contato conosco. (Você pode nos encontrar no slack do react-brasil @padil, @lucianokrebs ou através dos nossos e-mails mencionados acima)
2. Faça com calma e qualidade e use um tempo razoável.

#### Explicação dos dados no ENDPOINT do empréstimo:

ENDPOINT: http://www.mocky.io/v2/5c923b0932000029056bce39

1.  totalAmountInTaxes: Valor total de juros no empréstimo
2.  monthlyInterest: Taxa de juros mensal
3.  amountPayd: Valor total pago
4.  amountTaken: Valor total emprestado
5.  installments: Todas as parcelas do empréstimo
