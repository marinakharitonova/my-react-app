import { ThemeButton } from 'shared/ui/Button/interface.ts'
import styles from 'widgets/Navbar/ui/Navbar.module.scss'
import { Button } from 'shared/ui/Button/Button.tsx'
import { useTranslation } from 'react-i18next'
import { useLogoutMutation } from 'features/AuthByUserName/model/api'
import { catchMutationError } from 'shared/helpers/catchMutationError.ts'
import { useAppDispatch } from 'app/providers/StoreProvider'
import { loggedOut } from 'entities/User'

export const LogoutButton = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const [logout, { isLoading }] = useLogoutMutation()

  const handleClick = () => {
    logout()
      .unwrap()
      .then(() => dispatch(loggedOut()))
      .catch(catchMutationError)
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
