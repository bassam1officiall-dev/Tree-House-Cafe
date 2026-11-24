import React from 'react';

interface TreeHouseLogoProps {
  className?: string;
  size?: number;
  lightMode?: boolean;
}

export const TreeHouseLogo: React.FC<TreeHouseLogoProps> = ({
  className = 'w-10 h-10',
  size = 44,
  lightMode = false,
}) => {
  const primaryStroke = lightMode ? '#D49B4B' : '#D49B4B';
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
      aria-label="Tree House Cafe Logo"
    >
      {/* Outer botanical circle */}
      <circle cx="50" cy="50" r="46" stroke={primaryStroke} strokeWidth="2.5" />
      <circle
        cx="50"
        cy="50"
        r="41"
        stroke={secondaryStroke}
        strokeWidth="1.2"
        strokeDasharray="2.5 3.5"
      />

      {/* Trunk and stylized branching */}
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

      {/* Tree house platform */}
      <line
        x1="29"
        y1="46"
        x2="71"
        y2="46"
        stroke={primaryStroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="33"
        y1="49.5"
        x2="67"
        y2="49.5"
        stroke={secondaryStroke}
        strokeWidth="1.5"
      />

      {/* House Body */}
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

      {/* Classic Architectural Grid Windows (Left & Right) */}
      <rect
        x="38"
        y="31"
        width="9"
        height="10"
        fill="#123326"
        stroke={primaryStroke}
        strokeWidth="1.2"
      />
      <line x1="42.5" y1="31" x2="42.5" y2="41" stroke={primaryStroke} strokeWidth="0.8" />
      <line x1="38" y1="36" x2="47" y2="36" stroke={primaryStroke} strokeWidth="0.8" />

      <rect
        x="53"
        y="31"
        width="9"
        height="10"
        fill="#123326"
        stroke={primaryStroke}
        strokeWidth="1.2"
      />
      <line x1="57.5" y1="31" x2="57.5" y2="41" stroke={primaryStroke} strokeWidth="0.8" />
      <line x1="53" y1="36" x2="62" y2="36" stroke={primaryStroke} strokeWidth="0.8" />

      {/* Gable Roof */}
      <polygon
        points="50,14 27,27 73,27"
        fill="#184E37"
        stroke={primaryStroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Warm amber light glow at roof peak */}
      <circle cx="50" cy="13" r="2.2" fill="#D49B4B" />

      {/* Delicate leaves */}
      <path
        d="M21 35 C23 29, 27 31, 27 31 C27 31, 26 37, 21 35 Z"
        fill="#D49B4B"
        opacity="0.9"
      />
      <path
        d="M79 35 C77 29, 73 31, 73 31 C73 31, 74 37, 79 35 Z"
        fill="#D49B4B"
        opacity="0.9"
      />
      <path
        d="M24 57 C21 52, 25 48, 25 48 C25 48, 28 54, 24 57 Z"
        fill="#D49B4B"
        opacity="0.85"
      />
      <path
        d="M76 57 C79 52, 75 48, 75 48 C75 48, 72 54, 76 57 Z"
        fill="#D49B4B"
        opacity="0.85"
      />

      {/* Central ladder lines */}
      <line x1="47.5" y1="50" x2="47.5" y2="69" stroke={primaryStroke} strokeWidth="1.2" />
      <line x1="52.5" y1="50" x2="52.5" y2="69" stroke={primaryStroke} strokeWidth="1.2" />
      <line x1="47.5" y1="54" x2="52.5" y2="54" stroke={primaryStroke} strokeWidth="1.2" />
      <line x1="47.5" y1="59" x2="52.5" y2="59" stroke={primaryStroke} strokeWidth="1.2" />
      <line x1="47.5" y1="64" x2="52.5" y2="64" stroke={primaryStroke} strokeWidth="1.2" />
    </svg>
  );
};
