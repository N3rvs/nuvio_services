import { ReactNode } from 'react'


export interface GlassButtonProps {
    children: ReactNode
    onClick?: () => void
    className?: string
    type?: 'button' | 'submit' | 'reset'
    size?: 'sm' | 'md' | 'lg'
    iconLeft?: ReactNode
    iconRight?: ReactNode
    variant:string
  }

  export interface IconButtonProps {
    icon: React.ReactNode
    onClick?: () => void
    size?: 'sm' | 'md' | 'lg'
    className?: string
    ariaLabel: string
  }