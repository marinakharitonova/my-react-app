import classNames from 'classnames'
import cls from './ContentLoader.module.scss'
import { Loader } from 'shared/ui/Loader/Loader.tsx'
import { useTranslation } from 'react-i18next'
import { ReactNode } from 'react'

export const ContentLoader = ({
  isLoading,
  isError,
  children,
  className,
}: {
  isLoading?: boolean
  isError?: boolean
  children: ReactNode
  className?: string
}) => {
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div
        className={classNames(
          cls.ContentLoader,
          { [cls.loading]: true },
          className
        )}
      >
        <Loader />
      </div>
    )
  }

  if (isError) {
    return (
      <div className={classNames(cls.ContentLoader, className, cls.error)}>
        <p>{t('fetching_error')}</p>
      </div>
    )
  }

  return children
}
