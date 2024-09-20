import { useTranslation } from 'react-i18next'
import { PageWrapper } from 'widgets/PageWrapper/ui/PageWrapper.tsx'

const About = () => {
  const { t } = useTranslation(['translation', 'about'])

  return <PageWrapper dataTestid={'AboutPage'}>{t('about')}</PageWrapper>
}

export default About
