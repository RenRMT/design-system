/** Section heading with an optional right-aligned "All …" link. */
export interface SectionHeadProps {
  title: string;
  /** e.g. "All work projects". Omit to hide the link. */
  moreLabel?: string;
  moreHref?: string;
  onMore?: () => void;
  level?: 2 | 3;
}
export function SectionHead(props: SectionHeadProps): JSX.Element;
