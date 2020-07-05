# Projeto Smarts Challenger - BACK-END

Projeto em nodejs para servir o front-end do desafio.


# Dependencias

	### "cors": "^2.8.5",
    ### "dotenv": "^8.2.0",
    ### "express": "^4.17.1",
    ### "moment": "^2.27.0",
    ### "mongoose": "^5.9.21"


# Instalação

Siga os seguintes passos para a correta instalação do projeto:

### Instale todas as dependencias;

### Carregue a base dados presente em [Base de Dados](https://smarts-totem.s3-sa-east-1.amazonaws.com/code-challenge/customers.json) no MongoDb usando o seguinte comando

```
mongoimport --db [nome do banco desejado] --collection [nome da coleção desejada] --file [nome do arquivo baixado].json

```

### Criar o arquivo ".env" contendo as seguintes variaveis de ambiente:

```
	DEPLOY_PORT = '[PORTA DESEJADA]'
	DB_URI = '[ENDEREÇO DO BANCO DE DADOS CONFIGURADO]'
	COLLECTION_NAME = '[NOME DA COLEÇÃO CONFIGURADA]'
```


### Execute o projeto

```
npm start

```


# Deploy

O processo de Deploy é similar ao processo de instalação, basta apenas alterar as variaveis de ambiente de acordo com os paremetros do serviço de hospedagem escolhido

# Considerações

A realização desse projeto foi realmente um desafio para mim, pois possuo pouca experiencia em JavaScript e Nodejs e menos experiencia ainda com a utilização do MongoDb.
	
	- Em relação ao MongoDb consegui aprender bastante tendo em vista que nunca havia trabalhado com esse SGBD, pude aprender desde a integração do JSON com o MongoDb Até a implementação de paginação nos resultados da query.
	
	- Com relação ao Nodejs, não houve muito acrésicmo de conhecimento, pois já trabalhei com o mesmo usando o Express;
	
	
Como aperfeiçoamento pessoal, devo aprender sobre a criação de ambientes de testes. Pois não fui capaz de faze-lo dentro do prazo estipulado.
