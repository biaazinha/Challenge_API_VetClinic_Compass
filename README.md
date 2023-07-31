# 1°Challenge - API VetClinic - Bianca Karoline Ramos

## Descrição

Este projeto foi desenvolvido de acordo com o proposto pelo primeiro desafio do Programa de Bolsas da Compass para simular um gerenciamento de clientes em clínicas veterinárias. 
Ele oferece uma API no padrão REST para realizar operações com tutores e seus animais de estimação.

## Ferramentas e tecnologias utilizadas:

- VSCode
- JavaScript
- Node.js
- TypeScript
- Express

## Dependencias utilizadas:

- express
- body-parser
- nodemon
- swagger-ui-express
- @types/express
- @types/node
- @types/swagger-ui-express

## Instalação e Execução Local:

1° - Baixe o repositório:
Para começar, é necessário baixar os arquivos do repositório para o seu computador. Você pode fazer isso de duas maneiras:

Opção 1) Baixando o arquivo ZIP, caso não tenha o Git instalado e prefira essa opção:
- Vá até a página do repositório no GitHub https://github.com/bia-ramos/Challenge_1_API_VetClinic
- Clique no botão verde "Code"
- clique em "Download ZIP"
- Isso irá baixar um arquivo ZIP contendo todos os arquivos do repositório para o seu computador
- Extraia o conteúdo do arquivo ZIP para uma pasta desejada.

Opção 2) Utilizando o Git, caso já tenha o Git instalado no seu computador:
- Abra o terminal do VS Code ou o prompt de comando e navegue até a pasta onde você deseja salvar o repositório. Em seguida, digite o seguinte comando:
- git clone https://github.com/bia-ramos/Challenge_1_API_VetClinic.git
- Isso irá baixar todos os arquivos do repositório para a pasta "Challenge_1_API_VetClinic" no seu computador.

2° - Arraste o projeto no Visual Studio Code (VS Code).

3° - Instale as dependências com o comando:
- IMPORTANTE: é válido ressaltar que se não houver typeScript instalado em sua máquina deverá realizar o comando "npm install -g typescript" para que a compilação seja realizada com sucesso antes dos próximos passos.
- Após isso, realize o comando "npm install" 

4° - Compile o código TypeScript com o comando:
- tsc -w

5° - Inicie o servidor com o comando:
- npm start

A API estará disponível em http://localhost:3000/v1

## Teste das rotas:
Você pode fazer esse teste de duas maneiras:

Opção 1) SWAGGER: Utilizar a rota "http://localhost:3000/v1/documentation" onde contém todas as rotas e seus objetivos.

Opção 2) POSTMAN: Arrastar o arquivo JSON de nome "Collection_postman" presente no projeto para dentro do seu postman.

## Routes

### Rota: GET /tutors 
- Get all tutors: Recupera todos os tutores cadastrados.
- Como executá-la:
- POSTMAN: Apenas clicar no botão azul "send" para que ele exiba os tutores existente.
- SWAGGER: Selecionar o botão "Try it out" e depois o botão azul "execute" e o resultado aparecerá a baixo de "Server response".

### Rota: POST /tutor 
- Create a new tutor: Cria um novo tutor com as seguintes informações obrigatórias no corpo da requisição:

- "name": "Nome do Tutor",
- "phone": "123456789",
- "email": "tutor@example.com",
- "date_of_birth": "1990-01-01 10:00",
- "zip_code": "12345678"

- Como executá-la:
- POSTMAN: Clicar em "body" a baixo do campo da rota, depois selecionar a bolinha "raw" e verificar se esta em "JSON" de azul. Meu exemplo de criação de um tutor estrá sendo exibido no campo e caso queira utilizá-lo é só clicar no botão azul "send" para que ele crie o tutor.
- SWAGGER: Selecionar o botão "Try it out" e no campo "Request body" vizualizar o exemplo de criação de um tutor que eu fiz, e caso deseje utiliza-lo apertar o botão azul "execute" e o resultado aparecerá a baixo de "Server response".

