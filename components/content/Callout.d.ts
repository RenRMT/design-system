import * as React from 'react';
/** Style-guide note: a firm rule, a thing to avoid, an adaptation tip, or a link to the reasoning. */
export interface CalloutProps {
  kind?: 'rule' | 'avoid' | 'adapt' | 'why';
  /** Override the mono label */
  label?: string;
  children?: React.ReactNode;
}
export function Callout(props: CalloutProps): JSX.Element;
