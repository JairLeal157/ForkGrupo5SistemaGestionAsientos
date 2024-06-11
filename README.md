# Sistema de Reservas para un Hotel
Esta es una aplicación web diseñada para gestionar las reservas de un hotel. Los usuarios pueden iniciar sesión, ver las habitaciones disponibles para reservar, gestionar sus reservas activas y acceder al historial de reservas pasadas. Además, tienen la opción de cancelar sus reservas si así lo desean.

Los administradores cuentan con secciones especiales donde pueden visualizar las transacciones realizadas, crear habitaciones, ver los usuarios existentes y modificar sus permisos.

link despliegue: https://grupo5sistemagestionasientos-asientos.vercel.app/

AdminEmail: admin@example.com

AdminPassword: Admin123$

## Características

### Para Usuarios:
- Iniciar sesión: Accede con tu cuenta de usuario.
- Ver habitaciones disponibles: Explora las habitaciones disponibles para reservar.
- Gestión de reservas: Visualiza tus reservas activas y el historial de reservas.
- Cancelar reservas: Cancela tus reservas si es necesario.

### Para Administradores:
- Iniciar sesión: Accede con tu cuenta de usuario.
- Listado de transacciones: Visualiza todas las transacciones realizadas.
- Gestión de habitaciones: Crea y administra las habitaciones disponibles en el hotel.
- Gestión de usuarios: Visualiza los usuarios registrados y modifica sus permisos.

## Tecnologías Utilizadas

- Next.js: Framework de React para desarrollo de aplicaciones web.
- Tailwind CSS: Framework CSS para estilizar la aplicación.
- GraphQL: Lenguaje de consulta para la API.

## Instalación:

1. Clonar el repositorio:
   
```
git clone https://github.com/tu-usuario/sistema-reservas-hotel.git
```

2. Navega al directorio del proyecto:

```
cd sistema-reservas-hotel
```

3. Crear un archivo .env con las variables de entorno del proyecto

```  
DATABASE_URL =
AUTH0_DOMAIN =
AUTH0_CLIENT_ID = 
AUTH0_CLIENT_SECRET = 
AUTH0_CLIENT_ID_ADMIN = 
AUTH0_CLIENT_SECRET_ADMIN = 
```

4. Instalar las dependecias del proyecto

```
yarn install
```

5. Ejecutar el proyecto en modo desarrollo

```
yarn dev
```

## Navegación

Los usuarios podran acceder a distintas rutas dependiendo de su rol (Administrador o Usuario)

### Rutas del Administrador
Los administradores tienen acceso a las siguientes rutas en la aplicación:

- #### Habitaciones
  Descripción: Gestión de las habitaciones del hotel.

  Ruta: /dashboard/habitaciones

- #### Reservas
  Descripción: Visualización y gestión de reservas.

  Ruta: /dashboard/reservas

 
 - #### Transacciones
  Descripción: Visualización de las transacciones realizadas.

  Ruta: /dashboard/transacciones

- #### Check-in / Check-out
  Descripción: Gestión de procesos de check-in y check-out.

  Ruta: /dashboard/reservas/checkinout

- #### Usuarios
  Descripción: Visualización y modificación de los usuarios registrados y sus permisos.
  
  Ruta: /dashboard/usuarios

### Rutas del Usuario
Los usuarios tienen acceso a las siguientes rutas en la aplicación:

- #### Habitaciones
  Descripción: Visualización de las habitaciones disponibles para reserva.
  
  Ruta: /dashboard/habitaciones

- #### Reservas
  Descripción: Gestión de reservas activas y historial de reservas.
  
  Ruta: /dashboard/reservas



