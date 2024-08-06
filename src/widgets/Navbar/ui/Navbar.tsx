import styles from './Navbar.module.scss'
import classNames from 'classnames'
import { Button } from 'shared/ui/Button/Button.tsx'
import { Modal } from 'shared/ui/Modal/Modal.tsx'
import { useToggle } from 'shared/hooks/useToggle.ts'
import { ThemeButton } from 'shared/ui/Button/interface.ts'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  clasName?: string
}

export const Navbar = ({ clasName }: NavbarProps) => {
  const { t } = useTranslation()
  const { isOn, on, off } = useToggle(false)

  return (
    <>
      <div className={classNames(clasName, styles.Navbar)}>
        <Button
          onClick={on}
          theme={ThemeButton.FULFILLED}
          className={styles.login}
        >
          {t('login')}
        </Button>
      </div>

      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isOn} onClose={off}>
        123 321
      </Modal>
    </>
  )
}
