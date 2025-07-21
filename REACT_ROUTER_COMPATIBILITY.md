# React Router Compatibility

This component library is designed to work with or without React Router. The navigation components will automatically detect if React Router is available and use it, or fall back to native browser navigation.

## With React Router

If your project uses React Router, the components will automatically use `useLocation()` and other React Router hooks for navigation:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LayoutMenu } from '@t1-org/t1components';

function App() {
  return (
    <Router>
      <LayoutMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

## Without React Router

If your project doesn't use React Router, the components will fall back to using the native browser location:

```jsx
import { LayoutMenu } from '@t1-org/t1components';

function App() {
  return (
    <div>
      <LayoutMenu />
      {/* Your app content */}
    </div>
  );
}
```

## Installation

React Router is an optional peer dependency. You can install it if you need it:

```bash
npm install react-router-dom
# or
yarn add react-router-dom
```

If you don't install React Router, the components will still work but will use browser navigation instead of client-side routing.

## Components Affected

The following components have React Router integration:

- `LayoutMenu`
- `ItemLink`
- `Navbar`
- `Sidebar`

These components will automatically detect the presence of React Router and adapt their behavior accordingly.
