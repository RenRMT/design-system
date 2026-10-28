/** Light/dark switch with a mono label. Persist the choice yourself (rendata.nl uses localStorage key "getij-theme"). */
export interface ThemeToggleProps {
  theme?: 'light' | 'dark';
  onToggle?: () => void;
  showLabel?: boolean;
}
export function ThemeToggle(props: ThemeToggleProps): JSX.Element;
