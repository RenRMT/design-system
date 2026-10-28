import * as React from 'react';
/** Mono uppercase kicker above a heading: a date, a section, a status. */
export interface EyebrowProps {
  /** Prefix with the coral data-point square */
  mark?: boolean;
  as?: 'p' | 'span' | 'div';
  children?: React.ReactNode;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
