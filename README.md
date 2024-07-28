# Guia de Instalacion - Installation Guide
## Requisitos
Node version 20.16.0+

postgresql version 13.0.0+

### Clonar el repositorio - Clone the repository
```bash
git clone $url
```

### Instalar dependencias - Install dependencies
```bash
npm install
```

### Crear archivo y modificar archivo .env - Create and change .env file
```bash
cp .env.example .env
```

### Crea la base de datos - Create database
Para este paso debe tener instalado postgresql en su maquina | For this step you must have installed postgresql in your machine
```bash
npm run db:create
```
### Correr migraciones - Run migrations
```bash
npx prisma migrate dev
```

### Ejecutar el proyecto - Run the project
```bash
npm run start:dev
```
# Otros Comandos - Other Commands

### Revertir migracion - To rollback the database
```bash
npx prisma migrate reset
```

### Ejecutar los test e2e - Execute e2e tests

```bash
npm run test:e2e
```
