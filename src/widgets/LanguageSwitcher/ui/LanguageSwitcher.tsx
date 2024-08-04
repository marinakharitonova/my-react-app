import classNames from 'classnames'
import styles from './LanguageSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button.tsx'

interface LanguageSwitcherProps {
  clasName?: string
}

const lngs: Record<string, { nativeName: string }> = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Русский' },
}

export const LanguageSwitcher = ({ clasName }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className={classNames(clasName, styles.LanguageSwitcher)}>
      {Object.keys(lngs).map(lng => (
        <Button key={lng} onClick={() => changeLanguage(lng)}>
          {lngs[lng].nativeName}
        </Button>
      ))}
    </div>
  )
}