### Rota: PUT /tutor/:id
- Update a tutor: Atualiza/altera alguma informação um tutor existente.
- Como executá-la:
- POSTMAN: Clicar em "body" a baixo do campo da rota, depois selecionar a bolinha "raw" e verificar se esta em "JSON" de azul. Verificar também se na rota o id do tutor está inserido lá (coloquei como exemplo o 1). Meu exemplo de atualização de um tutor estrá sendo exibido no campo e caso queira utilizá-lo é só clicar no botão azul "send" para que ele atualize o tutor.
- SWAGGER: Selecionar o botão "Try it out", inserir do campo "id" o id do tutor que deseja atualizar, e no campo "Request body" vizualizar o exemplo de atualização de um tutor que eu fiz, e caso deseje utiliza-lo apertar o botão azul "execute" e o resultado aparecerá a baixo de "Server response".

### Rota: DELETE /tutor/:id 
- Delete a tutor: Exclui um tutor pelo seu ID.
- Como executá-la:
- POSTMAN: Verificar se o id do tutor a ser deletado esta inserido na rota (coloquei como exemplo o tutor 1). Após isso clicar no botão azul "send" para que ele delete o tutor.
- SWAGGER: Selecionar o botão "Try it out" e inserir do campo "id" o id do tutor que deseja deletar, após isso apertar o botão azul "execute" e o resultado aparecerá a baixo de "Server response".

### Rota: POST /pet/:tutorId
- Create a new pet and add it to a tutor: Cria um novo animal de estimação e o adiciona a um tutor. O corpo da requisição deve conter as informações obrigatórias do pet, como no exemplo abaixo:
  
- "name": "Nome do Pet",
- "species": "Cachorro",
- "carry": "p",
- "weight": 5,
- "date_of_birth": "2010-05-15 12:00"

- Como executá-la: 
- POSTMAN: Clicar em "body" a baixo do campo da rota, depois selecionar a bolinha "raw" e verificar se esta em "JSON" de azul. Verifique se o id do tutor que deseja adicionar o pet está na rota (coloquei como exemplo o tutor 1). Meu exemplo de criação de um pet estrá sendo exibido no campo e caso queira utilizá-lo é só clicar no botão azul "send" para que ele crie o pet eadicione ao tutor.
- SWAGGER: Selecionar o botão "Try it out", inserir do campo "id" o id do tutor que deseja inserir o novo pet, e no campo "Request body" vizualizar o exemplo de criação de um pet que eu fiz, e caso deseje utiliza-lo apertar o botão azul "execute" e o resultado aparecerá a baixo de "Server response".

### Rota: PUT /pet/:petId/tutor/:tutorId 
- Update a pet's info: Atualiza as informações de um animal de estimação de um tutor.
- Como executá-la:
- POSTMAN:  Clicar em "body" a baixo do campo da rota, depois selecionar a bolinha "raw" e verificar se esta em "JSON" de azul. Verificar também se na rota o id do tutor e o id do pet está inserido lá (coloquei como exemplo os dois ids 1). Meu exemplo de atualização de um pet estrá sendo exibido no campo e caso queira utilizá-lo é só clicar no botão azul "send" para que ele atualize o pet.
- SWAGGER: Selecionar o botão "Try it out", inserir do campo "petId" o id do pet e no campo "tutorId" o id do tutor desse pet, após isso no campo "Request body" vizualizar o exemplo de atualização de um pet que eu fiz, e caso deseje utiliza-lo apertar o botão azul "execute" e o resultado aparecerá a baixo de "Server response".

### Rota: DELETE /pet/:petId/tutor/:tutorId
 Delete a pet from a tutor: Exclui um animal de estimação de um tutor pelo ID do pet e ID do tutor.
- Como executá-la:
- POSTMAN: Verificar se o id do tutor e o id do pet a ser deletado esta inserido na rota (coloquei como exemplo os dois ids 1). Após isso clicar no botão azul "send" para que ele delete o pet do tutor.
- SWAGGER: Selecionar o botão "Try it out" e inserir do campo "petId" o id do pet e no campo "tutorId" o id do tutor desse pet, após isso apertar o botão azul "execute" e o resultado aparecerá a baixo de "Server response".

## Agradecimentos:
Aos Colegas do meu squad por todo apoio e ajuda, ao pessoal do PB por todo apoio e ajuda necessária e aos meus estudos.
