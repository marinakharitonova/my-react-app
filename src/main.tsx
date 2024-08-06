import ReactDOM from 'react-dom/client'

import 'shared/config/i18n.ts'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from 'shared/themes/ui/ThemeProvider.tsx'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { App } from 'app/App.tsx'
import { StoreProvider } from 'app/providers/StoreProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <Router>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </Router>
  </StoreProvider>
)
