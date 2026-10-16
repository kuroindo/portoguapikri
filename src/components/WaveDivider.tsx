interface WaveDividerProps { flip?: boolean; tone?: 'light' | 'dark' }

export function WaveDivider({ flip = false, tone = 'light' }: WaveDividerProps) {
  return <div className={`wave-divider ${flip ? 'wave-flip' : ''} ${tone === 'dark' ? 'wave-dark' : ''}`} aria-hidden="true">
    <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
      <path className="wave-depth" d="M0 79 C154 109 284 120 434 98 C605 72 718 39 864 54 C1055 74 1180 134 1440 82 L1440 180 L0 180Z" />
      <path className="wave-fill" d="M0 99 C154 129 284 140 434 118 C605 92 718 59 864 74 C1055 94 1180 154 1440 102 L1440 180 L0 180Z" />
    </svg>
  </div>
}
