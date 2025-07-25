import Link from 'next/link'
import { forwardRef } from 'react'

const buttonVariants = {
  default: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500',
  ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
}

const buttonSizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
}

const Button = forwardRef(({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '', 
  href,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = buttonVariants[variant] || buttonVariants.default
  const sizeClasses = buttonSizes[size] || buttonSizes.md
  
  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`

  const buttonContent = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </>
  )

  if (href) {
    return (
      <Link 
        href={href} 
        className={combinedClasses}
        ref={ref}
        {...props}
      >
        {buttonContent}
      </Link>
    )
  }

  return (
    <button
      ref={ref}
      type={type}
      className={combinedClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {buttonContent}
    </button>
  )
})

Button.displayName = 'Button'

export default Button