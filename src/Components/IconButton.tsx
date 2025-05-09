import { FC } from 'react'
import { IconButtonProps } from '../Models/model-Buttons'
import classNames from 'classnames'

const sizeClasses = {
  sm: 'p-1',
  md: 'p-2',
  lg: 'p-3',
}

const IconButton: FC<IconButtonProps> = ({
  icon,
  onClick,
  size = 'md',
  className = '',
  ariaLabel,
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={classNames(
        'rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition shadow',
        sizeClasses[size],
        className
      )}
    >
      {icon}
    </button>
  )
}

export default IconButton