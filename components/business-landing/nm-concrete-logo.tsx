import OptimizedImage from '@/components/ui/optimized-image';

interface NMConcreteLogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
  variant?: 'header' | 'footer' | 'standalone';
}

export default function NMConcreteLogo({ 
  className = '', 
  width = 40, 
  height = 40, 
  showText = true,
  variant = 'standalone'
}: NMConcreteLogoProps) {
  const logoPath = '/images/nm-concrete-coating-pros/logo.png';
  
  // Fallback to a styled text logo if the image doesn't exist
  const fallbackLogo = (
    <div className={`bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center ${className}`}>
      <span className="text-white font-bold text-lg">
        NM
      </span>
    </div>
  );

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <OptimizedImage
          src={logoPath}
          alt="NM Concrete Coating Pros Logo"
          width={width}
          height={height}
          className={`rounded-lg ${variant === 'header' ? 'shadow-sm' : 'shadow-md'}`}
          quality={90}
          fallback={fallbackLogo}
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-gray-900 ${variant === 'header' ? 'text-lg' : 'text-xl'}`}>
            NM Concrete Coating Pros
          </span>
          {variant === 'header' && (
            <span className="text-xs text-gray-500">Concrete Coating Services</span>
          )}
        </div>
      )}
    </div>
  );
}
