import styles from './Navbar.module.scss'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink.tsx'

interface NavbarProps {
  clasName?: string
}

export const Navbar = ({ clasName }: NavbarProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(clasName, styles.Navbar)}>
      <div>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
          {t('main')}
        </AppLink>
        <AppLink to={'about'} theme={AppLinkTheme.SECONDARY}>
          {t('about')}
        </AppLink>
      </div>
    </div>
  )
}
