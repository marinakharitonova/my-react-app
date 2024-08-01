import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation(['translation', 'about'])

  return (
    <div>
      {t('about')}

      <p>{t('about_test', { ns: 'about' })}</p>
    </div>
  )
}

export default About
