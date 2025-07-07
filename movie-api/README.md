# Movie Opinion API

API RESTful para gerenciar opiniões e avaliações de usuários sobre filmes, integrando dados da OMDb API.

## Requisitos

## ambiente do postgresql

 Removi o postgress para instalar o SqlLite e assim simplificar o ambiente

## Instalando Python na versão 

para auxilio qto a ajustar a melhor versão do python instalei o pyenv

https://github.com/pyenv/pyenv
 
pyenv install 3.10.3
pyenv global 3.10 

também intalei ambiente virtual

## Instalando o ambiente virtual

sudo apt install python3-venv
 
python3 -m venv devfull

source devfull/bin/activate

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

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000'
})

export default api;

### usuario e senha mocados no backend para login na aplicação
### `usuario: ezava@xpto.com`
### `senha: xpto1234`

criei um script python create_tables.py e um insert_review.py 
caso seja necessãio recriar tabelas e dar carga no BD



