import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormLazy } from 'features/AuthByUserName/ui/LoginForm/LoginFormLazy.tsx'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader.tsx'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} lazy>
    <Suspense fallback={<Loader />}>
      <LoginFormLazy onSuccess={onClose} />
    </Suspense>
  </Modal>
)
