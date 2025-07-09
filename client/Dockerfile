# Etapa 1: Build da aplicação React
FROM node:18-alpine AS build

RUN apk add --no-cache git

# Defina o diretório de trabalho
WORKDIR /app

# Clone o repositório do Git (substitua pela URL do seu repositório)
# git@github.com:EduardoZava/average-alligator.git
ARG REPO_URL

RUN git clone ${REPO_URL} .

WORKDIR /app/client

# Instale as dependências
RUN npm install

# Faça o build da aplicação
RUN npm run build

# Etapa 2: Servir a aplicação com um servidor estático
FROM nginx:alpine

# Copie os arquivos de build do React para o Nginx
COPY --from=build /app/client/build /usr/share/nginx/html

# Copie configuração customizada do Nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta padrão do Nginx
EXPOSE 80

# Comando padrão para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
