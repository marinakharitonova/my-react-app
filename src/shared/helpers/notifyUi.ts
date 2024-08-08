import { toast, ToastOptions } from 'react-toastify'

export const notifyUi = (message: string, opts: ToastOptions = {}) => {
  const { type = 'default', ...rest } = opts

  if (type === 'default') {
    toast(message, rest)
  } else {
    toast[type](message, rest)
  }
}
