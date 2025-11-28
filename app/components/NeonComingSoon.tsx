export function NeonComingSoon() {
  return (
    <div className='relative'>
      <svg
        viewBox='0 0 2000 1800'
        className='neon-pulse block w-full h-auto max-w-[95vw] md:max-w-[3200px] overflow-visible'
        xmlns='http://www.w3.org/2000/svg'
        overflow='visible'
      >
        <defs>
          {/* White neon glow */}
          <filter
            id='whiteNeonGlow'
            x='-50%'
            y='-50%'
            width='200%'
            height='200%'
          >
            <feGaussianBlur stdDeviation='8' result='coloredBlur' />
            <feMerge>
              <feMergeNode in='coloredBlur' />
              <feMergeNode in='coloredBlur' />
              <feMergeNode in='coloredBlur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>

          {/* Red neon glow */}
          <filter id='redNeonGlow' x='-50%' y='-50%' width='200%' height='200%'>
            <feGaussianBlur stdDeviation='10' result='coloredBlur' />
            <feMerge>
              <feMergeNode in='coloredBlur' />
              <feMergeNode in='coloredBlur' />
              <feMergeNode in='coloredBlur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>

          {/* Stronger outer glow */}
          <filter id='outerGlow' x='-100%' y='-100%' width='300%' height='300%'>
            <feGaussianBlur stdDeviation='15' result='blur' />
            <feFlood floodColor='#ffffff' floodOpacity='0.3' />
            <feComposite in2='blur' operator='in' />
            <feMerge>
              <feMergeNode />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>

        {/* COMING / SOON text grouped for responsive scaling */}
        <g className='coming-soon-text'>
          <g id='coming' filter='url(#whiteNeonGlow)'>
            <text
              x='1000'
              y='600'
              textAnchor='middle'
              fontSize='600'
              fontFamily='Arial Black, Impact, sans-serif'
              fill='none'
              stroke='#ffffff'
              strokeWidth='28'
              letterSpacing='36'
            >
              COMING
            </text>
            {/* Inner glow */}
            <text
              x='1000'
              y='600'
              textAnchor='middle'
              fontSize='600'
              fontFamily='Arial Black, Impact, sans-serif'
              fill='none'
              stroke='#e0f2fe'
              strokeWidth='16'
              letterSpacing='36'
              opacity='0.8'
            >
              COMING
            </text>
          </g>

          {/* SOON - Red neon outlined letters */}
          <g id='soon' filter='url(#redNeonGlow)'>
            <text
              x='1000'
              y='1050'
              textAnchor='middle'
              fontSize='720'
              fontFamily='Arial Black, Impact, sans-serif'
              fill='none'
              stroke='#dc2626'
              strokeWidth='32'
              letterSpacing='44'
            >
              SOON
            </text>
            {/* Inner bright red */}
            <text
              x='1000'
              y='1050'
              textAnchor='middle'
              fontSize='720'
              fontFamily='Arial Black, Impact, sans-serif'
              fill='none'
              stroke='#ef4444'
              strokeWidth='18'
              letterSpacing='44'
              opacity='0.9'
            >
              SOON
            </text>
            {/* Innermost brightest */}
            <text
              x='1000'
              y='1050'
              textAnchor='middle'
              fontSize='720'
              fontFamily='Arial Black, Impact, sans-serif'
              fill='none'
              stroke='#fca5a5'
              strokeWidth='9'
              letterSpacing='44'
              opacity='0.6'
            >
              SOON
            </text>
          </g>
        </g>

        {/* Progress bar / loading bar */}
        <g id='progressBar' filter='url(#whiteNeonGlow)'>
          {/* Outer rounded rectangle frame */}
          <rect
            x='300'
            y='1380'
            width='1400'
            height='140'
            rx='70'
            ry='70'
            fill='none'
            stroke='#ffffff'
            strokeWidth='12'
          />

          {/* Inner glow for frame */}
          <rect
            x='300'
            y='1380'
            width='1400'
            height='140'
            rx='70'
            ry='70'
            fill='none'
            stroke='#e0f2fe'
            strokeWidth='8'
            opacity='0.7'
          />

          {/* Red fill progress (animated) */}
          <rect
            x='332'
            y='1406'
            width='0'
            height='88'
            rx='44'
            ry='44'
            fill='#dc2626'
            filter='url(#redNeonGlow)'
          >
            <animate
              attributeName='width'
              from='0'
              to='1336'
              dur='3s'
              fill='freeze'
              repeatCount='indefinite'
            />
          </rect>

          {/* Brighter red overlay on progress */}
          <rect
            x='332'
            y='1406'
            width='0'
            height='88'
            rx='44'
            ry='44'
            fill='#ef4444'
            opacity='0.8'
          >
            <animate
              attributeName='width'
              from='0'
              to='1336'
              dur='3s'
              fill='freeze'
              repeatCount='indefinite'
            />
          </rect>

          {/* Loading dots on the bar */}
          {Array.from({ length: 14 }).map((_, i) => (
            <circle
              key={i}
              cx={380 + i * 90}
              cy='1460'
              r='14'
              fill='#ffffff'
              opacity='0'
            >
              <animate
                attributeName='opacity'
                values='0;1;0'
                dur='3s'
                begin={`${i * 0.22}s`}
                repeatCount='indefinite'
              />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  );
}
