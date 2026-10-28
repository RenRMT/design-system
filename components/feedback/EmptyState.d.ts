import * as React from 'react';
/** Muted line for an empty list or a filter with no matches, with an optional way out. */
export interface EmptyStateProps { children?: React.ReactNode; action?: React.ReactNode }
export function EmptyState(props: EmptyStateProps): JSX.Element;
