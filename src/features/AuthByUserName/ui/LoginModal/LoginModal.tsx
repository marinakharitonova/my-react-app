import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader.tsx'
import { LoginFormLazy } from 'features/AuthByUserName/ui/LoginForm/LoginForm.lazy.tsx'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from 'app/providers/router'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const navigate = useNavigate()

  const handleSuccess = () => {
    onClose()
    navigate(AppRoutes.PROFILE)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormLazy onSuccess={handleSuccess} />
      </Suspense>
    </Modal>
  )
}