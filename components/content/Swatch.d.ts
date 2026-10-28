/** Click-to-copy colour swatch from the colour picker. Missing hex renders the hatched "not defined" state. */
export interface SwatchProps {
  name: string;
  /** Uppercase #RRGGBB. Omit to show the error state. */
  hex?: string;
  /** Caption colour: #191919 or #FFFFFF, whichever the palette lists */
  ink?: string;
  height?: number;
  onCopy?: (hex: string) => void;
}
export function Swatch(props: SwatchProps): JSX.Element;
