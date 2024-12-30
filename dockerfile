# Etapa 1: Construção do projeto Angular
FROM node:18.17.0 AS build

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto para o contêiner
COPY . .

# Construa o projeto Angular
RUN npm run build --prod

# Etapa 2: Servir os arquivos estáticos com Nginx
FROM nginx:stable-alpine

# Copie os arquivos de build para o diretório do Nginx
COPY --from=build /app/dist/angular-ecommerce /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# Inicie o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
