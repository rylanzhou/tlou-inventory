import React, { useMemo } from 'react';
import cls from 'classnames';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  fill?: number;
  weight?: number;
  size?: number | string;
}

export default function Icon(props: IconProps) {
  const { name, fill = 0, weight = 400, size, className, style, ...rest } = props;

  const fontVariationSettings = useMemo(
    () => ({
      fontVariationSettings: [`'FILL' ${fill}`, `'wght' ${weight}`].join(', '),
    }),
    [fill, weight],
  );

  const styleObj = useMemo(
    () => ({ ...fontVariationSettings, verticalAlign: 'bottom', fontSize: size, ...style }),
    [fontVariationSettings, size, style],
  );

  return (
    <span className={cls('material-symbols-outlined', className)} style={styleObj} {...rest}>
      {name}
    </span>
  );
}
