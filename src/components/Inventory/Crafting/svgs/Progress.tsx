import { type CSSProperties, type HTMLAttributes, useEffect, useMemo, useRef } from 'react';
import cls from 'classnames';

import styles from './styles.module.scss';

type ProgressProps = HTMLAttributes<SVGCircleElement> & {
  toProgress?: number;
  shouldAnimate?: boolean;
};

export default function Progress({
  className,
  shouldAnimate,
  toProgress = 0,
  style,
  ...restProps
}: ProgressProps) {
  const circleRef = useRef<SVGCircleElement>(null);
  const prevProgress = useRef(0);

  useEffect(() => {
    if (circleRef.current) {
      const radius = circleRef.current.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;

      circleRef.current.style.strokeDasharray = `${circumference} ${circumference}`;

      circleRef.current.style.strokeDashoffset = `${circumference}`;
    }
  }, [circleRef]);

  useEffect(() => {
    prevProgress.current = toProgress;

    if (circleRef.current) {
      const radius = circleRef.current.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;

      const offset = circumference - (toProgress / 100) * circumference;

      circleRef.current.style.strokeDashoffset = `${offset}`;
    }
  }, [toProgress]);

  const calculatedStyle = useMemo<CSSProperties>(
    () => ({
      transitionDuration: shouldAnimate
        ? (2 / 100) * Math.abs(toProgress - prevProgress.current) + 's'
        : '0s',
      ...style,
    }),
    [toProgress, shouldAnimate, style],
  );

  return (
    <svg className={cls(styles.ProgressRing, className)}>
      <circle
        ref={circleRef}
        className={styles.circle}
        cx="50%"
        cy="50%"
        fill="transparent"
        // keep full progress animation duration at 2s
        r="43%"
        // by default when width is 120px and stroke width is 4px, r should be 60 - 2*4 = 52, which is 43%.
        style={calculatedStyle}
        {...restProps}
      />
    </svg>
  );
}
