import styles from 'widgets/Navbar/ui/Navbar.module.scss'

import { useTranslation } from 'react-i18next'
import { useLogoutMutation } from '../../model/api/index.ts'
import { catchMutationError } from 'shared/helpers/catchMutationError.ts'
import { loggedOut } from 'entities/User'
import { Button, ThemeButton } from 'shared/ui/Button'
import { useAppDispatch } from 'shared/hooks/useStore.ts'

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
