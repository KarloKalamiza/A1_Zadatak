FROM nginx:alpine

# Kopiraj statične fajlove
COPY index.html /usr/share/nginx/html/index.html
COPY healthz.json /usr/share/nginx/html/healthz

# Kopiraj konfiguraciju
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
