<p align="center">
<img src=".readme/signature.png" width="40%">
</p>

# Challenge Provi | Aplicação para clientes
Aplicação desenvolvida por **Léu Almeida (leunardo.dev)**

## Requisitos
- Node >= 10.16.3
- Yarn >= 1.19.1


## Rodando o projeto
Sem muitos segredos por aqui. Seguindo as instruções do challenge, a aplicação foi desenvolvida com o CRA. Portanto, para iniciar a aplicação basta seguir os passos abaixo.

```zsh
# Clonando o projeto
$ git clone https://github.com/LeuAlmeida/provi.challenge.git

# Acessando a pasta do repositrio
$ cd provi.challenge

# Acessando a pasta da aplicação
$ cd mobile

# Instalando as dependências para desenvolvimento
$ npm install

# Iniciando a aplicação no Android
$ react-native run-android

#Iniciando a aplicação no iOS
$ react-native run-ios
```
Caso enfrente algum problema, por favor, execute (em outra janela do terminal) o comando `react-native start`. Em sequência, inicie novamente o `react-native run-android` (ou `react-native run-ios`).


## A navegação
Eu desenvolvi uma aplicação com uma interface um tanto quanto completa.
Entretanto, suas funcionalidades são restritas aos dados contidos no ENDPOINT.

### O que funciona?
São três rotas funcionais. Entre elas, são: Main (início), Account (conta do cliente) e Statements (faturas do cliente).

- Ao entrar na aplicação, você estará no Dashboard.
- **Minha Conta:** A rota que exibirá, de modo geral, as informações do usuário é acessável através da minha foto de perfil.
- **Faturas do Cliente:** Há um ScrollView no final da página. Clicando em um deles, será redirecionado para uma nova rota contendo as informações daquela prestação.

*Observação importante: Eu inseri um operador condicional ternário em que alteraria o ícone e título (fatura em aberto) deste ScrollView conforme situação de pagamento. Mas como no endpoint só haviam situações inadimplentes, todos ficaram como abertos na aplicação)*

### O que é apenas estético?
Algumas funcionalidades são apenas por questões de estética, para entender melhor a interface.<br/>
Como na prática eu não coloquei nenhuma distinção entre esses objetos, vou listar aqui o que não é funcional. Tudo bem?

#### Dashboard
- Botões do header, abaixo do total do empréstimo **não são funcionais**.
- Os botões e ícones de acesso rápido, como o "Minha conta", "Indicar amigos"... **não são funcionais**.

#### Minha Conta
- Os card buttons existentes nesta página (configurações, renegociar e metas) são meramente ilustrativos e não possuem nenhuma função real.
- O campo de "Atualmente Cursando" também. É um campo estático apenas para ilustrar.

*Observação: Assim como citado anteriormente, aqui também há um operador ternário para o caso do cliente ter pago (ou não) alguma parcela do empréstimo*

<hr/>
<p align="center">
Nos falamos em breve! :alien:
</p>

<p align="center">
<a href="http://linkedin.com/in/leonardoalmeida99">Connect me in LinkedIn</a> | <a href="http://behance.net/almeida99">See my Behance</a> | <a href="https://leunardo.dev">Click here to go to my CV</a>
</p>
