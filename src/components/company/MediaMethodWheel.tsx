import React from 'react';

type SegmentId = 'who' | 'what' | 'so-what' | 'whats-next' | 'how';

type Segment = {
  id: SegmentId;
  label: string;
  startAngle: number;
  endAngle: number;
};

type MediaMethodWheelProps = {
  activeSegmentId: SegmentId;
  onSegmentChange?: (id: SegmentId) => void;
};

const CENTER = 200;
const OUTER_RADIUS = 190;
const INNER_RADIUS = 90;

const degToRad = (deg: number) => (Math.PI / 180) * deg;

const polarToCartesian = (radius: number, angleDeg: number) => {
  const angle = degToRad(angleDeg);
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  };
};

const createWedgePath = (startAngle: number, endAngle: number) => {
  const outerStart = polarToCartesian(OUTER_RADIUS, startAngle);
  const outerEnd = polarToCartesian(OUTER_RADIUS, endAngle);
  const innerEnd = polarToCartesian(INNER_RADIUS, endAngle);
  const innerStart = polarToCartesian(INNER_RADIUS, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${OUTER_RADIUS} ${OUTER_RADIUS} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${INNER_RADIUS} ${INNER_RADIUS} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}`,
    'Z',
  ].join(' ');
};

const segments: Segment[] = [
  {
    id: 'who',
    label: 'WHO',
    startAngle: -126,
    endAngle: -54,
  },
  {
    id: 'what',
    label: 'WHAT',
    startAngle: -54,
    endAngle: 18,
  },
  {
    id: 'so-what',
    label: 'SO WHAT',
    startAngle: 18,
    endAngle: 90,
  },
  {
    id: 'whats-next',
    label: "WHAT'S NEXT",
    startAngle: 90,
    endAngle: 162,
  },
  {
    id: 'how',
    label: 'HOW',
    startAngle: 162,
    endAngle: 234,
  },
];

const MediaMethodWheel: React.FC<MediaMethodWheelProps> = ({
  activeSegmentId,
  onSegmentChange,
}) => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <svg
        viewBox="0 0 400 400"
        role="img"
        aria-labelledby="media-wheel-title media-wheel-desc"
      >
        <title id="media-wheel-title">Audience strategy framework</title>
        <desc id="media-wheel-desc">
          Circular diagram showing WHO, WHAT, HOW, SO WHAT, and WHAT&apos;S NEXT around a central concept.
        </desc>

        {/* Background */}
        <circle cx={CENTER} cy={CENTER} r={OUTER_RADIUS} className="fill-portfolio-text" />

        {/* Segments */}
        {segments.map((segment) => {
          const isActive = segment.id === activeSegmentId;
          return (
            <path
              key={segment.id}
              d={createWedgePath(segment.startAngle, segment.endAngle)}
              className={`cursor-pointer transition-colors duration-200 ${
                isActive ? 'fill-portfolio-bg' : 'fill-portfolio-text-secondary'
              }`}
              onMouseEnter={() => onSegmentChange?.(segment.id)}
            />
          );
        })}

        {/* Inner circle */}
        <circle cx={CENTER} cy={CENTER} r={INNER_RADIUS} className="fill-portfolio-accent" />

        {/* Center text */}
        <text
          x={CENTER}
          y={CENTER + 16}
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          letterSpacing="2"
          className="fill-portfolio-bg"
        >
          UNITED MEDIA
        </text>

        {/* Segment labels */}
        {segments.map((segment) => {
          const midAngle = (segment.startAngle + segment.endAngle) / 2;
          const labelRadius = (OUTER_RADIUS + INNER_RADIUS) / 2;
          const { x, y } = polarToCartesian(labelRadius, midAngle);

          const isActive = segment.id === activeSegmentId;

          return (
            <text
              key={`${segment.id}-label`}
              x={x}
              y={y}
              textAnchor="middle"
              fontSize="18"
              fontWeight="bold"
              className={isActive ? 'fill-portfolio-accent' : 'fill-portfolio-bg'}
            >
              {segment.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default MediaMethodWheel;


