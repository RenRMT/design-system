/**
 * BAN: one number that carries the message, with label and a line of context.
 * @startingPoint section="Content" subtitle="Big aggregated number with label and context" viewport="700x200"
 */
export interface BigNumberProps {
  /** What it is, with units and period: "Security incidents, March 2026" */
  label: string;
  value: string;
  /** Perspective line: "About 1 in every 4 planned missions". Include the + or − sign with any trend. */
  context?: string;
  trend?: 'up' | 'down';
  /** Top rule colour */
  accent?: 'brand' | 'accent';
}
export function BigNumber(props: BigNumberProps): JSX.Element;
