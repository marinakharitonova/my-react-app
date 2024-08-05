import styles from './Navbar.module.scss'
import classNames from 'classnames'

interface NavbarProps {
  clasName?: string
}

export const Navbar = ({ clasName }: NavbarProps) => {
  return <div className={classNames(clasName, styles.Navbar)}></div>
}
