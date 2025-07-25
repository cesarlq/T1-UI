# T1 Components

> Una librería de componentes React universal construida con Material-UI, TypeScript y diseño atómico.

[![npm version](https://badge.fury.io/js/%40t1-org%2Ft1components.svg)](https://badge.fury.io/js/%40t1-org%2Ft1components)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-16.8+-blue.svg)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.0+-blue.svg)](https://mui.com/)

## 🚀 Instalación

```bash
# npm
npm install @t1-org/t1components

# yarn
yarn add @t1-org/t1components

# pnpm
pnpm add @t1-org/t1components
```

### Dependencias requeridas

Esta librería requiere las siguientes peer dependencies:

```bash
npm install react react-dom @mui/material @emotion/react @emotion/styled
```

### Dependencias opcionales

Para funcionalidades adicionales, puedes instalar:

```bash
# Para componentes de navegación
npm install react-router-dom

# Para iconos adicionales
npm install @mui/icons-material
```

## 🎯 Configuración básica

### 1. Importar estilos

```tsx
// En tu archivo principal (App.tsx o index.tsx)
import '@t1-org/t1components/styles';
```

### 2. Configurar el tema (opcional)

```tsx
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@t1-org/t1components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Tu aplicación */}
    </ThemeProvider>
  );
}
```

### 3. Uso básico

```tsx
import { Button, Card, CustomInput } from '@t1-org/t1components';

function MyComponent() {
  return (
    <Card>
      <CustomInput label="Nombre" />
      <Button variant="primary">Guardar</Button>
    </Card>
  );
}
```

## 📚 Componentes disponibles

### 🔬 Átomos (Atoms)

Componentes básicos y reutilizables:

#### **AmountInput**
```tsx
import { AmountInput } from '@t1-org/t1components';

<AmountInput
  value={1000}
  onChange={(value) => console.log(value)}
  currency="MXN"
  placeholder="0.00"
/>
```

#### **Button**
```tsx
import { Button } from '@t1-org/t1components';

<Button variant="primary" size="medium" onClick={() => {}}>
  Acción primaria
</Button>

<Button variant="secondary" disabled>
  Acción secundaria
</Button>
```

#### **CustomInput**
```tsx
import { CustomInput } from '@t1-org/t1components';

<CustomInput
  label="Email"
  type="email"
  placeholder="usuario@ejemplo.com"
  required
  error="Campo requerido"
/>
```

#### **Select**
```tsx
import { Select } from '@t1-org/t1components';

<Select
  options={[
    { value: 'mx', label: 'México' },
    { value: 'us', label: 'Estados Unidos' }
  ]}
  value="mx"
  onChange={(value) => console.log(value)}
  placeholder="Selecciona un país"
/>
```

#### **CheckBox & Radio**
```tsx
import { CheckBox, Radio, RadioGroup } from '@t1-org/t1components';

<CheckBox
  label="Acepto términos y condiciones"
  checked={true}
  onChange={(checked) => console.log(checked)}
/>

<RadioGroup
  value="option1"
  onChange={(value) => console.log(value)}
>
  <Radio value="option1" label="Opción 1" />
  <Radio value="option2" label="Opción 2" />
</RadioGroup>
```

#### **Switch**
```tsx
import { Switch, FormSwitch } from '@t1-org/t1components';

<Switch
  checked={true}
  onChange={(checked) => console.log(checked)}
  label="Notificaciones"
/>
```

#### **PhoneInputT1**
```tsx
import { PhoneInputT1 } from '@t1-org/t1components';

<PhoneInputT1
  value="+525512345678"
  onChange={(phone) => console.log(phone)}
  defaultCountry="MX"
/>
```

### 🧬 Moléculas (Molecules)

Componentes compuestos que combinan átomos:

#### **Table**
```tsx
import { Table } from '@t1-org/t1components';

const columns = [
  { key: 'name', label: 'Nombre' },
  { key: 'email', label: 'Email' },
  { key: 'status', label: 'Estado' }
];

const data = [
  { name: 'Juan', email: 'juan@ejemplo.com', status: 'Activo' }
];

<Table
  columns={columns}
  data={data}
  onRowClick={(row) => console.log(row)}
  loading={false}
/>
```

#### **CustomPagination**
```tsx
import { CustomPagination } from '@t1-org/t1components';

<CustomPagination
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => console.log(page)}
  showFirstLast={true}
/>
```

#### **Profile**
```tsx
import { Profile, MenuProfile } from '@t1-org/t1components';

<Profile
  name="Juan Pérez"
  email="juan@ejemplo.com"
  avatar="/avatar.jpg"
  role="Administrador"
/>

<MenuProfile
  user={{
    name: "Juan Pérez",
    email: "juan@ejemplo.com",
    avatar: "/avatar.jpg"
  }}
  onLogout={() => console.log('Cerrar sesión')}
  menuItems={[
    { label: 'Perfil', onClick: () => {} },
    { label: 'Configuración', onClick: () => {} }
  ]}
/>
```

#### **StoreSelector**
```tsx
import { StoreSelector } from '@t1-org/t1components';

<StoreSelector
  stores={[
    { id: '1', name: 'Tienda Centro', isActive: true },
    { id: '2', name: 'Tienda Norte', isActive: false }
  ]}
  selectedStoreId="1"
  onStoreChange={(storeId) => console.log(storeId)}
/>
```

#### **BalanceBanner**
```tsx
import { BalanceBanner } from '@t1-org/t1components';

<BalanceBanner
  balance={15000}
  currency="MXN"
  trend="up"
  trendPercent={12.5}
  period="vs mes anterior"
/>
```

#### **SimpleModalComponent**
```tsx
import { SimpleModalComponent } from '@t1-org/t1components';

<SimpleModalComponent
  open={true}
  onClose={() => setOpen(false)}
  title="Confirmar acción"
  maxWidth="sm"
>
  <p>¿Estás seguro de que quieres continuar?</p>
</SimpleModalComponent>
```

### 🦠 Organismos (Organisms)

Componentes complejos que forman secciones completas:

#### **Navbar**
```tsx
import { Navbar } from '@t1-org/t1components';

<Navbar
  logo="/logo.png"
  user={{
    name: "Juan Pérez",
    email: "juan@ejemplo.com",
    avatar: "/avatar.jpg"
  }}
  onMenuToggle={() => setMenuOpen(!menuOpen)}
  showSearch={true}
  onSearch={(query) => console.log(query)}
/>
```

#### **Sidebar**
```tsx
import { Sidebar } from '@t1-org/t1components';

const menuPaths = [
  {
    name: 'dashboard',
    text: 'Dashboard',
    path: '/dashboard',
    icon: 'dashboard'
  },
  {
    name: 'users',
    text: 'Usuarios',
    path: '/users',
    icon: 'users'
  }
];

<Sidebar
  menuPaths={menuPaths}
  currentPath="/dashboard"
  onPathChange={(path) => navigate(path)}
  isCollapsed={false}
  onToggleCollapse={() => setCollapsed(!collapsed)}
/>
```

#### **LayoutMenu**
```tsx
import { LayoutMenu, MenuProvider } from '@t1-org/t1components';

function App() {
  return (
    <MenuProvider>
      <LayoutMenu
        menuPaths={menuPaths}
        currentPath={pathname}
        onPathChange={(path) => router.push(path)}
        user={{
          name: "Juan Pérez",
          email: "juan@ejemplo.com"
        }}
      />
    </MenuProvider>
  );
}
```

### 📱 Vistas (Views)

Componentes de página completa:

#### **RestrictedAccess**
```tsx
import { RestrictedAccess } from '@t1-org/t1components';

<RestrictedAccess
  message="No tienes permisos para acceder a esta sección"
  showHomeButton={true}
  onHomeClick={() => navigate('/')}
/>
```

## 🎨 Iconos y recursos

### Iconos disponibles

```tsx
import { Icons, Logos, MenuIcon } from '@t1-org/t1components';

// Iconos generales
<Icons.ChevronDown />
<Icons.Search />
<Icons.User />

// Logos
<Logos.T1Logo />
<Logos.BrandLogo />

// Iconos de menú
<MenuIcon.Dashboard />
<MenuIcon.Users />
```

## 🧭 Navegación y routing

### Con React Router

```tsx
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { LayoutMenu } from '@t1-org/t1components';

function AppWithRouter() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <LayoutMenu
      currentPath={location.pathname}
      onPathChange={(path) => navigate(path)}
      menuPaths={menuPaths}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppWithRouter />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Con Next.js

```tsx
import { usePathname, useRouter } from 'next/navigation';
import { LayoutMenu } from '@t1-org/t1components';

function Layout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <LayoutMenu
      currentPath={pathname}
      onPathChange={(path) => router.push(path)}
      menuPaths={menuPaths}
    >
      {children}
    </LayoutMenu>
  );
}
```

### Navegación personalizada

```tsx
import { Sidebar } from '@t1-org/t1components';

