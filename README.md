# Challenge-drenv-oJesusPlitt
Este proyecto es una aplicación full stack que permite gestionar productos y asignar precios especiales. Desarrollado con React en el frontend y Node.js con Express en el backend, utilizando MongoDB como base de datos.
# Pasos para ejecutar localmente
Requisito previo
  tener Node.js instalado
# Clonar el repositorio
  git clone https://github.com/plitt25/Challenge-drenv-oJesusPlitt.git
  cd Challenge-drenv-oJesusPlitt
# Configurar Backend
1. entrar a la carpeta
   cd backend
2. Instalar dependencias
   npm install
3. iniciar servidor
   npm run dev
# Configurar Frontend
1. entrar a la carpeta
   cd frontend/frontend
2. Instalar dependencias
   npm install
3. iniciar servidor para mas agilidad usar yarn
   yarn dev
4. Ingresar al aplicativo por el local host
   http://localhost:5173/

# Justificacion de elecciones técnicas
  - Node.js y Express: Un Framework rapido y sencillo para creacion de API.
  - MongoDB y Mongoose: Una base de datos noSQL flexibe y de facil acceso.
  - React: Interfaces graficas eficientes para una experiencia de usuario interactiva y fluida.
  - Boostrap: Un diseño comodo a la vista y con una gran libreria para utilizar.
  - Vite: Una herramienta agil para el desarrollo del proyecto en react.

# Descripción de la estructura del proyecto
   
   tu-repo/
│   README.md
│   .gitignore
│
├── backend/
│   ├── src/
│   │   ├── models/       # Esquemas de MongoDB
│   │   ├── routes/       # Definición de rutas para el  API
│   │   ├── db.js         # Conexión a la base de datos
│   │   ├── index.js      # Archivo principal del backend
│   ├── package.json      # Dependencias del backend
│
├── frontend/
│   ├── src/
│   │   ├── components/   # Componentes reutilizables
│   │   ├── pages/        # Páginas principales
│   │   ├── App.jsx       # Componente principal
│   │   ├── main.jsx      # Punto de entrada de React
│   ├── public/           # Archivos estáticos
│   ├── package.json 


   
