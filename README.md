# Restaurante Web Service API

Este proyecto es una API RESTful desarrollada para gestionar el menú, las órdenes y el estado de las mesas de un restaurante. Fue creado como parte del trabajo académico para la materia **Arquitectura de Software** en la **Universidad Pontificia Bolivariana**.

**Autores:**  
- Mariana Osorio Rojas  
- Sebastián Restrepo Yepes  

## Tabla de Contenidos
- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Endpoints](#endpoints)
  - [Menú](#menú)
  - [Órdenes](#órdenes)
  - [Mesas](#mesas)
- [Cómo Usarlo](#cómo-usarlo)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Notas Adicionales](#notas-adicionales)

## Características
- Consultar todos los ítems del menú y detalles de ítems específicos.
- Crear, listar y consultar órdenes.
- Consultar y actualizar el estado de las mesas.

## Requisitos Previos
- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [Postman](https://www.postman.com/) para probar los endpoints (opcional)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/restaurante-web-service.git
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd restaurante-web-service
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución

Inicia el servidor ejecutando el siguiente comando:

```bash
node app.js
```

El servidor se ejecutará en `http://localhost:3000`.

## Endpoints

### Menú

1. **Obtener todos los ítems del menú**
   - **URL:** `/menu`
   - **Método:** GET
   - **Respuesta:** Lista de ítems del menú en formato JSON.

2. **Obtener un ítem específico del menú**
   - **URL:** `/menu/:id`
   - **Método:** GET
   - **Parámetros:** `id` (ID del ítem en el menú)
   - **Respuesta:** Detalles del ítem en formato JSON.

### Órdenes

1. **Crear una nueva orden**
   - **URL:** `/orders`
   - **Método:** POST
   - **Body:** 
     ```json
     {
       "items": [
         { "id": 1, "quantity": 2 },
         { "id": 3, "quantity": 1 }
       ],
       "total": 34.97,
       "tableNumber": 5
     }
     ```
   - **Respuesta:** La orden creada en formato JSON.

2. **Obtener todas las órdenes**
   - **URL:** `/orders`
   - **Método:** GET
   - **Respuesta:** Lista de todas las órdenes en formato JSON.

### Mesas

1. **Obtener el estado de todas las mesas**
   - **URL:** `/tables`
   - **Método:** GET
   - **Respuesta:** Lista del estado de todas las mesas en formato JSON.

2. **Actualizar el estado de una mesa**
   - **URL:** `/tables/:tableNumber`
   - **Método:** PUT
   - **Parámetros:** `tableNumber` (número de la mesa)
   - **Body:** 
     ```json
     { "status": "Ocupada" }
     ```
   - **Respuesta:** Estado actualizado de la mesa en formato JSON.

## Cómo Usarlo

Para interactuar con la API, sigue estos pasos:

1. **Asegúrate de que el servidor esté en ejecución** ejecutando `node app.js`.
2. **Abre Postman** u otra herramienta para enviar solicitudes HTTP.
3. **Prueba los endpoints**:
   - Para obtener el menú, realiza una solicitud **GET** a `http://localhost:3000/menu`.
   - Para consultar un ítem específico del menú, usa **GET** con `http://localhost:3000/menu/:id`, donde `:id` es el ID del ítem.
   - Para crear una orden, realiza una solicitud **POST** a `http://localhost:3000/orders` e incluye el JSON de la orden en el cuerpo de la solicitud.
   - Para ver el estado de todas las mesas, envía una solicitud **GET** a `http://localhost:3000/tables`.
   - Para cambiar el estado de una mesa, usa **PUT** en `http://localhost:3000/tables/:tableNumber` con el JSON del nuevo estado.

Postman permite observar los datos JSON que se reciben o envían, facilitando la verificación de cada endpoint.

## Tecnologías Utilizadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

## Notas Adicionales
Este proyecto es un ejemplo básico de un servicio web RESTful y se puede ampliar para incluir autenticación, menús dinámicos y más funcionalidades.  
```
