import AppIcon from './AppIcon';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const iconSizeMap = {
    sm: 'xs' as const,
    md: 'sm' as const,
    lg: 'md' as const
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <AppIcon size={iconSizeMap[size]} />
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold text-appOnPrimary hidden sm:inline`}>
          Aenigma
        </span>
      )}
    </div>
  );
};

export default Logo;