const handleCustomNavigation = (path, context) => {
  console.log('Navegando a:', path, 'Contexto:', context);
  
  // Validaciones
  if (path === '/admin' && !user.isAdmin) {
    alert('No tienes permisos');
    return;
  }
  
  // Analytics
  if (context?.isMenuItem) {
    analytics.track('sidebar_navigation', { path });
  }
  
  // Navegar
  router.push(path);
};

<Sidebar
  currentPath={pathname}
  onCustomNavigate={handleCustomNavigation}
  menuPaths={menuPaths}
/>
```

## 🎛️ Context y estado global

### MenuProvider

```tsx
import { MenuProvider, useMenu } from '@t1-org/t1components';

function App() {
  return (
    <MenuProvider>
      <MyApp />
    </MenuProvider>
  );
}

function MyComponent() {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();
  
  return (
    <div>
      <button onClick={toggleMenu}>
        {isMenuOpen ? 'Cerrar' : 'Abrir'} menú
      </button>
    </div>
  );
}
```

## 🎨 Personalización y temas

### Usar el tema incluido

```tsx
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@t1-org/t1components';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

### Extender el tema

```tsx
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme as t1Theme } from '@t1-org/t1components';

const customTheme = createTheme({
  ...t1Theme,
  palette: {
    ...t1Theme.palette,
    primary: {
      main: '#your-color'
    }
  }
});

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

## 🔧 Configuración avanzada

### Configuración de Vite

Si usas Vite, asegúrate de configurar correctamente las dependencias:

```js
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['@t1-org/t1components']
  }
});
```

### Configuración de Webpack

Para proyectos con Webpack, agrega la configuración necesaria:

```js
// webpack.config.js
module.exports = {
  resolve: {
    alias: {
      '@t1-org/t1components': require.resolve('@t1-org/t1components')
    }
  }
};
```

## 📝 Ejemplos prácticos

### Dashboard completo

```tsx
import {
  LayoutMenu,
  MenuProvider,
  Table,
  Card,
  Button,
  CustomPagination,
  BalanceBanner
} from '@t1-org/t1components';

