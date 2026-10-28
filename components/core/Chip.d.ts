import * as React from 'react';
/** Underline-tab filter. Active = semibold with a 3px coral underline. Place inside ChipRow. */
export interface ChipProps {
  pressed?: boolean;
  /** Optional item count, shown in mono after the label */
  count?: number;
  onClick?: () => void;
  children?: React.ReactNode;
}
export function Chip(props: ChipProps): JSX.Element;
/** Wrapping row for Chips with a 1px baseline rule; gap 0 20px. */
export interface ChipRowProps { label?: string; children?: React.ReactNode }
export function ChipRow(props: ChipRowProps): JSX.Element;
