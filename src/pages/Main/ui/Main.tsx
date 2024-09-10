import { useTranslation } from 'react-i18next'
import { PageWrapper } from 'widgets/PageWrapper/ui/PageWrapper.tsx'

export const Main = () => {
  const { t } = useTranslation()

  return <PageWrapper>{t('main')}</PageWrapper>
}
