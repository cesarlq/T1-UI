# Guía de Navegación del Sidebar

## Problemas Resueltos

### 1. Problema con la ruta raíz (`/`) siempre activa
**Problema:** El botón de "Información Personal" con path `'/'` se mantenía activo incluso cuando se navegaba a otras rutas.

**Solución:** Se mejoró la lógica de detección de rutas activas para:
- Priorizar matches exactos sobre matches parciales
- Excluir la ruta raíz (`/`) de los matches parciales
- Solo activar la ruta raíz cuando el pathname sea exactamente `'/'`

### 2. Función personalizada de navegación
**Problema:** No había manera de interceptar o personalizar la navegación del sidebar.

**Solución:** Se agregó la prop `onCustomNavigate` que permite implementar lógica de navegación personalizada.

## Nuevas Props del Sidebar

### `currentPath` (string)
- **Descripción:** La ruta actual de la aplicación
- **Default:** `'/'`
- **Uso:** Reemplaza el uso interno de `usePathname()` de Next.js

```tsx
<Sidebar
  currentPath={pathname} // Desde usePathname() o tu router
  // ... otras props
/>
```

### `onPathChange` (function)
- **Descripción:** Callback que se ejecuta cuando el Sidebar necesita cambiar la ruta
- **Parámetros:** `(path: string) => void`
- **Uso:** Reemplaza el uso interno de `router.push()` de Next.js

```tsx
<Sidebar
  onPathChange={(path) => {
    router.push(path);
  }}
  // ... otras props
/>
```

### `onCustomNavigate` (function) - ¡NUEVA!
- **Descripción:** Función personalizada para manejar toda la navegación del sidebar
- **Parámetros:** `(path: string, context?: NavigationContext) => void`
- **Prioridad:** Si se proporciona, se usa en lugar de `onPathChange`

#### Contexto de Navegación
```typescript
interface NavigationContext {
  isCreateButton?: boolean;    // Navegación desde el botón "Crear"
  isMenuItem?: boolean;        // Navegación desde un item del menú
  menuItem?: MenuPath;         // El item del menú que se clickeó
  fromMobile?: boolean;        // Si la navegación viene desde móvil
}
```

## Ejemplos de Uso

### Uso Básico (Solo cambio de ruta)
```tsx
import { usePathname, useRouter } from 'next/navigation';
import { Sidebar } from '@t1-org/t1components';

function MyApp() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Sidebar
      currentPath={pathname}
      onPathChange={(path) => router.push(path)}
      menuPaths={menuPaths}
      // ... otras props
    />
  );
}
```

### Uso Avanzado (Navegación personalizada)
```tsx
import { usePathname, useRouter } from 'next/navigation';
import { Sidebar } from '@t1-org/t1components';

function MyApp() {
  const pathname = usePathname();
  const router = useRouter();

  const handleCustomNavigation = (path: string, context) => {
    console.log('Navegando a:', path, 'Contexto:', context);

    // Ejemplo: Validar navegación
    if (path === '/admin' && !user.isAdmin) {
      alert('No tienes permisos para acceder a esta sección');
      return;
    }

    // Ejemplo: Confirmación para ciertas rutas
    if (context?.isCreateButton) {
      const confirmed = confirm('¿Estás seguro de que quieres crear un nuevo elemento?');
      if (!confirmed) return;
    }

    // Ejemplo: Logging personalizado
    if (context?.isMenuItem) {
      analytics.track('sidebar_navigation', {
        path,
        menuItem: context.menuItem?.text,
        fromMobile: context.fromMobile
      });
    }

    // Realizar la navegación
    router.push(path);
  };

  return (
    <Sidebar
      currentPath={pathname}
      onCustomNavigate={handleCustomNavigation}
      menuPaths={menuPaths}
      // ... otras props
    />
  );
}
```

### Ejemplo con React Router
```tsx
import { useLocation, useNavigate } from 'react-router-dom';
import { Sidebar } from '@t1-org/t1components';

function MyApp() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string, context) => {
    // Lógica personalizada aquí
    if (context?.isCreateButton) {
      // Hacer algo especial para el botón crear
    }
    
    navigate(path);
  };

  return (
    <Sidebar
      currentPath={location.pathname}
      onCustomNavigate={handleNavigation}
      menuPaths={menuPaths}
      // ... otras props
    />
  );
}
```

### Ejemplo con Validaciones y Confirmaciones
```tsx
const handleCustomNavigation = async (path: string, context) => {
  // Validar permisos
  const hasPermission = await checkUserPermission(path);
  if (!hasPermission) {
    showErrorMessage('No tienes permisos para acceder a esta sección');
    return;
  }

  // Confirmar navegación para rutas sensibles
  const sensitiveRoutes = ['/delete', '/admin', '/settings'];
  if (sensitiveRoutes.some(route => path.includes(route))) {
    const confirmed = await showConfirmDialog(
      `¿Estás seguro de que quieres ir a ${path}?`
    );
    if (!confirmed) return;
  }

  // Guardar estado antes de navegar
  if (context?.fromMobile) {
    localStorage.setItem('lastMobileNavigation', path);
  }

  // Navegar
  router.push(path);
};
```

## Migración desde Versiones Anteriores

### Antes (dependía de Next.js internamente)
```tsx
<Sidebar
  menuPaths={menuPaths}
  // El sidebar usaba usePathname() y router.push() internamente
/>
```

### Después (control externo)
```tsx
<Sidebar
  currentPath={pathname}           // ¡REQUERIDO!
  onPathChange={(path) => router.push(path)}  // ¡REQUERIDO!
  menuPaths={menuPaths}
/>
```

### O con navegación personalizada
```tsx
<Sidebar
  currentPath={pathname}           // ¡REQUERIDO!
  onCustomNavigate={handleCustomNavigation}  // Reemplaza onPathChange
  menuPaths={menuPaths}
/>
```

## Notas Importantes

1. **`currentPath` es requerido:** El sidebar necesita saber la ruta actual para determinar qué elementos están activos.

2. **Prioridad de navegación:** Si se proporciona `onCustomNavigate`, se usa en lugar de `onPathChange`.

3. **Compatibilidad:** El sidebar sigue siendo compatible con React Router y otros sistemas de routing.

4. **Detección mejorada de rutas:** La nueva lógica maneja mejor los casos edge como la ruta raíz (`/`) y rutas anidadas.

5. **Contexto rico:** La función `onCustomNavigate` recibe información adicional sobre el tipo de navegación para permitir lógica más sofisticada.
