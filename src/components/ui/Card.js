const Card = ({ 
  children, 
  className = '', 
  padding = 'md',
  shadow = 'md',
  hover = false,
  ...props 
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  }

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  }

  const baseClasses = 'bg-white rounded-lg border border-gray-200'
  const paddingClass = paddingClasses[padding] || paddingClasses.md
  const shadowClass = shadowClasses[shadow] || shadowClasses.md
  const hoverClass = hover ? 'hover:shadow-lg transition-shadow duration-200' : ''
  
  const combinedClasses = `${baseClasses} ${paddingClass} ${shadowClass} ${hoverClass} ${className}`

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  )
}

const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardTitle = ({ children, className = '', ...props }) => {
  return (
    <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${className}`} {...props}>
      {children}
    </h3>
  )
}

const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`text-gray-700 ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Title = CardTitle
Card.Content = CardContent
Card.Footer = CardFooter

export default Card