const Logo = ({ width = 64, height = 64, className = "logo" }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Ghost Logo"
  >
    <path
      d="M32 8
         C18 8, 10 22, 14 38
         Q15 44, 12 52
         Q16 50, 20 54
         Q24 50, 28 54
         Q32 50, 36 54
         Q40 50, 44 54
         Q48 50, 52 52
         Q49 44, 50 38
         C54 22, 46 8, 32 8z"
      fill="#fff"
      stroke="#bbb"
      strokeWidth="2"
      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.10))"
    />

    <ellipse cx="24" cy="32" rx="3" ry="4" fill="#222" />
    <ellipse cx="40" cy="32" rx="3" ry="4" fill="#222" />

    <path
      d="M28 40 Q32 44 36 40"
      stroke="#222"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <ellipse cx="32" cy="59" rx="14" ry="3" fill="#bbb" opacity="0.3" />
  </svg>
);

export default Logo;
