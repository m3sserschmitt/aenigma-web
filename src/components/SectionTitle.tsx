
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  icon, 
  centered = true, 
  className = '' 
}: SectionTitleProps) => {
  const alignmentClass = centered ? 'text-center' : '';
  const justifyClass = centered ? 'justify-center' : 'justify-start';

  return (
    <div className={`${alignmentClass} ${className}`}>
      {icon && (
        <div className={`flex items-center ${justifyClass} mb-4`}>
          {icon}
          <h2 className="text-4xl font-bold text-appOnPrimary ml-3">
            {title}
          </h2>
        </div>
      )}
      {!icon && (
        <h2 className="text-4xl font-bold mb-4 text-appOnPrimary">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-xl text-appOnBackground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
