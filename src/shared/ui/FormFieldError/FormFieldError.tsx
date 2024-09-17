import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

export const FormFieldError = ({
  children,
  error,
  dataTestId,
}: {
  dataTestId?: string
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
        <p
          style={{ marginTop: '4px', color: 'var(--error-color)' }}
          data-testid={`${dataTestId}.ErrorText`}
        >
          {/*@ts-ignore*/}
          {error?.msg ? t(error.msg, error?.opts) : t(error)}
        </p>
      )}
    </div>
  )
}
