import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation(['translation', 'about'])

  return <div>{t('about')}</div>
}

export default About
