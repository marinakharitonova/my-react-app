import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader.tsx'
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy.tsx'
import { useNavigate } from 'react-router-dom'
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
    navigate('/profile')
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
