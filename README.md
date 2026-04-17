# 🛍 Ecommerce App (React Native + Expo)

Aplicación móvil tipo ecommerce desarrollada con **React Native y Expo**, que permite a los usuarios registrarse, iniciar sesión, ver productos, agregarlos al carrito y crear nuevos productos.

---

## 📱 Funcionalidades

* 🔐 Registro de usuarios
* 🔑 Inicio de sesión
* 🛍 Visualización de productos
* ➕ Agregar productos al carrito
* 🗑 Eliminar productos (vista local)
* 🛒 Carrito de compras
* 👤 Perfil de usuario editable
* 📦 Creación de productos con imagen
* 🎨 Diseño moderno (modo oscuro + rosado)

---

## 🛠 Tecnologías utilizadas

* React Native
* Expo
* TypeScript
* Expo Router
* Expo Image Picker
* API REST (backend externo)

---

## 🚀 Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/TU-USUARIO/TU-REPO.git
```

2. Entra al proyecto:

```bash
cd TU-REPO
```

3. Instala dependencias:

```bash
npm install
```

4. Ejecuta la app:

```bash
npx expo start
```

---

## 📂 Estructura del proyecto

```
app/
 ├── index.tsx          # Login
 ├── register.tsx       # Registro
 ├── products.tsx       # Catálogo
 ├── product-form.tsx   # Crear productos
 ├── cart.tsx           # Carrito
 ├── profile.tsx        # Perfil

services/
 ├── auth.ts
 ├── products.ts
 ├── product-management.ts
```

---

## 🔐 Autenticación

La aplicación utiliza un sistema de autenticación basado en token, gestionado desde el backend.

---

## ⚠️ Notas

* El carrito es manejado localmente (no persistente)
* Algunas funciones dependen del backend (API)
* Se requiere conexión a internet para consumir servicios

---

## 📸 Capturas (opcional)

Puedes agregar aquí screenshots de tu app.

---

## 👨‍💻 Autor

Proyecto desarrollado por:

**Tu Nombre**

---

## 📄 Licencia

Este proyecto es de uso académico.
