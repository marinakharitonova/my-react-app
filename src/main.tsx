import ReactDOM from 'react-dom/client'

import 'shared/config/i18n.ts'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from 'shared/themes/ui/ThemeProvider.tsx'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { App } from 'app/App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </Router>
)
