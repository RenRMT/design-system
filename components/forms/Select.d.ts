/** Compact labelled dropdown used in toolbars (colour picker: palette, colour, steps). */
export interface SelectOption { value: string; label: string }
export interface SelectProps {
  label?: string;
  options?: (string | SelectOption)[];
  value?: string;
  onChange?: (value: string) => void;
  id?: string;
}
export function Select(props: SelectProps): JSX.Element;
