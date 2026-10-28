import * as React from 'react';
/**
 * Rectangular button. One primary (coral) per view; everything else outline or quiet.
 * @startingPoint section="Core" subtitle="Coral primary, teal outline (no fill), quiet link-button" viewport="700x220"
 */
export interface ButtonProps {
  /** primary = the one thing to do; outline = alternatives; quiet = tertiary, reads as a link */
  variant?: 'primary' | 'outline' | 'quiet';
  size?: 'md' | 'sm';
  /** Renders an <a> when set */
  href?: string;
  disabled?: boolean;
  /** Shows a trailing ellipsis and blocks clicks while work is happening */
  busy?: boolean;
  type?: 'button' | 'submit';
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
