"use client"
import React, { useEffect, useState, memo } from 'react';

// --- Type Definitions ---
type IconType = 'html' | 'css' | 'javascript' | 'typescript' | 'react' | 'node' | 'tailwind' | 'next' | 'npm';

type GlowColor = 'purple' | 'pink';

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Improved SVG Icon Components ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
  html: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full" shapeRendering="geometricPrecision">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" fill="#E34F26" stroke="#E34F26" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M1.5 0h0m7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="white" />
      </svg>
    ),
    color: '#E34F26'
  },
  css: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full" shapeRendering="geometricPrecision">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z" fill="#1572B6" stroke="#1572B6" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M1.5 0h0m17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z" fill="white" />
      </svg>
    ),
    color: '#1572B6'
  },
  javascript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E" rx="2" ry="2" />
        <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#323330" />
      </svg>
    ),
    color: '#F7DF1E'
  },
  typescript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#3178C6" rx="2" ry="2" />

        <text x="23" y="23" fontSize="14" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif" fontWeight="500" textAnchor="end" fill="#FFFFFF">TS</text>
      </svg>
    ),
    color: '#3178C6'
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
    color: '#61DAFB'
  },
  node: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247zm2.717-6.993c-3.849 0-4.654-1.766-4.654-3.246 0-.14.114-.253.256-.253h1.136c.127 0 .232.091.252.215.173 1.164.686 1.752 3.01 1.752 1.852 0 2.639-.419 2.639-1.401 0-.566-.224-1.03-3.099-1.249-2.404-.184-3.89-.768-3.89-2.689 0-1.771 1.491-2.825 3.991-2.825 2.808 0 4.199.975 4.377 3.068.007.072-.019.141-.065.193-.047.049-.111.077-.178.077h-1.14c-.119 0-.225-.083-.248-.196-.276-1.224-.944-1.616-2.746-1.616-2.023 0-2.259.705-2.259 1.234 0 .641.278.827 3.006 1.19 2.7.359 3.982.866 3.982 2.771 0 1.922-1.603 3.024-4.399 3.024z" fill="#339933" />
      </svg>
    ),
    color: '#339933'
  },
  tailwind: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="#06B6D4" />
      </svg>
    ),
    color: '#06B6D4'
  },
  next: {
    component: () => (
      <svg role="img" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" shapeRendering="geometricPrecision">
        <circle cx="12" cy="12" r="11.4" fill="black" stroke="black" strokeWidth="1.2" />
        <path d="M12 24c5.49 0 10.054-3.793 11.432-8.868l-8.62-11.22C14.156 3.056 13.11 2.5 12 2.5c-5.49 0-10.054 3.793-11.432 8.868l8.62 11.22c.656.854 1.702 1.412 2.812 1.412z" fill="#00000000" />
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" fill="white" />
      </svg>
    ),
    color: '#ffffff'
  },
  npm: {
    component: () => (
      <svg role="img" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="24" height="24" fill="#CB3837" rx="2" ry="2" />
        <path fill="#FFF" transform="translate(3, 8)" d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4" />
      </svg>
    ),
    color: '#CB3837'
  }
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit
  {
    id: 'html',
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: 'html',
    phaseShift: 0,
    glowColor: 'pink',
    label: 'HTML5'
  },
  {
    id: 'css',
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: 'css',
    phaseShift: Math.PI / 2,
    glowColor: 'pink',
    label: 'CSS3'
  },
  {
    id: 'javascript',
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: 'javascript',
    phaseShift: Math.PI,
    glowColor: 'pink',
    label: 'JavaScript'
  },
  {
    id: 'typescript',
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: 'typescript',
    phaseShift: (3 * Math.PI) / 2,
    glowColor: 'pink',
    label: 'TypeScript'
  },
  // Outer Orbit
  {
    id: 'react',
    orbitRadius: 180,
    size: 50,
    speed: -0.6,
    iconType: 'react',
    phaseShift: 0,
    glowColor: 'purple',
    label: 'React'
  },
  {
    id: 'node',
    orbitRadius: 180,
    size: 45,
    speed: -0.6,
    iconType: 'node',
    phaseShift: (2 * Math.PI) / 5,
    glowColor: 'purple',
    label: 'Node.js'
  },
  {
    id: 'tailwind',
    orbitRadius: 180,
    size: 40,
    speed: -0.6,
    iconType: 'tailwind',
    phaseShift: (4 * Math.PI) / 5,
    glowColor: 'purple',
    label: 'Tailwind CSS'
  },
  {
    id: 'next',
    orbitRadius: 180,
    size: 45,
    speed: -0.6,
    iconType: 'next',
    phaseShift: (6 * Math.PI) / 5,
    glowColor: 'purple',
    label: 'Next.js'
  },
  {
    id: 'npm',
    orbitRadius: 180,
    size: 45,
    speed: -0.6,
    iconType: 'npm',
    phaseShift: (8 * Math.PI) / 5,
    glowColor: 'purple',
    label: 'npm'
  },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out will-change-transform"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%)) translateZ(0)`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-1.5 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined,
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
          transform: 'translateZ(0)',
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'pink', animationDelay = 0 }: GlowingOrbitPathProps) => {
  // Use colors from ShatterButton: #9b5de5 (purple) and #ff00ff (pink/magenta)
  // Converting to RGBA for opacity handling

  // Pink/Magenta (#ff00ff) -> 255, 0, 255
  const pinkColors = {
    primary: 'rgba(255, 0, 255, 0.6)',
    secondary: 'rgba(255, 0, 255, 0.3)',
    border: 'rgba(255, 0, 255, 0.4)'
  };

  // Purple (#9b5de5) -> 155, 93, 229
  const purpleColors = {
    primary: 'rgba(155, 93, 229, 0.6)',
    secondary: 'rgba(155, 93, 229, 0.3)',
    border: 'rgba(155, 93, 229, 0.4)'
  };

  // Pulse animation alternations
  const pinkAnimationName = glowColor === 'pink' ? 'orbit-pulse-1' : 'orbit-pulse-2';
  const purpleAnimationName = glowColor === 'pink' ? 'orbit-pulse-2' : 'orbit-pulse-1';

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
      }}
    >
      {/* Pink/Magenta Layer */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          animation: `${pinkAnimationName} 3s ease-in-out infinite`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, transparent 30%, ${pinkColors.secondary} 70%, ${pinkColors.primary} 100%)`,
            boxShadow: `0 0 60px ${pinkColors.primary}, inset 0 0 60px ${pinkColors.secondary}`,
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${pinkColors.border}`,
            boxShadow: `inset 0 0 20px ${pinkColors.secondary}`,
          }}
        />
      </div>

      {/* Purple Layer */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          animation: `${purpleAnimationName} 3s ease-in-out infinite`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, transparent 30%, ${purpleColors.secondary} 70%, ${purpleColors.primary} 100%)`,
            boxShadow: `0 0 60px ${purpleColors.primary}, inset 0 0 60px ${purpleColors.secondary}`,
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${purpleColors.border}`,
            boxShadow: `inset 0 0 20px ${purpleColors.secondary}`,
          }}
        />
      </div>
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main App Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Updated colors to match ShatterButton
  // #9b5de5 (Purple) and #ff00ff (Magenta)
  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 100, glowColor: 'purple', delay: 0 },
    { radius: 180, glowColor: 'purple', delay: 0 }
  ];

  return (
    <main className="w-full flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes orbit-pulse-1 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes orbit-pulse-2 {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #374151 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #4B5563 0%, transparent 50%)`,
          }}
        />
      </div>

      <div
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[450px] md:h-[450px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* Central "Code" Icon with enhanced glow matching the new colors */}
        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-[#ff00ff]/30 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-[#9b5de5]/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff00ff" /> {/* Magenta */}
                  <stop offset="100%" stopColor="#9b5de5" /> {/* Purple */}
                </linearGradient>
              </defs>
              <g stroke="url(#gradient)" strokeWidth="0.75" fill="none">
                <circle cx="12" cy="12" r="2" fill="url(#gradient)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.5" />
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
              </g>
            </svg>
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}
      </div>
    </main>
  );
}
