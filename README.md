# PORTA - Cuadernos de Identidad Baionesa

Este repositorio contiene la landing page y la configuración del servidor Apache para el proyecto **PORTA**.

## Ejecución en Local

Para levantar el servidor web localmente, necesitas tener Docker instalado. Ejecuta el siguiente comando en la raíz del proyecto:

```bash
docker compose -f automation/docker-compose.yml up -d
```

La página estará disponible en [http://localhost:8080/](http://localhost:8080/).

## Estructura

- `porta_cuadernos_de_identidad_baionesa.html`: El archivo HTML principal.
- `.htaccess`: Reglas de redirección de Apache para que todas las peticiones apunten al HTML.
- `automation/`: Carpeta que contiene toda la configuración del servidor (`Dockerfile`, `docker-compose.yml`) y el script de capturas de pantalla (`screenshot.js`, `package.json`).

## Sistema de Capturas Automatizadas

Cada vez que subes un cambio a la rama principal de GitHub, GitHub Actions levantará el servidor, ejecutará Puppeteer y tomará una captura de pantalla a tamaño completo (`screenshot.png`). Luego actualizará el repositorio de manera automática con la nueva captura.

## Instrucciones para subir a GitHub por primera vez

Sigue estos comandos en tu terminal (en la carpeta `porta`):

```bash
# 1. Inicializar el repositorio Git local
git init

# 2. Añadir todos los archivos
git add .

# 3. Hacer el primer commit
git commit -m "Commit inicial con HTML, configuración de Apache y automatización de capturas"

# 4. Cambiar el nombre de la rama principal a 'main'
git branch -M main

# 5. Añadir el repositorio remoto (usando HTTPS)
git remote add origin https://github.com/titoalda/portamook.git

# 6. Subir el código a GitHub (se te pedirá tu usuario y token personal)
git push -u origin main
```
