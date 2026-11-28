import React, { useState } from 'react';

interface TreeHouseLogoProps {
  className?: string;
  size?: number;
  lightMode?: boolean;
  usePhoto?: boolean;
}

export const TreeHouseLogo: React.FC<TreeHouseLogoProps> = ({
  className = 'w-10 h-10',
  size = 40,
  lightMode = false,
  usePhoto = true,
}) => {
  const [imageError, setImageError] = useState(false);

  if (usePhoto && !imageError) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`relative rounded-full overflow-hidden border border-[#D49B4B] bg-[#0D261C] shrink-0 ${className}`}
      >
        <img
          src="/images/tree-house-logo.png"
          alt="Tree House Cafe"
          className="w-full h-full object-cover object-center"
          onError={() => setImageError(true)}
          loading="eager"
        />
      </div>
    );
  }

  const primaryStroke = '#D49B4B';
  const secondaryStroke = lightMode ? '#184E37' : '#256B4E';
  const fillDark = lightMode ? '#0D261C' : '#071610';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Tree House Cafe"
    >
      <circle cx="50" cy="50" r="46" stroke={primaryStroke} strokeWidth="2.5" />
      <circle
        cx="50"
        cy="50"
        r="41"
        stroke={secondaryStroke}
        strokeWidth="1.2"
        strokeDasharray="2.5 3.5"
      />
      <path
        d="M48 83 L48 55 C48 48 42 42 36 38"
        stroke={primaryStroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M52 83 L52 55 C52 48 58 42 64 38"
        stroke={primaryStroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M50 55 L50 40"
        stroke={primaryStroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="29"
        y1="46"
        x2="71"
        y2="46"
        stroke={primaryStroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect
        x="34"
        y="27"
        width="32"
        height="19"
        rx="1"
        fill={fillDark}
        stroke={primaryStroke}
        strokeWidth="1.8"
      />
      <polygon
        points="50,14 27,27 73,27"
        fill="#184E37"
        stroke={primaryStroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};
