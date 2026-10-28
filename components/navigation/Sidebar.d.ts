/**
 * Personal site sidebar: avatar, name, tagline, nav with coral active square, social links, theme toggle.
 * @startingPoint section="Navigation" subtitle="rendata.nl sidebar with coral active marker" viewport="700x520"
 */
export interface SidebarItem { id: string; label: string; href?: string }
export interface SidebarLink { label: string; href: string }
export interface SidebarProps {
  name?: string;
  tagline?: string;
  /** Avatar image URL; omitted = hatched placeholder circle */
  avatar?: string;
  items?: SidebarItem[];
  /** id of the current item */
  active?: string;
  /** If set, links call this instead of navigating */
  onNavigate?: (id: string) => void;
  social?: SidebarLink[];
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
  /** Top-bar variant for screens under ~860px */
  compact?: boolean;
}
export function Sidebar(props: SidebarProps): JSX.Element;
