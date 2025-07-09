Antes de tudo para criação do ambiente de execução e desenvolvimento

o projeto deve ser baixado do repoitório github no meu caso:

git clone https://github.com/EduardoZava/devfull-mvp3.git

Siga para instalar o [ambiente de desenvolvimento](https://kinsta.com/pt/base-de-conhecimento/react-no-windows-macos-e-linux/)

Estando no diretorio do projeto devfull-mvp3

desça um nível neste caso diretorio client
### `cd client/`

É necessário a instalação do React e as bibliotecas de execução e o npm é reponsavel por estas instalações

### `npm install`

Executa a aplicação em development mode.\

### `npm start`

Open [http://localhost:3000](http://localhost:3000) para visitar no browser.

A página sofrerá reload perante a qualquer modificaçã no código.\

Veja a sessão sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para mais informações

### usuario e senha mocados no backend para login na aplicação
### `usuario: ezava@xpto.com`
### `senha: xpto1234`

## Aprendendo mais ...

Você pode aprender mais em [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Instalando o projeto e as bibliotecas

Após a instalação dos fontes a partir de 

git clone https://github.com/EduardoZava/devfull-mvp3.git

desça um nível neste caso o diretorio movie-api

### `cd movie-api/`

pip install -r requirements.txt

### executando projeto

uvicorn app.main:app --host   localhost --port 8000 --reload

### chamada aos endpoints

http://localhost:8000/api/v1/search-movie da minha api geralmente com POST

### doc da api

http://localhost:8000/docs#/v1/login_api_v1_login_post


## Chave OMDb API (http://www.omdbapi.com/)

foi necessário criar uma chave para acesso a api e a movie-api utiliza 
este endpoint para acesso as informações dos filmes

https://www.omdbapi.com/?apikey=38e11782&i=tt3896198&plot=full

apikey=38e11782

utilzei o axios para acesso a api

ssh-add ~/.ssh/id_ed25519
ssh-add -l
echo $SSH_AUTH_SOCK

sudo usermod -aG docker $USER
groups

sudo -E docker build --progress=plain --ssh default --build-arg REPO_URL=git@github.com:EduardoZava/average-alligator.git -t movie-app-backend .

docker build --build-arg REPO_URL=git@github.com:EduardoZava/average-alligator.git -t movie-app-client .
