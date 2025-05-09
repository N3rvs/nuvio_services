import { FC} from 'react'
import classNames from 'classnames'
import { GlassButtonProps } from '../Models/model-Buttons'


const sizeClasses = {
    sm: 'px-4 py-1 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-3 text-lg',
  }
  
  const GlassButton: FC<GlassButtonProps> = ({
    children,
    onClick,
    className = '',
    type = 'button',
    size = 'md',
    iconLeft,
    iconRight,
  }) => {
    return (
        
      <button
        type={type}
        onClick={onClick}
        className={classNames(
          'rounded-full text-white bg-black/60 backdrop-blur-sm shadow-md hover:bg-black/80 transition inline-flex items-center gap-2',
          sizeClasses[size],
          className
        )}
      >
        {iconLeft && <span className="inline-flex items-center">{iconLeft}</span>}
        {children}
        {iconRight && <span className="inline-flex items-center">{iconRight}</span>}
      </button>
    )
  }
  
  export default GlassButton