
interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10'
  };

  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img 
        src="/lovable-uploads/531ed3bb-9999-4fdf-940c-e6f1ba71c700.png" 
        alt="Aenigma Logo" 
        className={sizeClasses[size]} 
      />
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold text-appOnPrimary`}>
          Aenigma
        </span>
      )}
    </div>
  );
};

export default Logo;
