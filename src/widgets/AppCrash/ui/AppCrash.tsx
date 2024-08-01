import classNames from 'classnames'
import * as styles from './AppCrash.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button.tsx'

interface AppCrashProps {
  className?: string
}

export const AppCrash = ({ className }: AppCrashProps) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(className, styles.AppCrash)}>
      <p>{t('app_crash')}</p>
      <Button onClick={reloadPage}>{t('refresh_page')}</Button>
    </div>
  )
}
