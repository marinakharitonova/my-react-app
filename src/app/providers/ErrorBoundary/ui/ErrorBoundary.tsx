import React, { ErrorInfo, ReactNode, Suspense } from 'react'
import { AppCrash } from 'widgets/AppCrash'
import { Loader } from 'shared/ui/Loader/Loader.tsx'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Suspense fallback={<Loader />}>
          <AppCrash />
        </Suspense>
      )
    }

    return this.props.children
  }
}
