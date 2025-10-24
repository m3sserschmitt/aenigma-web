interface AppIconProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const AppIcon = ({ size = 'md', className = '' }: AppIconProps) => {
  const sizeClasses = {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-32 w-32'
  };

  return (
    <img 
      src="/icon.png" 
      alt="Aenigma Logo" 
      className={`rounded-lg ${sizeClasses[size]} ${className}`}
    />
  );
};

export default AppIcon;
