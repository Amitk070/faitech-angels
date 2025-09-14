import React from 'react';

interface FaithTechLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const FaithTechLogo: React.FC<FaithTechLogoProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main geometric shape - stylized F and T combined */}
        <g>
          {/* Orange triangle (top left) */}
          <path
            d="M10 10 L30 10 L20 30 Z"
            fill="#FF6B35"
          />
          
          {/* Yellow quadrilateral */}
          <path
            d="M20 30 L40 30 L35 50 L15 50 Z"
            fill="#FFD23F"
          />
          
          {/* Green triangle */}
          <path
            d="M35 50 L55 50 L45 70 Z"
            fill="#06D6A0"
          />
          
          {/* Light blue triangle */}
          <path
            d="M45 70 L65 70 L55 90 Z"
            fill="#118AB2"
          />
          
          {/* Dark blue triangle (rightmost point) */}
          <path
            d="M55 90 L75 90 L65 70 Z"
            fill="#073B4C"
          />
          
          {/* Red horizontal bar */}
          <rect
            x="5"
            y="75"
            width="20"
            height="8"
            fill="#E63946"
          />
          
          {/* Darker red triangle */}
          <path
            d="M5 83 L15 83 L10 93 Z"
            fill="#D62828"
          />
          
          {/* Purple/magenta triangle */}
          <path
            d="M15 50 L25 50 L20 70 Z"
            fill="#7209B7"
          />
          
          {/* Golden connecting lines */}
          <line
            x1="50"
            y1="20"
            x2="70"
            y2="10"
            stroke="#F77F00"
            strokeWidth="2"
          />
          <line
            x1="20"
            y1="60"
            x2="5"
            y2="80"
            stroke="#F77F00"
            strokeWidth="2"
          />
          
          {/* Data points and connectivity indicators */}
          <circle cx="5" cy="15" r="2" fill="#118AB2" />
          <circle cx="5" cy="25" r="2" fill="#118AB2" />
          <line
            x1="5"
            y1="15"
            x2="5"
            y2="25"
            stroke="#118AB2"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <line
            x1="3"
            y1="30"
            x2="7"
            y2="30"
            stroke="#118AB2"
            strokeWidth="1"
          />
          <line
            x1="5"
            y1="28"
            x2="5"
            y2="32"
            stroke="#118AB2"
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
  );
};

export default FaithTechLogo;
