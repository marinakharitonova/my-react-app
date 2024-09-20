import classNames from 'classnames'
import styles from './NotFound.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundProps {
  className?: string
}

export const NotFound = ({ className }: NotFoundProps) => {
  const { t } = useTranslation()

  return (
    <div
      className={classNames(className, styles.NotFound)}
      data-testid={'NotFoundPage'}
    >
      {t('not_found')}
    </div>
  )
}
