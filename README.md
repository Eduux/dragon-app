# DragonApp

Projeto para consumo da API de dragões, utlizando Angular.

## Login

Para entrar na aplicação use as seguintes credenciais:

Login: teste
Senha: 12qw

## Utilizado no projeto

CSS: 

-> SCSS  
-> Boostrap 4

SweetAlert 2 para alerts e prompts
NGX SPINNER para loadings

## Rodando a aplicação

$ npm instal

Para instalar as dependencias

$ ng serve 

http://localhost:4200

$ ng test

Para rodas os testes

## Estrutura

3 components 

-> Lista de dragões, components/dragons-list, onde editamos, removemos e adicionamos novos dragões.  
-> Detalhes do dragão, components/dragons-detail, pagina simples para listar apenas os detalhes de um dragão.  
-> Login, components/login, componente de login setando o usuário de testes para login na aplicação.  

Todas as rotas protegidas pelos guards/auth, guards/logged

-> Logged guard, canActivate na rota de login, verificando se o usuário já está logado para enviar ele devolta para a home
-> Auth Guard, canActivate em todas as rodas menos a de login, verificando se o usuário está logado, se não envia ele devolta para o login

Requisições:

-> Todas feitas com O HttpClient do @angular/common/http.

Serviços:

-> services/login, utilizando localstorage para simples login da aplicação, verificando, retornando e logando usuário  
-> services/dragon, principal serviço da aplicação, consumindo a api informada no teste. Utilizando 5 funções baseadas em CRUD  


Muito obrigado!