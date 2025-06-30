# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# Kopiraj package i package-lock ili yarn.lock
COPY package*.json ./

# Instaliraj dependencies
RUN npm install

# Kopiraj ostatak koda
COPY . .

# Build aplikacije za produkciju
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

# Kopiraj build output u Nginx folder za statički sadržaj
COPY --from=build /app/dist /usr/share/nginx/html

# Kopiraj custom Nginx konfiguraciju ako želiš (nije obavezno)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
