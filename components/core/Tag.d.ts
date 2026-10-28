import * as React from 'react';
/** Non-interactive mono label with a 6px square key, like a chart legend entry. */
export interface TagProps {
  /** default = Teal 4 key; strong = brand key, ink text; plain = Steel key (drafts, "other") */
  tone?: 'default' | 'strong' | 'plain';
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
