
interface SecurityFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SecurityFeature = ({ icon, title, description }: SecurityFeatureProps) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-appPrimary/20 p-2 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-appOnPrimary">{title}</h3>
        <p className="text-appOnBackground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SecurityFeature;
