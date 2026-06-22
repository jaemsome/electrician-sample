export default function AboutSvg() {
  return (
    <svg
      viewBox="0 0 360 420"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', padding: '24px' }}
    >
      {/* open distribution board */}
      <rect x="215" y="60" width="120" height="280" rx="10" fill="#0d1526" stroke="#1e3a5f" strokeWidth="2" />
      <rect x="227" y="72" width="96" height="256" rx="6" fill="#0a0f1e" />
      <rect x="237" y="84" width="76" height="16" rx="3" fill="#FFD700" />
      <text x="275" y="95" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="6.5" fontWeight="800" fill="#0A0F1E">
        DISTRIBUTION BOARD
      </text>

      <rect x="245" y="112" width="60" height="22" rx="4" fill="#1e3a5f" stroke="#FFD700" strokeWidth="1.5" />
      <rect x="253" y="119" width="36" height="9" rx="2" fill="#FFD700" />
      <rect x="245" y="142" width="60" height="22" rx="4" fill="#1e3a5f" stroke="#FFD700" strokeWidth="1.5" />
      <rect x="253" y="149" width="36" height="9" rx="2" fill="#FFD700" />
      <rect x="245" y="172" width="60" height="22" rx="4" fill="#ef4444" stroke="#ef4444" strokeWidth="1.5" />
      <text x="275" y="187" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" fill="white">MAIN</text>
      <rect x="245" y="202" width="60" height="22" rx="4" fill="#1e3a5f" stroke="#374151" strokeWidth="1.5" />
      <rect x="253" y="215" width="36" height="9" rx="2" fill="#6B7280" />

      <line x1="245" y1="240" x2="305" y2="240" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="245" y1="252" x2="305" y2="252" stroke="#FFD700" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="245" y1="264" x2="305" y2="264" stroke="#6B7280" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="245" y1="276" x2="305" y2="276" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 3" />

      <rect x="237" y="312" width="76" height="16" rx="3" fill="rgba(255,215,0,0.08)" stroke="rgba(255,215,0,0.3)" strokeWidth="1" />
      <text x="275" y="323" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fontWeight="700" fill="rgba(255,215,0,0.7)">
        AS/NZS 3000
      </text>

      {/* ground shadow */}
      <ellipse cx="155" cy="346" rx="85" ry="9" fill="rgba(0,0,0,0.25)" />

      {/* back leg */}
      <line x1="130" y1="220" x2="124" y2="280" stroke="#111827" strokeWidth="22" strokeLinecap="round" />
      <line x1="124" y1="280" x2="120" y2="332" stroke="#111827" strokeWidth="18" strokeLinecap="round" />
      <rect x="106" y="330" width="28" height="13" rx="6" fill="#0d1117" />

      {/* front leg */}
      <line x1="166" y1="220" x2="178" y2="278" stroke="#111827" strokeWidth="22" strokeLinecap="round" />
      <line x1="178" y1="278" x2="190" y2="330" stroke="#111827" strokeWidth="18" strokeLinecap="round" />
      <rect x="176" y="328" width="30" height="13" rx="6" fill="#0d1117" />

      {/* lowered arm + voltage tester */}
      <line x1="120" y1="148" x2="100" y2="178" stroke="#1e3a5f" strokeWidth="16" strokeLinecap="round" />
      <line x1="100" y1="178" x2="106" y2="208" stroke="#1e3a5f" strokeWidth="13" strokeLinecap="round" />
      <circle cx="107" cy="212" r="9" fill="#374151" />
      <rect x="98" y="206" width="14" height="32" rx="3" fill="#111827" stroke="#FFD700" strokeWidth="1" />
      <circle cx="105" cy="204" r="3" fill="#22c55e" />

      {/* torso */}
      <path d="M118 142 Q148 132 178 142 L182 215 Q148 226 114 215 Z" fill="#1e3a5f" />
      <path d="M134 142 L148 153 L162 142 Z" fill="#15233c" />
      <path d="M120 168 L176 158 L180 170 L124 180 Z" fill="#FFD700" />
      <path d="M122 188 L178 178 L182 190 L126 200 Z" fill="#FFD700" />

      {/* tool belt */}
      <rect x="112" y="212" width="72" height="13" rx="4" fill="#0d1526" stroke="#374151" strokeWidth="1" />
      <rect x="118" y="222" width="16" height="20" rx="2" fill="#1e3a5f" />
      <rect x="160" y="222" width="16" height="20" rx="2" fill="#1e3a5f" />

      {/* reaching arm, hand at breaker */}
      <line x1="176" y1="148" x2="204" y2="120" stroke="#1e3a5f" strokeWidth="16" strokeLinecap="round" />
      <line x1="204" y1="120" x2="232" y2="134" stroke="#1e3a5f" strokeWidth="13" strokeLinecap="round" />
      <circle cx="237" cy="124" r="9" fill="#374151" />

      {/* head + hard hat */}
      <rect x="142" y="130" width="12" height="12" fill="#C68642" />
      <ellipse cx="148" cy="108" rx="24" ry="26" fill="#C68642" />
      <ellipse cx="148" cy="84" rx="27" ry="18" fill="#FFD700" />
      <rect x="120" y="96" width="56" height="7" rx="3" fill="#e6c200" />
    </svg>
  );
}
