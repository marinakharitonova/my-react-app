import { ThemeButton } from 'shared/ui/Button/interface.ts'
import styles from 'widgets/Navbar/ui/Navbar.module.scss'
import { Button } from 'shared/ui/Button/Button.tsx'
import { useTranslation } from 'react-i18next'
import { useLogoutMutation } from 'features/AuthByUserName/model/api'
import { catchMutationError } from 'shared/helpers/catchMutationError.ts'

export const LogoutButton = () => {
  const { t } = useTranslation()

  const [logout, { isLoading }] = useLogoutMutation()

  const handleClick = () => {
    logout().unwrap().catch(catchMutationError)
  }

  return (
    <Button
      theme={ThemeButton.FULFILLED}
      className={styles.login}
      disabled={isLoading}
      onClick={handleClick}
    >
      {t('logout')}
    </Button>
  )
}
