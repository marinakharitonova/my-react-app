import { useTranslation } from 'react-i18next'

export const Main = () => {
  const { t } = useTranslation()

  return <div>{t('main')}</div>
}
