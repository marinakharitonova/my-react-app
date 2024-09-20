import './Loader.scss'
import classNames from 'classnames'

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames('lds-ellipsis', className)} data-testid={'Loader'}>
    <div />
    <div />
    <div />
    <div />
  </div>
)
