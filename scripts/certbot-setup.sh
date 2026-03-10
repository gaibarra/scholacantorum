#!/usr/bin/env bash
set -euo pipefail

DOMAIN="scholacantorum.online"
WWW_DOMAIN="www.scholacantorum.online"
NGINX_SITE="/etc/nginx/sites-available/scholacantorum.online.conf"

if [[ "${EUID}" -ne 0 ]]; then
  echo "Este script requiere sudo/root."
  echo "Ejecuta: sudo ./scripts/certbot-setup.sh"
  exit 1
fi

if [[ ! -f "$NGINX_SITE" ]]; then
  echo "No existe la config Nginx esperada: $NGINX_SITE"
  echo "Primero instala la configuración desde deploy/nginx/scholacantorum.online.conf"
  exit 1
fi

apt update
apt install -y certbot python3-certbot-nginx

nginx -t
systemctl reload nginx

certbot --nginx -d "$DOMAIN" -d "$WWW_DOMAIN" --non-interactive --agree-tos --redirect -m "admin@$DOMAIN"

systemctl list-timers | grep certbot || true

echo "Certbot configurado para $DOMAIN y $WWW_DOMAIN"
