# Etapa 1: Build da aplicação FastAPI
# Usa a imagem oficial do Python 3.10 baseada no Alpine Linux para um tamanho de imagem menor.
# A versão 3.10 é uma interpretação para "10.3.8", que não é uma versão padrão do Python.
FROM python:3.10-alpine AS build

# Instala o cliente OpenSSH, necessário para clonar o repositório via SSH.
# O '--no-cache' ajuda a manter o tamanho da imagem final pequeno.
RUN apk add --no-cache git

# Define o diretório de trabalho principal dentro do contêiner.
WORKDIR /app

# Clona o repositório Git para o diretório de trabalho atual (/app).
# O '--mount=type=ssh' permite que o Docker utilize o ssh-agent da sua máquina host
# para autenticar com o Git, sem copiar a chave privada para a imagem.
# Presume-se que o repositório contém as pastas 'client' e 'movie-api'.
RUN git clone https://github.com/EduardoZava/average-alligator.git .

# Altera o diretório de trabalho para a subpasta 'movie-api' onde a aplicação FastAPI está localizada.
# Isso garante que os comandos de instalação de dependências e execução sejam executados no contexto correto.
WORKDIR /app/movie-api

# Instala as dependências do Python a partir do arquivo requirements.txt.
# Presume-se que 'requirements.txt' está dentro da pasta 'movie-api'.
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante do código da aplicação para o contêiner.
COPY . .

# Expõe a porta padrão que o FastAPI/Uvicorn usa (8000).
EXPOSE 8000

# Comando padrão para rodar a aplicação FastAPI usando Uvicorn.
# Presume-se que o arquivo principal da aplicação é 'main.py' e o objeto FastAPI é 'app'.
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]