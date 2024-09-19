import styles from './Navbar.module.scss'
import classNames from 'classnames'
import { useToggle } from 'shared/hooks/useToggle.ts'
import { useTranslation } from 'react-i18next'
import { selectAuthUser } from 'entities/User'
import { Button, ThemeButton } from 'shared/ui/Button'
import { useAppSelector } from 'shared/hooks/useStore.ts'
import { LoginModal, LogoutButton } from 'features/AuthByUserName'

interface NavbarProps {
  clasName?: string
}

export const Navbar = ({ clasName }: NavbarProps) => {
  const { t } = useTranslation()
  const { isOn, on, off } = useToggle(false)

  const authUser = useAppSelector(selectAuthUser)

  return (
    <>
      <div className={classNames(clasName, styles.Navbar)}>
        {authUser ? (
          <LogoutButton />
        ) : (
          <Button
            onClick={on}
            theme={ThemeButton.FULFILLED}
            className={styles.login}
          >
            {t('login')}
          </Button>
        )}
      </div>

      <LoginModal isOpen={isOn} onClose={off} />
    </>
  )
}