function Dashboard() {
  return (
    <MenuProvider>
      <LayoutMenu
        currentPath="/dashboard"
        onPathChange={(path) => router.push(path)}
        menuPaths={menuPaths}
      >
        <div className="p-6 space-y-6">
          <BalanceBanner
            balance={45000}
            currency="MXN"
            trend="up"
            trendPercent={15.2}
          />
          
          <Card>
            <Table
              columns={[
                { key: 'name', label: 'Nombre' },
                { key: 'status', label: 'Estado' },
                { key: 'amount', label: 'Monto' }
              ]}
              data={transactions}
              loading={loading}
            />
            <CustomPagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </Card>
        </div>
      </LayoutMenu>
    </MenuProvider>
  );
}
```

### Formulario completo

```tsx
import {
  Card,
  CustomInput,
  Select,
  PhoneInputT1,
  CheckBox,
  Button
} from '@t1-org/t1components';

function UserForm() {
  return (
    <Card>
      <form className="space-y-4">
        <CustomInput
          label="Nombre completo"
          required
          placeholder="Ingresa tu nombre"
        />
        
        <CustomInput
          label="Email"
          type="email"
          required
          placeholder="usuario@ejemplo.com"
        />
        
        <PhoneInputT1
          label="Teléfono"
          defaultCountry="MX"
        />
        
        <Select
          label="País"
          options={countries}
          placeholder="Selecciona tu país"
        />
        
        <CheckBox
          label="Acepto términos y condiciones"
          required
        />
        
        <div className="flex gap-4">
          <Button variant="secondary" type="button">
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </div>
      </form>
    </Card>
  );
}
```

## 🐛 Troubleshooting

### Problemas comunes

#### Error: "Module not found"
```bash
# Asegúrate de instalar todas las peer dependencies
npm install react react-dom @mui/material @emotion/react @emotion/styled
```

#### Estilos no se aplican
```tsx
// Asegúrate de importar los estilos
import '@t1-org/t1components/styles';
```

#### Navegación no funciona
```tsx
// Para React Router, asegúrate de estar dentro del Router
<BrowserRouter>
  <LayoutMenu />
</BrowserRouter>

// Para Next.js, usa los hooks correctos
const pathname = usePathname();
const router = useRouter();
```

#### TypeScript errors
```bash
# Asegúrate de tener TypeScript configurado correctamente
npm install --save-dev typescript @types/react @types/react-dom
```

## 📊 Compatibilidad

- **React**: 16.8+ (Hooks requeridos)
- **TypeScript**: 4.0+
- **Material-UI**: 5.0+
- **Node.js**: 16+

### Navegadores soportados

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contribución

### Desarrollo local

```bash
# Clonar el repositorio
git clone [repository-url]

# Instalar dependencias
npm install

# Ejecutar Storybook
npm run storybook

# Construir la librería
npm run build

# Ejecutar en modo desarrollo
npm run dev
```

### Scripts disponibles

- `npm run build` - Construir la librería para producción
- `npm run dev` - Modo desarrollo con hot reload
- `npm run storybook` - Ejecutar Storybook
- `npm run build-storybook` - Construir Storybook estático

## 📄 Licencia

[Especificar licencia]

## 🆘 Soporte

Para reportar bugs o solicitar features:
- [Issues en GitHub]
- [Documentación completa]
- [Ejemplos en Storybook]

---

**Desarrollado con ❤️ por el equipo T1**