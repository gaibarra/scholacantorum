# Deploy en producción: scholacantorum.online (Nginx + systemd)

## 1) Prerrequisitos del servidor

- Ubuntu/Debian con acceso sudo.
- DNS del dominio apuntando al IP del servidor:
  - `A` para `scholacantorum.online`
  - `A` para `www.scholacantorum.online`
- Node.js 20 LTS y npm instalados.

## 2) Clonar proyecto en ruta final

```bash
sudo mkdir -p /var/www
cd /var/www
sudo git clone <TU_REPO_GIT> scholacantorum
sudo chown -R "$USER":"$USER" /var/www/scholacantorum
cd /var/www/scholacantorum
npm ci
npm run build
```

## 3) Instalar y activar servicio systemd

Copiar el servicio desde el repo:

> Puerto de la app en producción: `4322` (para no chocar con `npm run dev`, que usa `4321`).

```bash
sudo cp /var/www/scholacantorum/deploy/systemd/scholacantorum.service /etc/systemd/system/scholacantorum.service
sudo systemctl daemon-reload
sudo systemctl enable scholacantorum
sudo systemctl start scholacantorum
sudo systemctl status scholacantorum --no-pager -l
```

Logs:

```bash
journalctl -u scholacantorum -f
```

Verifica puerto escuchando:

```bash
ss -ltnp | grep ':4322'
```

## 4) Instalar y activar Nginx

```bash
sudo apt update
sudo apt install -y nginx
sudo mkdir -p /var/www/certbot
sudo cp /var/www/scholacantorum/deploy/nginx/scholacantorum.online.conf /etc/nginx/sites-available/scholacantorum.online.conf
sudo ln -sf /etc/nginx/sites-available/scholacantorum.online.conf /etc/nginx/sites-enabled/scholacantorum.online.conf
sudo nginx -t
sudo systemctl reload nginx
```

## 5) Certificado SSL (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d scholacantorum.online -d www.scholacantorum.online
```

O usando el script del proyecto:

```bash
cd /var/www/scholacantorum
chmod +x scripts/certbot-setup.sh
sudo ./scripts/certbot-setup.sh
```

Verifica renovación automática:

```bash
systemctl list-timers | grep certbot
```

Si `certbot` falla por desafío HTTP:

- Verifica DNS `A` de ambos dominios al mismo IP del servidor.
- Asegura puertos `80` y `443` abiertos en firewall/security group.
- Revalida Nginx: `sudo nginx -t && sudo systemctl reload nginx`.

## 6) Deploy posteriores

Script incluido en el proyecto:

```bash
cd /var/www/scholacantorum
chmod +x scripts/deploy-prod.sh
./scripts/deploy-prod.sh
```

Este script:

- Actualiza código desde `origin/main`.
- Ejecuta `npm ci`.
- Ejecuta `npm run build`.
- Reinicia `scholacantorum.service`.
