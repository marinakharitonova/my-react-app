import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader.tsx'
import { LoginFormLazy } from 'features/AuthByUserName/ui/LoginForm/LoginForm.lazy.tsx'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from 'app/providers/router'
import { useTranslation } from 'react-i18next'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleSuccess = () => {
    onClose()
    navigate(AppRoutes.PROFILE)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <h2 style={{ marginBottom: '20px' }}>{t('login')}</h2>

      <Suspense fallback={<Loader />}>
        <LoginFormLazy onSuccess={handleSuccess} />
      </Suspense>
    </Modal>
  )
}
