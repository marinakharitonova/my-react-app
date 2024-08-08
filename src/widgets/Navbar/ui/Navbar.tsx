import styles from './Navbar.module.scss'
import classNames from 'classnames'
import { Button } from 'shared/ui/Button/Button.tsx'
import { useToggle } from 'shared/hooks/useToggle.ts'
import { ThemeButton } from 'shared/ui/Button/interface.ts'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUserName/ui/LoginModal/LoginModal.tsx'
import { useAppSelector } from 'app/providers/StoreProvider'
import { selectAuthUser } from 'entities/User'
import { LogoutButton } from 'features/AuthByUserName/ui/LogoutButton/LogoutButton.tsx'

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
