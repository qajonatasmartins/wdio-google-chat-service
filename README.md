# wdio-google-chat-service

Biblioteca Webdriverio para enviar resultados de testes como notificação/mensagem de folga para espaços do google chat.

## Instalação

`npm install wdio-google-chat-service --save-dev`

ou

`yarn add wdio-google-chat-service`

## Configuração

Primeiramente, importe o serviço para o arquivo de configuração wdio `wdio.conf.js`

```
// wdio.conf.js
const slack = require('wdio-google-chat-service');
```

Para usar o serviço, você precisa ter o url do webhook do google chat para enviar a notificação e adicionar o url em 'webhook'

Exemplo:

```
services: [[GoogleChatService, {
            webhookUrl: 'https://chat.googleapis.com/v1/spaces/xxxxxxxxx/messages?key=xxxxxxxx&token=xxxxxxxxx',
            notifyOnlyOnFailure: false //Enviar notificação apenas em caso de falha no teste
        }]
],
```

## Obtendo o webhook do google chat

Obs.: O google chat só possui o webhook para contas empresariais. Caso você use uma conta pessoal não deve ter a opção de webhook.

1. Crie um espaço no google chat
2. Clique na seta sobre o nome do espaco do chat
3. Clique em [Gerenciar webhooks]
4. Add um ou copie a Url do webhook apresentada.
5. Cole a Url do webhook no service dentro da opção 'webhookUrl' conforme o exemplo acima.

## Features

- Suporte para o corredor do mocha
- Detalhes de erro
- Enviar notificação apenas em caso de falha no teste

## Resultado

![Test pass and fail](/wdio-google-chat-service/img/testPassAndFail.png)