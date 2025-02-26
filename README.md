# Descripción General

El proyecto **“Docker Web API Project”** consta de dos servicios contenedorizados:

## 1. API REST en Node.js (Servicio API)

- Implementado con **Express**.
- Endpoints: `/api`, `/api/details`, `/api/info`, `/api/users`.
- Respuestas en **JSON** con mensajes y timestamps en español.

## 2. Servidor Web con NGINX (Servicio Web)

- Utiliza **NGINX** para servir una interfaz web estática con **Tailwind CSS**.
- Página web (`web.html`) con animaciones, efectos y iconografía SVG.
- Actúa como **proxy inverso** para la API.

## Arquitectura y Comunicación

## 1. Comunicación Interna mediante Redes

- **Red Docker 'adaitsnetwork'**:
  - Ambos servicios conectados a esta red.
  - NGINX se comunica con la API usando el alias `api`.

## 2. Exposición de Puertos

- **Servicio API**: Puerto **3000**.
- **Servicio Web (NGINX)**: Puerto **8080** en `http://localhost:8080`.

## 3. Proxy Inverso y Enrutamiento en NGINX

- **Configuración (default.conf)**:
  - **Raíz del Contenido**: `/usr/share/nginx/html`
  - **Proxy para la API**: Solicitudes `/api` redirigidas al servicio API.

## Estructura del Proyecto

```plaintext
docker-web-api-project
├── api
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
├── nginx
│   ├── Dockerfile
│   ├── default.conf
│   └── static
│       └── web.html
├── docker-compose.yml
└── README.md
```

## Funcionamiento Paso a Paso

## 1. Despliegue y Construcción

Para construir y desplegar el proyecto:

```sh
docker-compose up --build
```

Para detener y eliminar los contenedores, redes y volúmenes creados:

```sh
docker-compose down
```

Para construir las imágenes sin usar la caché:

```sh
docker-compose build --no-cache
```

Para iniciar los contenedores:

```sh
docker-compose up
```

## Descripción del Comando

- Construye las imágenes de la **API** y **NGINX**.
- Inicia los contenedores y los conecta a la red `adaitsnetwork`.
- Mapea los puertos: **3000** para la API y **8080** para NGINX.

---

## 2. Servicio API en Node.js

## 📌 Archivo `index.js`

- Inicializa **Express** y configura un servidor en el puerto **3000**.
- Implementa `getFormattedTimestamp()` para timestamps en **español**.

## 📌 Endpoints Implementados

- **`/api`** → Mensaje de bienvenida con timestamp.
- **`/api/details`** → Información de la API.
- **`/api/info`** → Información sobre la aplicación y fecha actual.
- **`/api/users`** → Lista de usuarios.

## 🛠️ Manejo de Errores

- Responde con un **mensaje adecuado** para rutas no definidas.

---

## 3. Servicio Web con NGINX

## 📌 Configuración y Contenido

### 🔹 **Dockerfile de NGINX**

- Copia la configuración (`default.conf`).
- Copia los archivos estáticos (`web.html` y recursos adicionales).

## 📌 Contenido de `web.html` (con Tailwind CSS)

### **Encabezado (header):**

- Iconos **SVG**.
- Título y menú de navegación con enlaces.

### **Contenido Principal (main):**

- Botones que invocan `llamarApi(route)` para peticiones `fetch`.
- Área de texto con **scroll** para mostrar resultados.

### **Pie de Página (footer):**

- Información de **derechos reservados** y créditos.

---

## 📌 Conclusión

El proyecto **“Docker Web API Project”**:

- Integra una **API REST en Node.js** con una **interfaz web moderna** servida por **NGINX**.
- Utiliza **Docker Compose** para facilitar despliegue, configuración de redes y gestión de servicios.
- Implementa un **proxy inverso con NGINX** para optimizar la comunicación entre servicios.
