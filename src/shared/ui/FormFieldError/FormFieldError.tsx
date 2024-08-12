import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

export const FormFieldError = ({
  children,
  error,
}: {
  children: ReactNode
  error?: string | { msg: string; opts?: any }
}) => {
  const { t } = useTranslation()

  const isErrorShown =
    (typeof error === 'string' && error) ||
    (typeof error !== 'string' && error?.msg)

  return (
    <div>
      {children}

      {isErrorShown && (
        <p style={{ marginTop: '4px', color: 'var(--error-color)' }}>
          {/*@ts-ignore*/}
          {error?.msg ? t(error.msg, error?.opts) : t(error)}
        </p>
      )}
    </div>
  )
}
