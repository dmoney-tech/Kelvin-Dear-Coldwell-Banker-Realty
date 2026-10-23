import React from 'react';

interface ColdwellBankerLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showAgentLockup?: boolean;
}

export const ColdwellBankerLogo: React.FC<ColdwellBankerLogoProps> = ({
  variant = 'dark',
  className = '',
  showAgentLockup = true
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? '#FFFFFF' : '#082B62';
  const starColor = isLight ? '#C8B58B' : '#082B62';
  const subtitleColor = isLight ? '#D1D5DB' : '#667085';
  const dividerColor = isLight ? 'rgba(255, 255, 255, 0.25)' : '#E5E7EB';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* CB Emblem */}
      <div className="flex items-center gap-2.5 shrink-0">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 shrink-0"
          aria-label="Coldwell Banker emblem"
        >
          {/* Outer square container with rounded corners */}
          <rect
            x="1.5"
            y="1.5"
            width="41"
            height="41"
            rx="6"
            stroke={textColor}
            strokeWidth="3"
            fill={isLight ? 'rgba(255, 255, 255, 0.08)' : '#082B62'}
          />
          {/* CB interlocking monogram style */}
          <path
            d="M 17 12 C 12 12 9 16 9 22 C 9 28 12 32 17 32 C 21 32 23 30 24 28"
            stroke={isLight ? '#FFFFFF' : '#FFFFFF'}
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 23 14 H 28 C 31 14 33 16 33 18.5 C 33 21 31 22 28 22 H 23 V 30 H 29 C 32 30 34 28 34 26"
            stroke={isLight ? '#FFFFFF' : '#FFFFFF'}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* 4-point North Star */}
          <path
            d="M 33 9 L 34.2 12 L 37 13.2 L 34.2 14.4 L 33 17 L 31.8 14.4 L 29 13.2 L 31.8 12 Z"
            fill={starColor}
          />
        </svg>

        {/* Coldwell Banker Realty Typography */}
        <div className="flex flex-col leading-tight">
          <span
            className="text-[13px] font-extrabold tracking-[0.14em] uppercase"
            style={{ color: textColor, fontFamily: 'var(--font-display)' }}
          >
            COLDWELL BANKER
          </span>
          <span
            className="text-[9.5px] font-semibold tracking-[0.28em] uppercase opacity-90"
            style={{ color: textColor }}
          >
            REALTY
          </span>
        </div>
      </div>

      {/* Vertical Hairline Divider & Agent Lockup */}
      {showAgentLockup && (
        <div className="hidden sm:flex items-center gap-3 pl-3 border-l" style={{ borderColor: dividerColor }}>
          <div className="flex flex-col">
            <span
              className="text-xs font-semibold tracking-wide"
              style={{ color: textColor, fontFamily: 'var(--font-display)' }}
            >
              Kelvin Dear
            </span>
            <span className="text-[10px] tracking-wider uppercase font-medium" style={{ color: subtitleColor }}>
              REALTOR® · West Valley
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
