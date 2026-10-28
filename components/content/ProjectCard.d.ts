import * as React from 'react';
/**
 * Project tile: image (or hatched placeholder), title + start year, one-sentence summary, optional tags.
 * @startingPoint section="Content" subtitle="Project tile with hatched no-image state" viewport="700x340"
 */
export interface ProjectCardProps {
  title: string;
  /** Year the project started, shown in mono */
  year?: string;
  summary: string;
  tags?: string[];
  showTags?: boolean;
  /** Missing or broken images fall back to the teal hatch */
  image?: string;
  href?: string;
  /** Shorter 16:8 image for track pages */
  dense?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}
export function ProjectCard(props: ProjectCardProps): JSX.Element;
