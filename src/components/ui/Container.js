const Container = ({ 
  children, 
  className = '', 
  size = 'default',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-8xl',
    xl: 'max-w-9xl',
    full: 'max-w-full',
  }

  const baseClasses = 'mx-auto px-4 sm:px-6 lg:px-8'
  const sizeClass = sizeClasses[size] || sizeClasses.default
  
  const combinedClasses = `${baseClasses} ${sizeClass} ${className}`

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  )
}

export default Container