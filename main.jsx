import { createRoot } from 'react-dom/client'
import App from './src/App'
import { FiltersProvider } from './src/context/filters.jsx'

createRoot(document.getElementById('app')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
