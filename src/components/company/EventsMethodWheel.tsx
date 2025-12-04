import React from 'react';

type SegmentId = 'strategy' | 'conceptualization' | 'execution' | 'measurement';

type Segment = {
  id: SegmentId;
  label: string;
  startAngle: number;
  endAngle: number;
};

type EventsMethodWheelProps = {
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
    id: 'strategy',
    label: 'STRATEGY',
    startAngle: -135,
    endAngle: -45,
  },
  {
    id: 'conceptualization',
    label: 'CONCEPT',
    startAngle: -45,
    endAngle: 45,
  },
  {
    id: 'execution',
    label: 'EXECUTION',
    startAngle: 45,
    endAngle: 135,
  },
  {
    id: 'measurement',
    label: 'MEASURE',
    startAngle: 135,
    endAngle: 225,
  },
];

// Mapa de segmentos adyacentes (en orden circular)
const adjacentSegments: Record<SegmentId, SegmentId[]> = {
  'strategy': ['measurement', 'conceptualization'],
  'conceptualization': ['strategy', 'execution'],
  'execution': ['conceptualization', 'measurement'],
  'measurement': ['execution', 'strategy'],
};

const EventsMethodWheel: React.FC<EventsMethodWheelProps> = ({
  activeSegmentId,
  onSegmentChange,
}) => {
  return (
    <div className="w-full max-w-xl">
      <svg
        viewBox="0 0 400 400"
        role="img"
        aria-labelledby="events-wheel-title events-wheel-desc"
      >
        <title id="events-wheel-title">Events strategy framework</title>
        <desc id="events-wheel-desc">
          Circular diagram showing STRATEGY, CONCEPTUALIZATION, EXECUTION, and MEASUREMENT around a central concept.
        </desc>

        {/* Background */}
        <circle cx={CENTER} cy={CENTER} r={OUTER_RADIUS} className="fill-portfolio-text" />

        {/* Segments */}
        {segments.map((segment) => {
          const isActive = segment.id === activeSegmentId;
          const isAdjacent = adjacentSegments[activeSegmentId]?.includes(segment.id);

          let fillClass = 'fill-portfolio-text';
          if (isActive) {
            fillClass = 'fill-portfolio-accent';
          } else if (isAdjacent) {
            fillClass = 'fill-portfolio-text-secondary';
          }

          return (
            <path
              key={segment.id}
              d={createWedgePath(segment.startAngle, segment.endAngle)}
              className={`cursor-pointer transition-colors duration-200 ${fillClass}`}
              onMouseEnter={() => onSegmentChange?.(segment.id)}
            />
          );
        })}

        {/* Inner circle */}
        <circle cx={CENTER} cy={CENTER} r={INNER_RADIUS} className="fill-portfolio-accent" />

        {/* Center text - Two lines */}
        <text
          x={CENTER}
          y={CENTER - 4}
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          letterSpacing="2"
          className="fill-portfolio-bg"
        >
          <tspan x={CENTER} dy="0">UNITED</tspan>
          <tspan x={CENTER} dy="20">EXPERIENCES</tspan>
        </text>

        {/* Segment labels */}
        {segments.map((segment) => {
          const midAngle = (segment.startAngle + segment.endAngle) / 2;
          const labelRadius = (OUTER_RADIUS + INNER_RADIUS) / 2;
          const { x, y } = polarToCartesian(labelRadius, midAngle);

          const isActive = segment.id === activeSegmentId;
          const isAdjacent = adjacentSegments[activeSegmentId]?.includes(segment.id);

          let textClass = 'fill-portfolio-accent';
          if (isActive) {
            textClass = 'fill-portfolio-bg';
          } else if (isAdjacent) {
            textClass = 'fill-portfolio-accent/60';
          }

          return (
            <text
              key={`${segment.id}-label`}
              x={x}
              y={y}
              textAnchor="middle"
              fontSize="18"
              fontWeight="bold"
              className={textClass}
            >
              {segment.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default EventsMethodWheel;

