# SATORI — Landing Page

Agencia de IA y Automatizaciones. Landing page construida con React + TypeScript + Vite + TailwindCSS.

---

## ⚡ Setup rápido (copia y pega)

```bash
# 1. Clonar / descomprimir el proyecto
cd satori-landing

# 2. Instalar dependencias
npm install

# 3. Correr en desarrollo
npm run dev
# → http://localhost:5173
```

---

## 📁 Estructura del proyecto

```
satori-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── index.ts
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── index.ts
│   │   ├── Metrics/
│   │   │   ├── Metrics.tsx
│   │   │   └── index.ts
│   │   ├── Problem/
│   │   │   ├── Problem.tsx
│   │   │   └── index.ts
│   │   ├── Benefits/
│   │   │   ├── Benefits.tsx
│   │   │   └── index.ts
│   │   ├── HowItWorks/
│   │   │   ├── HowItWorks.tsx
│   │   │   └── index.ts
│   │   ├── Integrations/
│   │   │   ├── Integrations.tsx
│   │   │   └── index.ts
│   │   ├── Pricing/
│   │   │   ├── Pricing.tsx
│   │   │   └── index.ts
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.tsx
│   │   │   └── index.ts
│   │   ├── CTA/
│   │   │   ├── CTA.tsx
│   │   │   └── index.ts
│   │   └── Footer/
│   │       ├── Footer.tsx
│   │       └── index.ts
│   ├── constants/
│   │   └── index.ts          ← Todos los textos, precios y datos
│   ├── hooks/
│   │   └── useCounter.ts     ← Animación de contadores
│   ├── types/
│   │   └── index.ts          ← TypeScript interfaces
│   ├── App.tsx               ← Ensamblaje de secciones
│   ├── main.tsx              ← Entry point
│   └── index.css             ← Tailwind + estilos globales
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
├── vercel.json
└── netlify.toml
```

---

## 🔧 Configuración inicial (personalizar)

Todo el contenido está centralizado en `src/constants/index.ts`:

```ts
// Cambiar número de WhatsApp real:
export const WHATSAPP_URL = 'https://wa.me/573XXXXXXXXX?text=...'

// Cambiar link de agenda (Calendly, Cal.com, etc.):
export const DEMO_CALENDAR_URL = 'https://calendly.com/satori/demo'

// Métricas, planes, testimonios → todo editable sin tocar componentes
```

---

## 🛠️ Comandos

```bash
npm run dev       # Desarrollo con hot reload
npm run build     # Build de producción → /dist
npm run preview   # Preview del build local
npm run lint      # Linter TypeScript
```

---

## 🚀 Deploy en Vercel (recomendado)

### Opción A — CLI (más rápido)
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Opción B — GitHub + Vercel dashboard
1. Sube el proyecto a un repo en GitHub
2. Entra a [vercel.com](https://vercel.com) → "Add New Project"
3. Importa el repo → Vercel detecta Vite automáticamente
4. Click "Deploy" → listo en ~60 segundos

El archivo `vercel.json` ya está configurado correctamente.

---

## 🌐 Deploy en Netlify

### Opción A — CLI
```bash
npm run build
npx netlify-cli deploy --prod --dir=dist
```

### Opción B — Drag & drop
1. `npm run build`
2. Entra a [app.netlify.com](https://app.netlify.com) → "Add new site"
3. Arrastra la carpeta `/dist` al área de deploy

El archivo `netlify.toml` ya está configurado correctamente.

---

## 📦 Variables de entorno (opcional)

Si en el futuro integras analytics, CRM o APIs:

```bash
# Crear archivo .env en la raíz:
VITE_GA_ID=G-XXXXXXXXXX
VITE_HOTJAR_ID=XXXXXXX
```

Acceso en código: `import.meta.env.VITE_GA_ID`

---

## 🧩 Agregar nuevo componente

```bash
# Crear carpeta
mkdir src/components/MiSeccion

# Crear archivos
touch src/components/MiSeccion/MiSeccion.tsx
touch src/components/MiSeccion/index.ts
```

```ts
// MiSeccion/index.ts
export { MiSeccion } from './MiSeccion'

// App.tsx — importar y agregar en el orden correcto
import { MiSeccion } from '@/components/MiSeccion'
```

---

## 📄 Licencia

Proyecto privado — SATORI © 2026
